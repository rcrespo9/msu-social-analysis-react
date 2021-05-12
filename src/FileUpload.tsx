import React from "react";

interface FileUploadProps {
  uploadText: string;
  uploadAltText: string;
  fileTypeHelpText: string;
  handleFileUpload: React.ChangeEventHandler
  handleFileDrop: React.DragEventHandler
}

const FileUpload = ({ uploadText, uploadAltText, fileTypeHelpText, handleFileUpload, handleFileDrop }: FileUploadProps) => {
  return <></>
}

export default FileUpload
