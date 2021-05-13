import {render, screen} from "@testing-library/react";
import FileUpload from "./FileUpload";

describe('FileUpload.tsx', () => {
  it('renders FileUpload component', () => {
    const getFile = jest.fn()

    render(<FileUpload uploadText="Upload a file" uploadAltText="or drag and drop here" fileTypeHelpText=".CSV only" handleFileUpload={getFile} handleFileDrop={getFile} />)

    expect(screen.getByLabelText('Upload a file')).toBeInTheDocument()
  })
})
