import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (query) =>
        `volumes?q=${query || "%22%22"}&maxResults=27&projection=lite`,
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
}); // TODO: Здесь позже будет добавлена логика работы по поиску книг по ключевому слову, автору и т.д, т.е логика работы с SearchInput

export const { useGetBooksQuery } = booksApi;

// Здесь поясню, что другие популярные API для поиска книг не дают возможности запроса с пустым query
// Например, у Open Library Search API запрос с пустым query просто не проходит, у Goodread API проблемы с доступом из РФ
// Поэтому, возможно, список книг на странице при первой загрузке будет похожим на другие в подобных проектах
// Добиться другого набора книг можно только с помощью манипуляций с SearchIndex в запросе
// Но если добавлять SearchIndex, то в дальнейшем возможна неправильная работа при отправке запросов по ключевым словам через SearchInput
