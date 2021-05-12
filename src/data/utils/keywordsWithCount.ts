import IWordCount from "@/data/interfaces/IWordCount";

export default function keywordsWithCount(keywords: string[]): IWordCount {
  return keywords.reduce((obj: IWordCount, keyword: string) => {
    const foundObjKey = Object.keys(obj).find(
      (key) => key.toLowerCase() === keyword.toLowerCase()
    );
    const objKey = foundObjKey ? foundObjKey : keyword

    obj[objKey] = (obj[objKey] || 0) + 1;

    return obj;
  }, {});
}
