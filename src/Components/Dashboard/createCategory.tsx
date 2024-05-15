import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCreateCategory } from "../../api/hooks";
import { useNavigate } from "react-router-dom";

const CreateCategory = ({
  setShowCreateCategory,
}: {
  setShowCreateCategory: (newValue: boolean) => void;
}) => {
  const [category, setCategory] = useState<{
    name?: string;
    description?: string;
  }>({
    name: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setCategory({ ...category, [name]: value });
  };

  const navigate = useNavigate()
  const { mutateAsync } = useCreateCategory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (category.name && category.description) {
      mutateAsync({
        name: category.name,
        description: category.description,
      })
        .then((res) => {
          if (!res) {
            // console.log(res);
            // alert("Nicee");
            navigate("category")
          }
        })
        .catch((e) => {
          console.log(e);
          alert("Big Fat Error");
        });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="bg-black/30 w-full h-full fixed top-0">
      <div className="bg-white w-[95%] md:w-[450px] rounded-md  mx-auto my-[150px] px-4 py-5">
        <div className="text-right my-3">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl cursor-pointer"
            onClick={() => setShowCreateCategory(false)}
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="w-full border border-[#E7E9ED] rounded-md px-3 py-2 focus:outline-none my-2"
              placeholder="Give your category a name"
              name="name"
              value={category.name}
              onChange={handleChange}
            />
          </div>

          <div className="my-8">
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              value={category.description}
              onChange={handleChange}
              id=""
              rows={5}
              cols={30}
              className="w-full resize-none border border-[#E7E9ED] rounded-md px-3 py-2 focus:outline-none my-2"
              placeholder="Briefly describe this category for reference purposes"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white rounded-md bg-green py-3"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
