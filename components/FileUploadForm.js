import { useState } from "react";

const FileUploadForm = ({ onUpload }) => {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      // Perform file upload to Google Cloud Storage here
      // You'll implement this in the next step
      await onUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUploadForm;
