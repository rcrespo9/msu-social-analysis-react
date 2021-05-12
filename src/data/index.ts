import IWordCount from "./interfaces/IWordCount"
import keywordsWithCount from "./utils/keywordsWithCount"

const keywords = {
  topKeywords(inKeywords: IWordCount, minCount: number): IWordCount {
    return Object.keys(inKeywords).reduce(
      (newObj: IWordCount, keyword: string): IWordCount => {
        const keywordCount = inKeywords[keyword];
        if (keywordCount >= minCount) {
          newObj[keyword] = keywordCount;
        }

        return newObj;
      },
      {}
    );
  },

  allKeywords(inKeywords: string[]): IWordCount {
    return keywordsWithCount(inKeywords);
  },
};

export default keywords;
