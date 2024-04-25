const Mcq = () => {
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
          <span>1. What does the ReadHex procedure do?</span>
          <div className="px-2 md:px-4 my-3">
            <ul>
              <li>
                <div className="flex gap-3 items-center">
                  <p className="border  rounded-[50%] text-xs w-[20px] h-[20px] text-center hover:bg-orange hover:text-white hover:cursor-pointer">
                    a
                  </p>{" "}
                  It reads a 32-bit signed integer
                </div>
              </li>

              <li>
                <div className="flex gap-3 items-center my-3">
                  <p className="border rounded-[50%] text-xs w-[20px] h-[20px] text-center hover:bg-orange hover:text-white hover:cursor-pointer">
                    b
                  </p>{" "}
                  It reads a 32-bit signed integer
                </div>
              </li>

              <li>
                <div className="flex gap-3 items-center">
                  <p className="border rounded-[50%] text-xs w-[20px] h-[20px] text-center hover:bg-orange hover:text-white hover:cursor-pointer">
                    c
                  </p>{" "}
                  It reads a 32-bit signed integer
                </div>
              </li>

              <li>
                <div className="flex gap-3 my-3 items-center">
                  <p className="border rounded-[50%] text-xs w-[20px] h-[20px] text-center hover:bg-orange hover:text-white hover:cursor-pointer">
                    d
                  </p>{" "}
                  It reads a 32-bit signed integer
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
