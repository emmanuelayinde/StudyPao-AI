import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faBarsStaggered,
  faFileArrowUp,
  faXmark,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUserInfoStore, planStore } from "../../store";
import { useGetCategory } from "../../../api";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  description: string;
  _id: string;
}

const Sidebar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  const logo = useUserInfoStore((state) => state.initials);
  const token = useUserInfoStore((state) => state.tokens);
  const planType = planStore((state) => state.plan);

  const getCategory = async () => {
    const res = await fetch(`${useGetCategory}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const report = await res.json();
    setCategories(report);
  };

  useEffect(() => {
    if (planType !== "free") {
      getCategory();
    } 
  }, []);

  const collapseVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    close: {
      x: "100vw",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <div>
        <AnimatePresence>
          {showSideBar && (
            <div className="bg-black/30 w-full h-full fixed">
              <motion.div
                className="bg-white fixed right-0 w-[300px] px-4 py-4 h-full"
                variants={collapseVariant}
                animate="visible"
                initial="hidden"
                exit="close"
              >
                <div className="flex items-center justify-between py-0">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-2xl cursor-pointer"
                    onClick={() => setShowSideBar(false)}
                  />
                  <span className=" text-white bg-black px-2 py-2 rounded-[50%] font-bold">
                    {logo}
                  </span>
                </div>

                <div className="my-7">
                  <button className="bg-orange px-4 py-2 text-white rounded-lg text-sm font-semibold">
                    Start New Study
                  </button>
                </div>

                {/* Category */}
                <div>
                  <h4 className="text-sm text-[#999F99]">
                    My Study Categories
                  </h4>

                  <button className="text-green text-sm font-semibold flex items-center gap-2 my-3">
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <span>Create New Category</span>
                  </button>
                </div>

                {/* Sidebar Footer */}
                <div className="absolute bottom-8 w-full left-0">
                  <button className="bg-black px-4 py-2 text-white rounded-lg text-sm font-semibold mx-4">
                    Upgrade Plan
                  </button>

                  <div className="text-right mt-12 px-4">
                    <span className="">Help</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`${
          collapse
            ? "bg-board-bg w-full md:w-[92%]"
            : "bg-board-bg w-full md:w-[75%]"
        }`}
      >
        <div className="hidden md:block">
          {collapse && (
            <motion.div
              className="bg-white fixed right-0 w-[8%] px-3 py-4 h-full text-center"
              // variants={collapseVariant}
              // animate="visible"
              // initial="hidden"
            >
              <div>
                <span className=" text-white bg-black px-2 py-2 rounded-[50%] font-bold">
                  {logo}
                </span>
              </div>

              <div className="my-7">
                <button className="text-white bg-orange rounded-lg px-4 py-2">
                  <FontAwesomeIcon icon={faFileArrowUp} />
                </button>
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {!collapse && (
              <motion.div
                className="bg-white fixed right-0 w-[25%] px-4 py-4 h-full"
                variants={collapseVariant}
                animate="visible"
                initial="hidden"
                exit="close"
              >
                <div className="text-right py-0">
                  <span className=" text-white bg-black px-2 py-2 rounded-[50%] font-bold">
                    {logo}
                  </span>
                </div>

                <div className="my-7">
                  <button className="bg-orange px-4 py-2 text-white rounded-lg text-sm font-semibold">
                    Start New Study
                  </button>
                </div>

                {/* Category */}
                <div>
                  <h4 className="text-sm text-[#999F99]">
                    My Study Categories
                  </h4>

                  <button className="text-green text-sm font-semibold flex items-center gap-2 my-3">
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <span>Create New Category</span>
                  </button>

                  {categories.map((item: Category) => {
                    return (
                      <div>
                        <Link to={`/dashboard/category/${item._id}`}>
                          <button className="text-[#212321] text-sm">
                            <FontAwesomeIcon icon={faBookOpen} /> {item.name}
                          </button>
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Sidebar Footer */}
                <div className="absolute bottom-8 w-full left-0">
                  <button className="bg-black px-4 py-2 text-white rounded-lg text-sm font-semibold mx-4">
                    Upgrade Plan
                  </button>

                  <div className="text-right mt-12 px-4">
                    <span className="">Help</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Side bar */}

        {/* Mobile Side bar */}

        <div className="flex items-center px-4 justify-between py-4">
          <img src="/Images/logoDesign.svg" alt="logo" />
          <FontAwesomeIcon
            icon={faBarsStaggered}
            onClick={() => setCollapse(!collapse)}
            className="cursor-pointer hidden md:block"
          />
          <FontAwesomeIcon
            icon={faBarsStaggered}
            onClick={() => setShowSideBar(!showSideBar)}
            className="cursor-pointer md:hidden"
          />
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
