import * as RadioGroup from "@radix-ui/react-radio-group";

const TrueOrFalse = () => {
  return (
    <div className="px-5 h-screen">
      <div className="text-center">
        <span className="text-sm text-[#908E89]">
          Assembly Language and Python programming &gt; Generate Quiz &gt;{" "}
          <span className="font-bold text-black">Flashcards</span>
        </span>
      </div>

      <div className="bg-white w-full md:w-[90%] h-full mx-auto rounded-2xl py-16 px-5 md:px-16 my-10 overflow-y-scroll">
        <h1 className="text-3xl font-bold">True Or False</h1>

        <div className="my-10">
          <div className="text-right my-3">
            <span className="mx-10">True</span>
            <span>False</span>
          </div>

          <div>
            <div className="flex justify-between items-center px-4 my-4">
              <div>
                <p className="w-[85%]">
                  1. What is the purpose of the GetMseconds procedure in the
                  given context?
                </p>
              </div>

              <div className="">
                <RadioGroup.Root className="flex gap-[50px] items-center">
                  <div className="flex">
                    <RadioGroup.Item
                      value="false"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-[''] after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>

                  <div className="flex">
                    <RadioGroup.Item
                      value="true"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-['']  after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 my-4">
              <div>
                <p className="w-[85%]">
                  2. What is the purpose of the GetMseconds procedure in the
                  given context?
                </p>
              </div>

              <div className="">
                <RadioGroup.Root className="flex gap-[50px] items-center">
                  <div className="flex">
                    <RadioGroup.Item
                      value="false"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-[''] after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>

                  <div className="flex">
                    <RadioGroup.Item
                      value="true"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-['']  after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 my-4">
              <div>
                <p className="w-[85%]">
                  3. What is the purpose of the GetMseconds procedure in the
                  given context?
                </p>
              </div>

              <div className="">
                <RadioGroup.Root className="flex gap-[50px] items-center">
                  <div className="flex">
                    <RadioGroup.Item
                      value="false"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-[''] after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>

                  <div className="flex">
                    <RadioGroup.Item
                      value="true"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-['']  after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 my-4">
              <div>
                <p className="w-[85%]">
                  4. What is the purpose of the GetMseconds procedure in the
                  given context?
                </p>
              </div>

              <div className="">
                <RadioGroup.Root className="flex gap-[50px] items-center">
                  <div className="flex">
                    <RadioGroup.Item
                      value="false"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-[''] after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>

                  <div className="flex">
                    <RadioGroup.Item
                      value="true"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-['']  after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 my-4">
              <div>
                <p className="w-[85%]">
                  5. What is the purpose of the GetMseconds procedure in the
                  given context?
                </p>
              </div>

              <div className="">
                <RadioGroup.Root className="flex gap-[50px] items-center">
                  <div className="flex">
                    <RadioGroup.Item
                      value="false"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-[''] after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>

                  <div className="flex">
                    <RadioGroup.Item
                      value="true"
                      className=" border border-[#FEAA05] w-[15px] h-[15px] rounded-full    outline-none cursor-default"
                    >
                      <RadioGroup.Indicator className="flex  justify-center  after:content-['']  after:w-[8px] after:h-[8px] after:rounded-[50%] after:bg-[#FEAA05]" />
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>
            </div>
          </div>

          <div className="flex gap-10 my-[50px]">
            <button className="w-[180px] border rounded-md py-3">Previous</button>
            <button className="w-[180px] py-3 text-white rounded-md bg-orange">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueOrFalse;
