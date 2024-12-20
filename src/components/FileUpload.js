// import React from "react";
// import "./FileUpload.css";

// const FileUpload = ({ label }) => {
//   return (
//     <div className="file-upload">
//       <p>{label}</p>
//       <input type="file" />
//     </div>
//   );
// };

// export default FileUpload;


import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = ({ label }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="file-upload">
      <p>{label}</p>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p className="file-name">Selected File: {fileName}</p>}
    </div>
  );
};

export default FileUpload;

