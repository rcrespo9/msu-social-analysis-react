import csv from "csvtojson/index";
import IPost from "../interfaces/IPost";

const convertCSVFileToJSON = async (file: File): Promise<IPost[]> => {
  try {
    const fileText: string = await file.text()

    return await csv().fromString(fileText)
  } catch (e) {
    throw new Error(e)
  }
}

export default convertCSVFileToJSON
