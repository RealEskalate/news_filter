export enum NewsStatus {
  "approved",
  "declined",
}

export interface News {
  id: number;
  pub_date: string;
  thumbnail: string;
  title: string;
  source: string;
  linkToNews: string;
  is_verified: boolean;
}

export interface NewsData {
  results: News[];
}
