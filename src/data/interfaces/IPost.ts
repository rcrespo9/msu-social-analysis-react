interface IPostLocation {
  name: string;
  city: string;
  country: string;
  lat: string;
  long: string;
  state: string;
}

interface IPostAuthor {
  description: string;
  gender: string;
  image: string;
  link: string;
  location: Partial<IPostLocation>;
  name: string;
  networkreference: string | number;
  type: string;
  username: string;
  website: string;
}

interface IPostLanguages {
  origin: string[]
  term: string[]
}

interface IPostContent {
  body: string;
  created_by: string;
  languages: IPostLanguages
  link: string;
  posted_time: string;
  quote: string;
  summary: string;
  title: string;
}

interface IPostNetwork {
  category: string;
  description: string;
  link: string;
  name: string;
}

export default interface IPost {
  author: IPostAuthor;
  content: IPostContent;
  falcon_id: string;
  hashtags: string;
  keywords: string;
  location: IPostLocation;
  network: IPostNetwork;
  reach: string | number;
  parent_id: string;
  source: string;
}
