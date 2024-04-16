import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { useState, ChangeEvent } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  console.log(selectedFile);

  return (
    <div>
      <div className="py-[100px] px-5 h-[100vh]">
        <h1 className="text-4xl font-bold md:w-[550px] md:mx-auto">Upload File</h1>

        <div className="my-10 md:w-[550px] bg-[#FFE5B3] mx-auto border border-[#FEAA05] py-14 rounded-xl text-center">
          <label htmlFor="upload">
            <input
              type="file"
              id="upload"
              className="hidden"
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faUpload}
              className="my-4 text-orange text-[48px] font-bold cursor-pointer"
            />
            <span className="block w-[180px] mx-auto cursor-pointer">
              Drag and Drop Files Here or Browse
            </span>
          </label>
        </div>

        <div className="my-6">
          {selectedFile && (
            <div className="bg-white flex items-center px-4 py-5 rounded-lg gap-5 md:w-[550px] mx-auto shadow-md">
              <FontAwesomeIcon icon={faFilePdf} className="" />
              <p>{selectedFile.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
