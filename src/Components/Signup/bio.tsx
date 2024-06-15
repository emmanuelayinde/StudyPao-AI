import { useState, useEffect } from "react";
import {
  getUserName,
  getUserLevel,
  getUserCollege,
  getProfile,
} from "../../../api";
import { authTokenStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface College {
  name: string;
}

const Bio = () => {
  const [userInfo, setUserInfo] = useState<{
    firstName?: string;
    lastName?: string;
  }>({
    firstName: "",
    lastName: "",
  });
  const [getCurrLevel, setGetCurrLevel] = useState<string>("");
  const [getCollege, setGetCollege] = useState("");
  const [getCollegeArray, setGetCollegeArray] = useState([]);
  const [authError, setAuthError] = useState(false);
  const [department, setDepartment] = useState("");

  const token = authTokenStore((state) => state.token);
  const navigate = useNavigate();

  const handleClick = () => {
    if (getCollege) {
      getUserProfile();
    }
    if (!getCollege) {
      setAuthError(true);
    }
  };

  const getUserInfo = async () => {
    try {
      const res = await fetch(`${getUserName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const report = await res.json();
      setUserInfo({ firstName: report.firstName, lastName: report.lastName });
    } catch (error) {
      console.log(error);
    }
  };

  const getLevel = async () => {
    try {
      const res = await fetch(`${getUserLevel}`);
      const report = await res.json();
      setGetCurrLevel(report[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getUni = async () => {
    try {
      const res = await fetch(`${getUserCollege}`);
      const report = await res.json();
      setGetCollegeArray(report);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async (): Promise<void> => {
    try {
      const res = await fetch(`${getProfile}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          level: getCurrLevel,
          universityName: getCollege,
          department,
        }),
      });

      if (!res.ok) {
        toast.error(res.statusText || "Updating user profile failed!");
      } else {
        toast.success(res.statusText || "Signup completed successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred, try again!");
    }
  };

  useEffect(() => {
    getUserInfo();
    getLevel();
    getUni();
  }, []);
  return (
    <div>
      <div className="my-10">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="border shadow-md md:w-96 mx-4 md:mx-auto my-8 border-[#E7E9ED] rounded-md px-5 py-4">
            <div>
              <label htmlFor="">Name</label>
              <div className="flex gap-4 my-3">
                <div>
                  <input
                    type="text"
                    className="border border-[#E7E9ED] rounded-md w-full py-[12px] px-3"
                    defaultValue={userInfo.firstName}
                  />
                  <span className="text-sm text-[#A3A9A3]">First</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-[#E7E9ED] rounded-md w-full py-[12px] px-3"
                    defaultValue={userInfo.lastName}
                  />
                  <span className="text-sm text-[#A3A9A3]">Last</span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">Department</label>

              <div>
                <input
                  type="text"
                  className="border border-[#E7E9ED] rounded-md w-full py-[12px] px-3"
                  defaultValue={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
                <span className="text-sm text-[#A3A9A3]">First</span>
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="">What is your level?</label>
              <select
                name=""
                id=""
                className="border border-[#E7E9ED] rounded-md w-full py-[12px] px-3 my-3 focus:outline-none"
              >
                <option value={getCurrLevel}>{getCurrLevel}</option>
              </select>
              {/* <input
                type="text"
                className="border border-[#E7E9ED] rounded-md w-full py-1 px-3 my-3"
              /> */}
            </div>

            <div className="relative">
              <label htmlFor="">University Name</label>
              <input
                type="text"
                className={
                  authError
                    ? "border border-[#F76F6F] rounded-md w-full py-[12px] px-3 my-3 focus:outline-none"
                    : "border border-[#E7E9ED] rounded-md w-full py-[12px] px-3 my-3 focus:outline-none"
                }
                value={getCollege}
                onChange={(e) => setGetCollege(e.target.value)}
              />
              {authError && (
                <span className="text-sm text-[#F76F6F]">
                  Thid field is required
                </span>
              )}

              <div className="absolute bg-white shadow-md px-3 rounded-md">
                {getCollegeArray
                  .filter((filterItem: College) => {
                    const searchTerm = getCollege.toLowerCase();
                    const uniName = filterItem.name.toLowerCase();

                    return (
                      searchTerm &&
                      uniName.startsWith(searchTerm) &&
                      uniName !== searchTerm
                    );
                  })
                  .map((item) => {
                    const { name } = item;
                    return (
                      <div key={name}>
                        <ul>
                          <li
                            onClick={() => setGetCollege(name)}
                            className="cursor-pointer hover:bg-[#EEEFEE] my-1 py-2 px-2 rounded-md"
                          >
                            {name}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </div>

            <button
              className="bg-green text-white w-full py-3 rounded-md mt-5"
              onClick={handleClick}
            >
              Complete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bio;
