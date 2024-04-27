import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="px-5 md:h-screen">
      <div className="text-center">
        <span className="">Assembly Language and Python programming</span>
      </div>

      <div className="mt-[70px] px-[0px] lg:px-[80px]">
        <h1 className="text-3xl font-bold ">Generate Quiz</h1>

        <div className="my-10 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-2 lg:gap-8">
          <Link to="flashcards">
            <div className="bg-white rounded-lg border border-[#E2E4E2] px-5 py-5 text-center">
              <img
                src="/Images/questionMark.svg"
                alt="quiz"
                className="mx-auto"
              />
              <span className="">Flash Cards</span>
            </div>
          </Link>

          <Link to="fillinthegap">
            <div className="bg-white rounded-lg border border-[#E2E4E2] px-5 py-5 text-center">
              <img
                src="/Images/questionMark.svg"
                alt="quiz"
                className="mx-auto"
              />
              <span>Fill in the Gap</span>
            </div>
          </Link>

          <Link to="mcq">
            <div className="bg-white rounded-lg border border-[#E2E4E2] px-5 py-5 text-center">
              <img
                src="/Images/questionMark.svg"
                alt="quiz"
                className="mx-auto"
              />
              <span>Multiple Choice</span>
            </div>
          </Link>

          <Link to="theory">
            <div className="bg-white rounded-lg border border-[#E2E4E2] px-5 py-5 text-center">
              <img
                src="/Images/questionMark.svg"
                alt="quiz"
                className="mx-auto"
              />
              <span>Theory</span>
            </div>
          </Link>

          <Link to='trueorfalse'>
            <div className="bg-white rounded-lg border border-[#E2E4E2] px-5 py-5 text-center">
              <img
                src="/Images/questionMark.svg"
                alt="quiz"
                className="mx-auto"
              />
              <span>True or False</span>
            </div>   
          </Link>
        </div>

        <div>
          <div>
            <label htmlFor="">How many questions do you want generated?</label>
            <input
              type="number"
              min="0"
              className="block w-[200px] border border-[#E2E4E2] py-2 px-3 rounded-lg my-2"
            />
          </div>

          <div className="my-6">
            <span>
              What pages do you want to test your knowledge in?{" "}
              <Link to="preview">
                <span className="font-bold text-orange underline">
                  Preview PDF
                </span>
              </Link>
            </span>
          </div>

          <div className=" flex gap-4">
            <div>
              <input
                type="number"
                min="0"
                className="block w-[100px] border border-[#E2E4E2] py-1 px-3 rounded-lg"
              />
              <span className="text-xs text-[#A3A9A3]">From</span>
            </div>

            <div>
              <span>-</span>
            </div>

            <div>
              <input
                type="number"
                min="0"
                className="block w-[100px] border border-[#E2E4E2] py-1 px-3 rounded-lg"
              />
              <span className="text-xs text-[#A3A9A3]">To</span>
            </div>
          </div>

          <button className="w-[180px] bg-orange text-white rounded-lg py-2 my-6">
            Generate Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
