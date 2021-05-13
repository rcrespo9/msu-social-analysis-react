import React from "react";
import styled from "@emotion/styled";

interface FileUploadProps {
  uploadText: string;
  uploadAltText: string;
  fileTypeHelpText: string;
  handleFileUpload: React.ChangeEventHandler<HTMLInputElement>
  handleFileDrop: React.DragEventHandler<HTMLDivElement>
}

const DashedContainer = styled.div`
  border: 3px dashed;
  border-radius: .25rem;
`

const FileUpload = ({ uploadText, uploadAltText, fileTypeHelpText, handleFileUpload, handleFileDrop }: FileUploadProps) => {
  const [isDropZoneHighlighted, setDropZoneHighlight] = React.useState<boolean>(false)

  const toggleDropZoneHighlight = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    setDropZoneHighlight(!isDropZoneHighlighted)
  }

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    handleFileDrop(e)
    toggleDropZoneHighlight(e)
  }

  return (
    <div className="card">
      <div className="card-content">
        <DashedContainer className={`media ${isDropZoneHighlighted ? 'has-background-info-light' : ''}`} onDrop={onDropHandler} onDragOver={(e) => e.preventDefault()} onDragEnter={toggleDropZoneHighlight} onDragLeave={toggleDropZoneHighlight}>
          <div className="media-content has-text-centered p-5">
            <label className="has-text-link is-clickable" htmlFor="file-input">
              {uploadText}
              <input className="is-sr-only" type="file" name="file-input" id="file-input" onChange={handleFileUpload}/>
            </label>
            <p>or { uploadAltText }</p>
            <p className="has-text-grey">{ fileTypeHelpText }</p>
          </div>
        </DashedContainer>
      </div>
    </div>
  )
}

export default FileUpload
