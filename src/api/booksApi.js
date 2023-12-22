import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (query) => ({
        url: `volumes?q=${query || "%22%22"}`,
        params: {
          maxResults: 27,
          projection: "lite",
        },
      }),
      transformResponse: (response) =>
        response.items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          cover: item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.thumbnail
            : null,
        })),
    }),
    getBooksInfo: builder.query({
      query: (bookId) => `volumes/${bookId}`,
      transformResponse: (book) => ({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        cover: book.volumeInfo.imageLinks?.thumbnail,
        categories: book.volumeInfo.categories,
        language: book.volumeInfo.language,
        pageCount: book.volumeInfo.pageCount,
        publishedDate: book.volumeInfo.publishedDate,
        publisher: book.volumeInfo.publisher,
        description: book.volumeInfo.description,
      }),
    }),
    getSuggestedBooks: builder.query({
      query: (query) => ({
        url: `volumes?q=${query || "%22%22"}`,
        params: {
          maxResults: 5,
          projection: "lite",
        },
      }),
      transformResponse: (response) =>
        response.items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          cover: item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.thumbnail
            : null,
        })),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBooksInfoQuery,
  useLazyGetSuggestedBooksQuery,
} = booksApi;
