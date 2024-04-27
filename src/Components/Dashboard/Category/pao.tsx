import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FormEvent } from "react";
// import { authTokenStore } from "../../../store";

const Pao = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [promptArray, setPromptArray] = useState<any>([]);

  const firstName = localStorage.getItem("firstName");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prompt) {
      const newPrompt = { prompt, id: new Date().getTime().toString() };
      setPromptArray([...promptArray, newPrompt]);
      setPrompt("")
    }
  };

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
          <div className="pb-[150px]">
            <div>
              <div className="flex items-center gap-4">
                <img src="/Images/aiAvatar.svg" alt="pao" />
                <span className="font-bold">Pao</span>
              </div>
              <div className="px-[50px]">
                <p className="w-full md:w-[70%]">
                  Hello {firstName}, I am your personal reading assistant. Ask me
                  anything you want to know, from clarifying tricky concepts to
                  exploring new ideas, let's embark on this exciting learning
                  journey together.
                </p>
              </div>
            </div>

            {promptArray.length !== 0 && (
              <div className="my-10">
                <div className="flex items-center gap-4">
                  <span className=" text-white bg-black px-2 py-2 rounded-[50%] font-bold">
                    AO
                  </span>
                  <span className="font-bold">You</span>
                </div>

                {promptArray.map((item: any) => {
                  return <p className="w-full md:w-[70%] px-[50px]">{item.prompt}</p>;
                })}
              </div>
            )}
          </div>

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
                    type="text"
                    className="focus:outline-none w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <button>
                    <FontAwesomeIcon
                      icon={faCircleArrowUp}
                      className="text-orange "
                      type="submit"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pao;
