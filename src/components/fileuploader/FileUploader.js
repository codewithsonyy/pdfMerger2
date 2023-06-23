import React, { useRef } from "react";
import { PDFIcon } from "./icons";
import "./FileUploader.css";

 const FileUploader=({ onFileChange, multiple, fileType })=> {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.click();

  return (
    <div className=" uploaderbox ">
      <input
        type="file"
        className="hidden"
        accept={fileType}
        ref={inputRef}
        multiple={multiple}
        onChange={(e) => onFileChange(e)}
      />
      <div
        className=" uploaderboxinside"
        onClick={handleClick}
      >
        <div className=" ">
          <PDFIcon />
          Choose File(s)
        </div>

        <div >Or Drop File(s) Here</div>
      </div>
    </div>
  );
}
export default FileUploader;