export enum NewsStatus {
    'approved',
    'declined',
  }
  // export interface News {
  //   id: string
  //   title: string
  //   body: string
  //   userId: string
  //   tags: string[]
  //   reactions: number
  // }
  export interface News {
    date: string,
    thumbnailURL: string,
    title: string,
    source: string,
    linkToNews: string,
    visited: boolean
  }
  