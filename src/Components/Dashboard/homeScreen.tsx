import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { authTokenStore } from "../../store";

const HomeScreen = () => {

  const firstName = authTokenStore((state) => state.firstName)

  return (
    <div className="">
      <div className="py-[100px] px-5 h-[100vh]">
        <h1 className="text-4xl text-green font-bold md:w-[550px] w-full md:mx-auto  ">
          Welcome, {firstName}
        </h1>
        <p className="md:w-[550px] w-full   md:mx-auto py-4">
          Being your StuddyBuddie, my job is to help you power through your
          study with ease like a breeze. Let’s start here
        </p>

        <div className="flex flex-col md:flex-row my-[50px] gap-5 justify-center">
          <Link to="upload-file">
            <div className="text-center bg-[#FFE5B3] md:w-[300px] py-16 rounded-2xl border border-[#FEAA05]">
              <FontAwesomeIcon
                icon={faUpload}
                className="mx-auto text-orange text-[48px] font-bold py-5"
              />
              <span className="block w-40 mx-auto font-semibold">
                Start Here: Upload Your Study File
              </span>
            </div>
          </Link>

          <Link to="category">
            <div className="text-center bg-[#C8FDC8] md:w-[300px] py-16 rounded-2xl border border-[#05B105]">
              <FontAwesomeIcon
                icon={faPlus}
                className="bg-green text-white px-2 py-1 rounded-lg my-5 text-4xl font-bold"
              />
              <span className="block w-32 mx-auto font-semibold">
                Create a New Study Category
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
