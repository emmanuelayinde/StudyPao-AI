import { createMutation } from "react-query-kit";

import { api } from "..";
import { AxiosProgressEvent } from "axios";

interface Props {
  file: FormData;
  onUploadProgress: (e: AxiosProgressEvent) => void;
}

const uploadFile = async ({ file, onUploadProgress }: Props) => {
  const response = await api.post("user/upload", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });

  return response.data;
};

export default createMutation({
  mutationFn: uploadFile,
});

// import { useEffect, useState } from "react";

// import { api, tokenInterceptors } from "..";

// const useFileUpload = ({ file }: { file: any }) => {
//   const [uploadProgress, setUploadProgress] = useState<number>(0);
//   const [uploadResponse, setUploadResponse] = useState<any>();

//   const uploadFile = async (formData: any): Promise<any> => {
//     tokenInterceptors();
//     const response = await api.post("user/upload", formData, {
//       onUploadProgress(progressEvent) {
//         const progress = Math.round(
//           (progressEvent.loaded * 100) / progressEvent.total!
//         );
//         setUploadProgress(progress);
//       },
//     });
//     return response.data;
//   };

//   useEffect(() => {
//     if (file) {
//       async function uploadFileToCLoud() {
//         const res = await uploadFile(file);
//         setUploadResponse(res);
//       }

//       uploadFileToCLoud();
//     }
//   }, [file]);

//   return { uploadProgress, uploadResponse };
// };

// export default useFileUpload;
