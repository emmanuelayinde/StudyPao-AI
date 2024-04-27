const FillTheGap = () => {
  return (
    <div className="px-5 h-screen">
      <div className="text-center">
        <span className="text-sm text-[#908E89]">
          Assembly Language and Python programming &gt; Generate Quiz &gt;{" "}
          <span className="font-bold text-black">Flashcards</span>
        </span>
      </div>

      <div className="bg-white w-full md:w-[90%] h-full mx-auto rounded-2xl py-16 px-5 md:px-16 my-10 overflow-y-scroll">
        <h1 className="text-3xl font-bold">Fill in the Gap</h1>

        <div className="px-4 my-10">
          <div className="my-8">
            <span>
              1. What does the ReadHex procedure do{" "}
              <span>
                <input
                  type="text"
                  className="w-[120px] border border-[#E2E4E2] focus:outline-none rounded-md px-2 py-[1px]"
                />
              </span>{" "}
              loads into GS.
            </span>
          </div>

          <div className="my-8">
            <span>
              2. What does the ReadHex procedure do{" "}
              <span>
                <input
                  type="text"
                  className="w-[120px] border border-[#E2E4E2] focus:outline-none rounded-md px-2 py-[1px]"
                />
              </span>{" "}
              loads into GS.
            </span>
          </div>

          <div className="my-8">
            <span>
              3. What does the ReadHex procedure do{" "}
              <span>
                <input
                  type="text"
                  className="w-[120px] border border-[#E2E4E2] focus:outline-none rounded-md px-2 py-[1px]"
                />
              </span>{" "}
              loads into GS.
            </span>
          </div>

          <div className="my-8">
            <span>
              4. What does the ReadHex procedure do{" "}
              <span>
                <input
                  type="text"
                  className="w-[120px] border border-[#E2E4E2] focus:outline-none rounded-md px-2 py-[1px]"
                />
              </span>{" "}
              loads into GS.
            </span>
          </div>

          <div className="my-8">
            <span>
              5. What does the ReadHex procedure do{" "}
              <span>
                <input
                  type="text"
                  className="w-[120px] border border-[#E2E4E2] focus:outline-none rounded-md px-2 py-[1px]"
                />
              </span>{" "}
              loads into GS.
            </span>
          </div>
        </div>

        <div>
            <button className="w-[180px] py-3 text-white rounded-md bg-orange">Next</button>
        </div>
      </div>
    </div>
  );
};

export default FillTheGap;
