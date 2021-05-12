import keywords from "./index";
import { disallowedAuthors } from "./utils/disallowedAuthors"
import cleanData from "./utils/cleanData"
import sampleListeningData from "./mockData/sampleListeningData.json"
import keywordsWithCount from "./utils/keywordsWithCount";
import IWordCount from "./interfaces/IWordCount";

describe("Social Media Analysis Keywords", () => {
  it("should return the top keywords given minimum amount of occurrences", () => {
    const finalKeywords = cleanData.init(
      sampleListeningData,
      disallowedAuthors
    );
    const keywordsWithOccurrences = keywordsWithCount(finalKeywords);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const topKeywords: IWordCount = keywords.topKeywords(keywordsWithOccurrences, 10);

    expect(topKeywords).toBeInstanceOf(Object);
    expect(
      Object.values(topKeywords).filter((count: number) => count < 10)
    ).toStrictEqual([]);
    expect(topKeywords).toHaveProperty("Montclair");
    expect(topKeywords["Montclair"]).toBe(12);
  })
})
