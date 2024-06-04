import { useParams } from "react-router-dom";
import { getCategoryInfo } from "../../../../api";
import { useState, useEffect } from "react";

const SingleCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { categoryId } = useParams();

  const categoryInfo = async () => {
    const res = await fetch(`${getCategoryInfo}${categoryId}`);
    const report = await res.json();
    setCategoryName(report.name);
  };

  useEffect(() => {
    categoryInfo();
  }, []);

  return (
    <div className="px-5 h-[100vh]">
      <div className="text-center">
        <span>{categoryName}</span>
      </div>

      <div className="my-[80px]">
        <h1 className="text-4xl font-bold md:w-[550px] md:mx-auto">
          Choose a file
        </h1>
      </div>
    </div>
  );
};

export default SingleCategory;
