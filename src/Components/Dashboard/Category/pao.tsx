import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { FormEvent } from "react";
import {
  // useGetChat,
  // useWelcomeText,
  useGetResponse,
  chatRouter,
} from "../../../api/hooks";
import { useFileStore, useUserInfoStore } from "../../../store";
import { useQueryClient } from "@tanstack/react-query";
import { Chat } from "../../../api/type";
// import { authTokenStore } from "../../../store";

const Pao = () => {
  const queryClient = useQueryClient();
  const initials = useUserInfoStore((s) => s.initials);
  const [fileId, fileName, fileUser] = useFileStore((state) => [
    state.fileId,
    state.fileName,
    state.user,
  ]);
  const recentChatVariable = {
    file_id: fileId,
    user: fileUser,
  };
  const { mutate: mutateGetResponse } = useGetResponse({
    async onMutate(variables) {
      console.log("on-mutate")
      await queryClient.cancelQueries(
        chatRouter.getRecent.getFetchOptions(recentChatVariable)
      );
      const previousChats = queryClient.getQueryData(
        chatRouter.getRecent.getKey(recentChatVariable)
      ) as Chat[];
      const newChats = [...previousChats];

      newChats.push({
        message: variables.body,
        type: "human",
        logo: initials,
      });
      queryClient.setQueryData(
        chatRouter.getRecent.getKey(recentChatVariable),
        newChats
      )
      return { previousChats, newChats };
    },
    onError(_error, _variables, context) {
      queryClient.setQueryData(
        chatRouter.getRecent.getKey(recentChatVariable),
        context?.previousChats
      )
      // toast error
    },
    onSuccess(){
      queryClient.invalidateQueries(chatRouter.getRecent.getKey(recentChatVariable))
    }
  });
  const { data: recentChats } = chatRouter.getRecent.useQuery({
    variables: recentChatVariable,
    cacheTime: Infinity,
  });

  const sendMessage = React.useCallback((message: string) => {
    mutateGetResponse({
      body: message,
      user: fileUser,
      file_id: fileId,
      file_name: fileName,
    });
  }, []);

  const handleSubmit = React.useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.currentTarget?.message.value;
    if (!message) return;
    sendMessage(message);
    e.currentTarget.message.value=""
  }, []);

  const newMessage = recentChats ? recentChats.length === 0 : false;

  return (
    <div>
      <div className="px-5 h-screen" id="board">
        <div className="text-center">
          <span className="text-sm text-[#908E89]">
            Assembly Language and Python programming &gt;{" "}
            <span className="font-bold text-black">Pao</span>
          </span>
        </div>

        <div className="bg-white w-full md:w-[90%] h-full mx-auto rounded-2xl py-16 px-10 md:px-16 my-10 overflow-y-scroll">
          {newMessage && <WelcomePrompt {...{ fileId, fileName, fileUser,sendMessage }} />}
        <ChatInterface data={recentChats}/>
        <ChatFooter {...{handleSubmit}}/>
        </div>
      </div>
    </div>
  );
};

const ChatInterface= ({data}:{data?:Chat[]})=>{
  return(
    <div className="flex flex-col gap-2 w-full mb-24">
    {data?.map((chat,i)=>{
      const isAI= chat.type==="ai"
      return (
      <div key={`${chat.message}-${i}`} className={isAI? "flex justify-start":"flex justify-end"}>
        <ChatCard {...chat}/>
      </div>
    )})}
    </div>
  )
}
const ChatCard= ({message,type,logo}:Chat)=>{
  const isAi= type==="ai"
  return(
    <div className={isAi? "flex gap-2 align-start":"flex gap-2 align-start flex-row-reverse"}>
      <img
      src={isAi?logo:`https://api.dicebear.com/8.x/initials/svg?seed=${logo}`}
      className="h-9 w-9 rounded-full"
      />
      <div className="  px-4 py-3 max-w-[480px] rounded-lg">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  )
}
const ChatFooter=({handleSubmit}:{handleSubmit:React.FormEventHandler<HTMLFormElement>})=>{
  return(
    <div className="fixed bottom-0 ">
    <div className="flex items-center gap-4 py-5 bg-white">
      <div>
        <span className=" text-white bg-black px-2 py-2 rounded-[50%] font-bold">
          AO
        </span>
      </div>
      <div className="flex gap-3 items-center border border-[#E2E4E2] rounded-lg py-2 px-4 w-[]">
        <form action="" onSubmit={handleSubmit}>
          <input
            name="message"
            type="text"
            className="focus:outline-none w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
          />
          <button
            className="hover:bg-orange/10 active:bg-orange/10 w-10 h-10 rounded-full"
            type="submit"
          >
            <FontAwesomeIcon
              icon={faCircleArrowUp}
              className="text-orange "
            />
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
const WelcomePrompt = ({
  fileId,
  fileUser,
  fileName,
  sendMessage
}: {
  fileId: string;
  fileUser: string;
  fileName: string;
  sendMessage: (message:string)=> void;
}) => {
  const { data: welcomeMessage } = chatRouter.getWelcomeMessage.useQuery({
    variables: {
      file_id: fileId,
      user: fileUser,
      file_name: fileName,
      first_name: "",
    },
    cacheTime: Infinity
  });
  if (!welcomeMessage) {
    return null;
  }
  return (
    <div className="pb-[150px]">
      <div>
        <div className="flex items-center gap-4">
          <img src="/Images/aiAvatar.svg" alt="pao" />
          <span className="font-bold">Pao</span>
        </div>
        <div className="px-[50px]">
          <p className="w-full text-sm md:w-[92%]">
            {welcomeMessage.welcome_message}
          </p>
        </div>

        <div className="flex items-center justify-between gap-8 my-10 px-[50px]">
          {welcomeMessage.prompts.slice(0, 3).map((prompt) => (
            <button onClick={()=>sendMessage(prompt)} className="bg-[#FAF4EB] flex-1 px-5 py-8 rounded-md">
              <p className="text-xs">{prompt}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pao;
