import React from 'react';
import FileUpload from "./FileUpload";
import BaseCard from "./BaseCard";

function App() {
  const getFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
  }

  const getFileDrop = async (e: React.DragEvent) => {
    console.log(await e.dataTransfer.files[0].text())
  }

  return (
    <div className="App container">
      <BaseCard header="Upload File">
        <FileUpload uploadText="Upload a file" uploadAltText="drag and drop" fileTypeHelpText=".CSV files only" handleFileUpload={getFileUpload} handleFileDrop={getFileDrop} />
      </BaseCard>
    </div>
  );
}

export default App;
