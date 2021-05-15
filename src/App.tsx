import React from 'react';
import FileUpload from "./FileUpload";
import BaseCard from "./BaseCard";
import IPost from "./data/interfaces/IPost";
import csv from "csvtojson/index";

function App() {
  const [postsData, setPostsData] = React.useState<IPost[]>([])

  const convertCSVString = async (csvString: string): Promise<IPost[]> => {
    return csv().fromString(csvString);
  }

  const getFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { files } = e.target

      if (files) {
        const uploadedFileText = await files[0].text()
        const convertedFileText = await convertCSVString(uploadedFileText)

        setPostsData(convertedFileText)
      }
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const getFileDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation();

    try {
      const { files } = e.dataTransfer

      if (files) {
        const droppedFile = await files[0].text()
        const convertedFileText = await convertCSVString(droppedFile)

        setPostsData(convertedFileText)

        console.log(convertedFileText)
      }
    } catch (e) {
      throw new Error(e.message)
    }
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
