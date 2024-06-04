import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import pdfFile from "../../../../public/Files/EEE_303_18_19_session.pdf";
import { useFileStore } from "../../../store";

const DocPreview = () => {
  const file = useFileStore((state) => state.file);
  console.log(file);
  //   console.log(file);

  let docs: any = [];

  if(file) {
    docs = [
      {
        uri: window.URL.createObjectURL(file),
        fileName: file.name,
      },
    ];
  }
  return (
    <div className="px-5 h-screen">
      <div>
        <h1 className="my-6 text-3xl font-bold ">Preview Pdf</h1>

        {file && (
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        )}
      </div>
    </div>
  );
};

export default DocPreview;
