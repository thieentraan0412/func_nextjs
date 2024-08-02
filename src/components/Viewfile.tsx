import React from "react";
import PdfViewer from "../components/PdfViewer";

const ViewDoc = () => {
  const fileUrl = "/file1.pdf"; // Đảm bảo tệp PDF nằm trong thư mục `public` và đường dẫn chính xác

  return (
    <div>
      <h1>PDF Viewer</h1>
      <PdfViewer fileUrl={fileUrl} />
    </div>
  );
};

export default ViewDoc;
