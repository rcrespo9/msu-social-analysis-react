import csv from "csvtojson/index";
import IPost from "../interfaces/IPost";

const convertCSVFileToJSON = async (file: FileList): Promise<IPost[]> => {
  try {
    const fileText: string = await file[0].text()

    return await csv().fromString(fileText)
  } catch (e) {
    throw new Error(e)
  }
}

export default convertCSVFileToJSON
