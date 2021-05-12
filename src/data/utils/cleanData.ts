import IPost from "../interfaces/IPost";
import validator from "validator";

const cleanData = {
  filterOutDisallowedAuthors(
    posts: IPost[],
    unwantedAuthors: string[]
  ): IPost[] {
    return posts.filter(
      (post: IPost) =>
        !unwantedAuthors.includes(post["author.username"].toLowerCase())
    );
  },

  extractKeywords(posts: IPost[]): string[] {
    const multiDimenWords: string[][] = posts.map((post: IPost) =>
      post["content.body"].split(" ")
    );

    const keywords = ([] as string[])
      .concat(...multiDimenWords)
      .map((word) => validator.trim(word, ",:)(.!?;-"));

    return keywords.filter((word) => word.length && !validator.isURL(word));
  },

  init(posts: IPost[], unwantedAuthors: string[]): string[] {
    const filteredPosts: IPost[] = this.filterOutDisallowedAuthors(
      posts,
      unwantedAuthors
    );

    return this.extractKeywords(filteredPosts);
  },
};

export default cleanData;
