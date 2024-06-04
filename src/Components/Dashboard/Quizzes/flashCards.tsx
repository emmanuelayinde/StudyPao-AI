import { useState } from "react";
import { flashCardData } from "../../../data";

interface data {
  question: string;
  answer: string;
  question_num: number;
}

const FlashCards = () => {
  const currCard: data[] = flashCardData.questions;

  const [showCards, setShowCards] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [questionLeft, setQuestionLeft] = useState<number>(currCard.length);

  const handleClick = () => {
    setShowAnswer(true);

    if (showAnswer) {
      if (cardNumber < questionLeft - 1) {
        setCardNumber((prevState) => {
          return prevState + 1;
        });
      }
      setQuestionLeft((prevState) => {
        return prevState - 1;
      });
      if(questionLeft <= 0) {
        setQuestionLeft(0)
      }
      setShowAnswer(false);
    }
  };

  return (
    <div className="px-5 h-screen">
      <div className="text-center">
        <span className="text-sm text-[#908E89]">
          Assembly Language and Python programming &gt; Generate Quiz &gt;{" "}
          <span className="font-bold text-black">Flashcards</span>
        </span>
      </div>

      <div className="bg-white w-full md:w-[90%] h-full mx-auto rounded-2xl py-16 px-5 md:px-16 my-10 overflow-y-scroll">
        <h1 className="text-3xl font-bold">Flashcards</h1>

        <div className="my-10">
          {showCards && (
            <div>
              <div className=" border py-[70px] rounded-t-md border-[#E2E4E2] lg:w-full xl:w-[500px] mx-auto px-5 text-center">
                <p>{currCard[cardNumber].question}</p>
              </div>

              {showAnswer && (
                <div className="bg-[#05B105] lg:w-full xl:w-[500px] mx-auto px-5 py-5 rounded-b-md">
                  <p className="text-white">{currCard[cardNumber].answer}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center items-center gap-5 my-6">
            <button className="text-white py-6 rounded-md w-[180px] bg-black">
              {questionLeft} left
            </button>
            {showCards ? (
              <button
                className="border rounded-md py-2 px-6"
                onClick={handleClick}
                // disabled={cardNumber >= questionLeft - 1}
              >
                {showAnswer ? "Next Question" : "Show Answer"}
              </button>
            ) : (
              <button
                className="border rounded-md py-2 px-6"
                onClick={() => setShowCards(true)}
              >
                Draw Question
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
