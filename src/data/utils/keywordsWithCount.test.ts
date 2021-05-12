import { disallowedAuthors } from "./disallowedAuthors"
import cleanData from "./cleanData"
import sampleListeningData from "../mockData/sampleListeningData.json"
import keyWordsWithCount from "./keywordsWithCount"

describe("Keywords with number of occurrences", () => {
  it("should return object with keywords and correct number of occurrences", () => {
    const keywords = cleanData.init(sampleListeningData, disallowedAuthors);

    const keywordsWithOccurrences = keyWordsWithCount(keywords);

    expect(keywordsWithOccurrences).toBeInstanceOf(Object);
    expect(keywordsWithOccurrences["Montclair"]).toBe(12);
  });
});
