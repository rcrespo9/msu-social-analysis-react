import React from 'react';
import FileUpload from "./FileUpload";

function App() {
  const getFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
  }

  const getFileDrop = (e: React.DragEvent) => {
    console.log(e.dataTransfer.files)
  }

  return (
    <div className="App container">
      <FileUpload uploadText="Upload a file" uploadAltText="drag and drop" fileTypeHelpText=".CSV files only" handleFileUpload={getFileUpload} handleFileDrop={getFileDrop} />
    </div>
  );
}

export default App;
