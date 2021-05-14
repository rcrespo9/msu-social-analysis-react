import React from "react";

interface FileUploadItemProps {
  fileName: string;
  progress: string;
  byteSize: number;
  handleResumeUpload: React.MouseEvent<HTMLButtonElement>;
  handleAbortUpload: React.MouseEvent<HTMLButtonElement>;
  isFileUploadSuccess: boolean;
  hasFileUploadError: boolean;
}

const FileUploadItem = ({ fileName, progress }: FileUploadItemProps) => {
  return (<></>)
}

export default FileUploadItem
