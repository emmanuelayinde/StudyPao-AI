import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent, useEffect } from "react";
import { useFileStore } from "../../store";
import { useProcessFile } from "../../api/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { AxiosProgressEvent } from "axios";
import useFileUpload from "../../api/hooks/useFileUpload";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [processLoading, setProcessLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [startPreProcess, setStartPreProcess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [fileResponse, setFileResponse] = useState<any>(null);

  const [uploadProgress, setUploadProgress] = useState(0);

  // const navigate = useNavigate();

  //
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      useFileStore.setState({ file: files[0] });
    }
  };

  const { mutateAsync: mutateFileUpload } = useFileUpload();

  //
  const formData = new FormData();
  if (selectedFile) {
    formData.append("file", selectedFile);
  }

  //
  const onUploadProgress = (progressEvent: AxiosProgressEvent) => {
    const progress = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total!
    );
    setUploadProgress(progress);
  };

  //
  useEffect(() => {
    setIsLoading(true);
    if (selectedFile) {
      mutateFileUpload({ file: formData, onUploadProgress })
        .then((res) => {
          console.log({ res });
          setFileResponse(res);
          useFileStore.setState({
            fileId: res._id,
            fileUrl: res.url,
            user: res.user._id,
            fileName: res.name,
          });
          setIsSuccess(true);
          setStartPreProcess(true);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          setSelectedFile(null);
          if (e.response.status === 400) {
            setIsError(true);
          }
          // console.log(e);
        })
        .finally(() => {
          setUploadProgress(0);
        });
    }
  }, [selectedFile]);

  const { mutateAsync: mutateProcessFile } = useProcessFile();

  const handleClick = () => {
    setProcessLoading(true);
    if (startPreProcess && fileResponse) {
      mutateProcessFile({
        file_name: fileResponse.name,
        user: fileResponse.user._id,
        url: fileResponse.url,
        file_id: fileResponse._id,
        type: "pdf",
      })
        .then(() => {
          // console.log(res);
          setProcessLoading(false);
          // navigate("/dashboard/category");
        })
        .catch((e) => {
          console.log(e);
          setProcessLoading(false);
        });
    }
  };

  const flyVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    close: {
      x: "-100vw",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      {processLoading && (
        <div className="h-full w-full fixed top-0 z-[1000] bg-black/30">
          <div className="text-center my-[200px]">
            <div className="loading-spinner"></div>
            <span className="text-white font-semibold my-6 ">
              This may take a while...
            </span>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            className="py-2 px-2 rounded-md bg-white flex items-center justify-between fixed left-[30px] md:left-[100px] border-l-2 border-green w-[150px]"
            variants={flyVariant}
            animate="visible"
            initial="hidden"
            exit="close"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green text-xs"
              />
              <span className="text-xs">File uploaded!</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-xs"
                onClick={() => setIsSuccess(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isError && (
          <motion.div
            className="py-2 px-2 rounded-md bg-white flex items-center justify-between fixed left-[30px] md:left-[100px] border-l-2 border-[#EA4335] w-[250px]"
            variants={flyVariant}
            animate="visible"
            initial="hidden"
            exit="close"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="text-[#EA4335] text-xs"
              />
              <span className="text-xs">Only pdf files can be uploaded!</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-xs"
                onClick={() => setIsSuccess(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="py-[100px] px-5 h-[100vh]">
        <h1 className="text-4xl font-bold md:w-[550px] md:mx-auto">
          Upload File
        </h1>

        <div className="mt-10 md:w-[550px] bg-[#FFE5B3] mx-auto border border-[#FEAA05] py-14 rounded-xl text-center">
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
        <div className="md:w-[550px] mx-auto flex gap-1 py-2 items-center">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="text-xs text-[#B3A17E]"
          />
          <span className="text-xs text-[#B3A17E]">
            Make sure the uploaded document is a selectable pdf, and not a
            scanned image, pptx or docx
          </span>
        </div>

        <div className="my-6">
          {selectedFile && (
            <div>
              <div className="flex items-center md:w-[550px] gap-5 justify-center mx-auto">
                <div
                  className={` flex items-center px-4 py-5 rounded-lg gap-5 w-full mx-auto shadow-md transition duration-300`}
                  style={{
                    background: `linear-gradient(to right, #ef9f01 ${uploadProgress}%, #fff ${uploadProgress}%)`,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className={isLoading ? "text-[#bcbcbc]" : "text-white"}
                  />

                  <p
                    className={`${isLoading ? "text-[#bcbcbc]" : "text-white"
                      } w-full inline-flex justify-between items-center`}
                  >
                    <span className="w-full">
                      {selectedFile.name.length > 35
                        ? selectedFile.name.slice(0, 30) +
                        "..." +
                        selectedFile.name.substring(
                          selectedFile.name.length - 7,
                          selectedFile.name.length
                        )
                        : selectedFile.name}{" "}
                    </span>
                    <span>{uploadProgress}%</span>
                  </p>
                  {/* </div> */}
                </div>

                <div>{isLoading && <div className="orange-spinner"></div>}</div>
              </div>
              <div className="md:w-[550px] mx-auto">
                {/* <Link to="/dashboard/category"> */}
                <button
                  className="my-5 text-white bg-orange rounded-lg w-[180px] py-2"
                  onClick={handleClick}
                >
                  {processLoading
                    ? "Processing file"
                    : startPreProcess
                      ? "Process file"
                      : "Continue"}
                </button>
                {/* </Link> */}
              </div>
            </div>
          )}
        </div>

        {/* <div className="w-[550px] mx-auto">
          <Link to='/dashboard/category'><button className="my-5 text-white bg-orange rounded-lg w-[180px] py-2">Continue</button></Link>
        </div> */}
      </div>
    </div>
  );
};

export default FileUpload;
