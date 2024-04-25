import { useState } from "react";

const FlashCards = () => {
  const [showCards, setShowCards] = useState<boolean>(false);

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
            <div className="my-6 border py-[70px] rounded-md border-[#E2E4E2] lg:w-full xl:w-[500px] mx-auto px-5 text-center">
              <p>
                What is the difference between the MOVSX and MOVZX instructions
                in the x86 instruction set?
              </p>
            </div>
          )}

          <div className="flex justify-center items-center gap-5">
            <button className="text-white py-6 rounded-md w-[180px] bg-black">
              20 left
            </button>
            <button
              className="border rounded-md py-2 px-6"
              onClick={() => setShowCards(true)}
            >
              Draw Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
