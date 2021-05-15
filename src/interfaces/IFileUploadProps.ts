import React from "react";

export default interface IFileUploadProps {
  uploadText: string;
  uploadAltText: string;
  fileTypeHelpText: string;
  handleFileUpload: React.ChangeEventHandler<HTMLInputElement>
  handleFileDrop: React.DragEventHandler<HTMLDivElement>
}
