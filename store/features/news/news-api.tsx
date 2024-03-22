// import { backend_url } from '@/config'
import { News } from '@/types/news'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backend_url = 'https://dummyjson.com'
export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({ baseUrl: `${backend_url}` }),
  endpoints: (builder) => ({
    getNews: builder.query<{posts: News[], total: number, skip: number, limit:number}, void>({
      query: () => 'posts',
    }),
  }),
})

export const { useGetNewsQuery } = newsApi