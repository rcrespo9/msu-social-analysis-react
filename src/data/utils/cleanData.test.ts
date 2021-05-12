import { disallowedAuthors } from "./disallowedAuthors"
import cleanData from "./cleanData"
import sampleListeningData from "../mockData/sampleListeningData.json"
import validator from "validator";

describe("Clean Social Analysis Data", () => {
  it("should filter out posts by disallowed authors", () => {
    const filteredData = cleanData.filterOutDisallowedAuthors(
      sampleListeningData,
      disallowedAuthors
    );

    expect(
      filteredData.filter((post) =>
        disallowedAuthors.includes(post["author.username"].toLowerCase())
      )
    ).toEqual([]);
  });

  it("should return array of keywords from content body of all posts", () => {
    const extractedKeywords = cleanData.init(
      sampleListeningData,
      disallowedAuthors
    );

    expect(extractedKeywords).toBeInstanceOf(Array);
    expect(extractedKeywords.filter((word) => validator.isURL(word))).toEqual(
      []
    );
    expect(extractedKeywords.filter((word) => validator.isEmpty(word))).toEqual(
      []
    );
  });
});
