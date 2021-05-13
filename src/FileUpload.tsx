import React from "react";

interface FileUploadProps {
  uploadText: string;
  uploadAltText: string;
  fileTypeHelpText: string;
  handleFileUpload: React.ChangeEventHandler<HTMLInputElement>
  handleFileDrop: React.DragEventHandler<HTMLDivElement>
}

const FileUpload = ({ uploadText, uploadAltText, fileTypeHelpText, handleFileUpload, handleFileDrop }: FileUploadProps) => {
  return (
    <div className="card">
      <div className="card-content" onDrop={handleFileDrop}>
        <label className="has-text-link is-clickable" htmlFor="file-input">
          {uploadText}
          <input className="is-sr-only" type="file" name="file-input" id="file-input" onChange={handleFileUpload}/>
        </label>
        <p>or { uploadAltText }</p>
        <p>{ fileTypeHelpText }</p>
      </div>
    </div>
  )
}

export default FileUpload
