import {fireEvent, render} from "@testing-library/react";
import FileUpload from "./FileUpload";

describe('FileUpload.tsx', () => {
  const uploadText = "Upload a file"
  const uploadAltText = "drag and drop here"
  const fileTypeHelpText = ".CSV only"

  it('renders FileUpload component', () => {
    const handleFileUpload = jest.fn()
    const handleFileDrop = jest.fn()

    const { getByLabelText } = render(<FileUpload uploadText={uploadText} uploadAltText={uploadAltText} fileTypeHelpText={fileTypeHelpText} handleFileUpload={handleFileUpload} handleFileDrop={handleFileDrop} />)

    expect(getByLabelText(uploadText)).toBeInTheDocument()
  })

  it('should call handleFileUpload on file input change', () => {
    const handleFileUpload = jest.fn()
    const handleFileDrop = jest.fn()

    const { getByLabelText } = render(<FileUpload uploadText={uploadText} uploadAltText={uploadAltText} fileTypeHelpText={fileTypeHelpText} handleFileUpload={handleFileUpload} handleFileDrop={handleFileDrop} />)

    fireEvent.change((getByLabelText(uploadText)))

    expect(handleFileUpload).toBeCalledTimes(1)
  })

  it('should call handleFileDrop when file dropped into zone', () => {
    const handleFileUpload = jest.fn()
    const handleFileDrop = jest.fn()

    const { getByText } = render(<FileUpload uploadText={uploadText} uploadAltText={uploadAltText} fileTypeHelpText={fileTypeHelpText} handleFileUpload={handleFileUpload} handleFileDrop={handleFileDrop} />)

    fireEvent.drop((getByText(uploadText)))

    expect(handleFileDrop).toBeCalledTimes(1)
  })
})
