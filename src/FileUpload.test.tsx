import {fireEvent, render} from "@testing-library/react";
import FileUpload from "./FileUpload";

describe('FileUpload.tsx', () => {
  const uploadText = "Upload a file"
  const uploadAltText = "drag and drop here"
  const fileTypeHelpText = ".CSV only"
  const role = 'region'

  it('renders FileUpload component', () => {
    const handleFileUpload = jest.fn()
    const handleFileDrop = jest.fn()

    const { getByRole } = render(<FileUpload uploadText={uploadText} uploadAltText={uploadAltText} fileTypeHelpText={fileTypeHelpText} handleFileUpload={handleFileUpload} handleFileDrop={handleFileDrop} />)

    expect(getByRole(role)).toBeInTheDocument()
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

    const { getByRole } = render(<FileUpload uploadText={uploadText} uploadAltText={uploadAltText} fileTypeHelpText={fileTypeHelpText} handleFileUpload={handleFileUpload} handleFileDrop={handleFileDrop} />)

    fireEvent.drop(getByRole(role))

    expect(handleFileDrop).toBeCalledTimes(1)
  })

  it('should change background color on dragEnter', () => {
    const handleFileUpload = jest.fn()
    const handleFileDrop = jest.fn()

    const { getByRole } = render(<FileUpload uploadText={uploadText} uploadAltText={uploadAltText} fileTypeHelpText={fileTypeHelpText} handleFileUpload={handleFileUpload} handleFileDrop={handleFileDrop} />)

    fireEvent.dragEnter(getByRole(role))

    expect(getByRole(role)).toHaveClass('has-background-info-light')
  })
})
