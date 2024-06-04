import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { planStore, useUserInfoStore, authTokenStore } from "../../store";
import { getUpgradePlan, useGetProfile } from "../../../api";
import CreateCategory from "./createCategory";
// import { useUpgradePlan } from "../../api/hooks";

const HomeScreen = () => {
  const [showPlan, setShowPlan] = useState<boolean>(false);
  const [showCreateCategory, setShowCreateCategory] = useState<boolean>(false);
  const [isPremium, setIsPremium] = useState<boolean>(false);
  // const firstName = authTokenStore((state) => state.firstName)
  const planType = planStore((state) => state.plan);
  // console.log(planType);
  const token = authTokenStore((state) => state.token);

  const handleClick = () => {
    if (planType === "free") {
      setShowPlan(true);
    } else {
      setShowCreateCategory(true);
    }
  };
  // const firstName = localStorage.getItem("firstName");
  const otherName = useUserInfoStore((state) => state.firstNames);
  // const token = authTokenStore((state) => state.token);
  // console.log(token);

  const getProfile = async () => {
    try {
      const res = await fetch(`${useGetProfile}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const report = await res.json();
      planStore.setState({ plan: report.plan });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isPremium) {
      getProfile();
    }
  }, [isPremium]);

  return (
    <div className="">
      {showPlan && <Subscription setShowPlan={setShowPlan} setIsPremium={setIsPremium}/>}
      {showCreateCategory && (
        <CreateCategory
          setShowCreateCategory={setShowCreateCategory}
        />
      )}
      <div className="py-[100px] px-5 h-[100vh]">
        <h1 className="text-4xl text-green font-bold md:w-[550px] w-full md:mx-auto  ">
          Welcome, {otherName}
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

          {/* <Link to="category"> */}
          <div
            className="text-center bg-[#C8FDC8] md:w-[300px] py-16 rounded-2xl border border-[#05B105] cursor-pointer"
            onClick={handleClick}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="bg-green text-white px-2 py-1 rounded-lg my-5 text-4xl font-bold"
            />
            <span className="block w-32 mx-auto font-semibold">
              Create a New Study Category
            </span>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

const Subscription = ({
  setShowPlan,
  setIsPremium
}: {
  setShowPlan: (newValue: boolean) => void;
  setIsPremium: (newValue: boolean) => void;
}) => {
  // const {mutateAsync} = useUpgradePlan();
  const token = authTokenStore((state) => state.token);
  // console.log(token);

  // const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await fetch(`${getUpgradePlan}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        alert("Big Fat Error");
      } else {
        setShowPlan(false);
        setIsPremium(true)
        // alert("Good to go");
        // navigate("category")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black/30 w-full h-full fixed top-0">
      <div className="bg-white  md:w-[600px] mx-3 md:mx-auto my-5 md:my-[150px] rounded-xl">
        <div className="px-10 flex items-center justify-between py-5 border-b border-[#D3D3D3]">
          <h1 className="text-xl font-bold">Upgrade your plan</h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl cursor-pointer"
            onClick={() => setShowPlan(false)}
          />
        </div>

        <div className=" flex flex-col md:flex-row ">
          <div className="border-r px-10 py-10 border-[#D3D3D3]">
            <h2 className="text-lg font-bold">Free</h2>
            <span className="block ">NGN 0/ month</span>
            <button className="py-3 w-[180px] text-[#898888] bg-[#D3D3D3] rounded-md my-3">
              Your current plan
            </button>

            <div className="my-5">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>

              <div className="flex items-center gap-3 my-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>Max of 2 file uploads</span>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>

              <div className="flex items-center gap-3 my-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>
            </div>
          </div>

          <div className="px-10 py-10">
            <h2 className="text-lg font-bold">Premium</h2>
            <span className="block">NGN2450/ month</span>
            <button
              className="py-3 w-[180px] text-white bg-green rounded-md my-3"
              onClick={handleClick}
            >
              Upgrade to Premium
            </button>

            <div className="my-5">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>

              <div className="flex items-center gap-3 my-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>Max of 2 file uploads</span>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>

              <div className="flex items-center gap-3 my-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>No saved study categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
