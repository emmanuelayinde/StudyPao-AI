import { useState } from "react";

const Theory = () => {
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  return (
    <div className="px-5 h-screen">
      <div className="text-center">
        <span className="text-sm text-[#908E89]">
          Assembly Language and Python programming &gt; Generate Quiz &gt;{" "}
          <span className="font-bold text-black">Theory</span>
        </span>
      </div>

      <div className="bg-white w-full md:w-[90%] h-full mx-auto rounded-2xl py-16 px-5 md:px-16 my-10 overflow-y-scroll">
        <h1 className="text-3xl font-bold">Theory</h1>

        <div className="my-6  px-4">
          <p className="my-4 font-semibold">
            1. What is the purpose of the GetMseconds procedure?
          </p>
          <textarea
            name=""
            id=""
            rows={10}
            cols={60}
            className="border border-[#E2E4E2] rounded-md resize-none w-full px-4 py-4 focus:outline-none"
          ></textarea>
        </div>

        <div className={`text-right ${showAnswers && "hidden"}`}>
          <button
            className="rounded-md bg-orange text-white py-3 w-[180px]"
            onClick={() => setShowAnswers(true)}
          >
            Submit
          </button>
        </div>

        {showAnswers && (
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-green">
              Your Score: 5/10
            </h2>

            <div className="my-8">
              <p className="md:w-[500px] bg-[#FFE5B3] rounded-md p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi molestiae sunt tempore delectus, ea incidunt sit unde
                nesciunt nihil alias. Ea consectetur distinctio quia unde. Dolor
                voluptas cupiditate blanditiis itaque! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quidem quae deserunt qui
                numquam! Error animi unde quae fuga et distinctio vero eligendi
                cumque. Obcaecati temporibus, nihil architecto molestias quam
                ducimus!
              </p>
            </div>

            <div className="flex items-center gap-5">
              <button
                className="border rounded-md py-3 w-[180px]"
                onClick={() => setShowAnswers(false)}
              >
                Try Again
              </button>
              <button
                className="bg-orange text-white rounded-md py-3 w-[180px]"
                onClick={() => setShowAnswers(false)}
              >
                Next Question
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Theory;
