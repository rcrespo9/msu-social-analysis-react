import React from 'react';
import FileUpload from "./FileUpload";
import BaseCard from "./BaseCard";
import IPost from "./data/interfaces/IPost";
import convertCSVFileToJSON from "./data/utils/convertCSVFileToJSON";

function App() {
  const [postsData, setPostsData] = React.useState<IPost[]>([])
  const [fileData, setFileData] = React.useState<File>()

  const getFileData = async (files: FileList) => {
    try {
      const firstFile: File = files[0]
      const convertedFileText: IPost[] = await convertCSVFileToJSON(firstFile)

      setFileData(firstFile)
      setPostsData(convertedFileText)
    } catch (e) {
      throw new Error(e)
    }
  }

  const getFileUploadData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { files } = e.target

      if (files) {
        await getFileData(files)
      }
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const getFileDropData = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation();

    try {
      const { files } = e.dataTransfer

      if (files) {
        await getFileData(files)
      }
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return (
    <div className="App container">
      <BaseCard header="Upload File">
        <FileUpload uploadText="Upload a file" uploadAltText="drag and drop" fileTypeHelpText=".CSV files only" handleFileUpload={getFileUploadData} handleFileDrop={getFileDropData} />
      </BaseCard>
    </div>
  );
}

export default App;
