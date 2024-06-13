import { mcq } from "../../../data";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface data {
  question_num: number;
  question: string;
  answer: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

const Mcq = () => {
  const obj: data[] = mcq.questions;

  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showScore, setShowScore] = useState<boolean>(false);
  // console.log(score);

  const logic = (questionNum: number, key: string) => {
    // console.log(answer, key);
    // if (answer === key) {
    //   console.log(true);
    //   setScore((prevState) => {
    //     return prevState + 1;
    //   });
    // } else if (answer !== key && score !== 0) {
    //   console.log(false);
    //   setScore(score - 1);
    // }

    setUserAnswers({ ...userAnswers, [questionNum]: key });
  };

  const submitLogic = () => {
    let newScore = 0;
    obj.forEach((question) => {
      if (userAnswers[question.question_num] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div className="px-5 h-screen">
      <div className="text-center">
        <span className="text-sm text-[#908E89]">
          Assembly Language and Python programming &gt; Generate Quiz &gt;{" "}
          <span className="font-bold text-black">Multiple Choice</span>
        </span>
      </div>

      <div className="bg-white w-full md:w-[90%] h-full mx-auto rounded-2xl py-16 px-5 md:px-16 my-10 overflow-y-scroll">
        <h1 className="text-3xl font-bold">Multiple Choice Quiz</h1>

        <div className="my-6 px-2 md:px-5">
          <div>
            {showScore && (
              <div className="my-5">
                <span className="font-bold text-green text-xl">
                  Your Score: {score}/{obj.length}
                </span>
              </div>
            )}
          </div>
          <div>
            {obj.map((option) => {
              return (
                <div>
                  <span>
                    {option.question_num}. {option.question}
                  </span>
                  <div className="px-2 md:px-4 my-3">
                    <ul>
                      {/* <li onClick={() => logic(option.answer)}>{option.options.A}</li>
                      <li>{option.options.B}</li>
                      <li>{option.options.C}</li>
                      <li>{option.options.D}</li> */}
                      {Object.entries(option.options).map(([key, value]) => {
                        return (
                          <div>
                            <li
                              onClick={() => logic(option.question_num, key)}
                              className="flex items-center gap-3 my-2"
                            >
                              <p
                                className={`lowercase border rounded-[50%]  text-xs w-[20px] h-[20px] text-center hover:bg-orange hover:text-white hover:cursor-pointer ${
                                  userAnswers[option.question_num] === key
                                    ? "bg-orange text-white"
                                    : ""
                                } ${showScore && key === option.answer ? 'bg-green text-white' : ''}`}
                              >
                                {key}
                              </p>
                              <span>{value} {showScore && key === option.answer && <span className="text-green text-xs"><FontAwesomeIcon icon={faCheck} /> Correct</span>}</span>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

            <div className="my-10 flex items-center gap-3">
              <button className="py-3 w-[180px] border rounded-lg">
                Previous
              </button>
              <button
                onClick={submitLogic}
                className="py-3 w-[180px] bg-orange text-white rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
