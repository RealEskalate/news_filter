export enum NewsStatus {
  "approved",
  "declined",
}

export interface News {
  date: string;
  thumbnailURL: string;
  title: string;
  source: string;
  linkToNews: string;
  visited: boolean;
}
