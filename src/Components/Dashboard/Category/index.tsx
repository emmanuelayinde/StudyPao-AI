import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div className="px-5 h-[100vh] ">
        <div className="text-center">
          <span>Assembly Language and Python programming</span>
        </div>

        <div className="mt-[100px] md:w-[550px] mx-auto">
          <h1 className="text-4xl font-bold ">Let's Study</h1>
          <span className="text-sm text-[#908E89]">
            Assembly Language and Python programming.pdf
          </span>
        </div>

        <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-4 ">
          <Link to="pao">
            <div className="bg-[#FFE5B3] border border-[#FEAA05] md:w-[300px] md:h-[240px] py-10 px-10 rounded-2xl text-center">
              <FontAwesomeIcon
                icon={faComments}
                className="text-[#FEAA05] text-2xl"
              />
              <span className="block text-lg py-2 font-bold">Pao</span>
              <p className="text-[#7A715C] text-md">
                Chat with <span className="font-bold">Pao</span> our
                AI-StuddyBuddie, ask questions related to your uploaded file
                here
              </p>
            </div>
          </Link>

          <div className="bg-[#FFE5B3] border border-[#FEAA05] w-full md:w-[300px] md:h-[240px] py-10 px-10 rounded-2xl text-center">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="text-[#FEAA05] text-2xl"
            />
            <span className="block text-lg py-2 font-bold">
              Generate Quizzes
            </span>
            <p className="text-[#7A715C] text-md">
              Test your knowledge and practice what you've learnt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
