# aston-books

- Предметная область: Приложение позволяет осуществлять поиск книг по названию, добавлять понравившиеся книги в избранное и сохранять поисковые запросы в истории поиска. Для добавления в избранное и сохранения поисковых запросов необходимо пройти регистрацию.
- Использованное API: [Google Books API](https://developers.google.com/books)

---

## Основной функционал

- Регистрация и авторизация пользователей
- Добавление в избранное: пользователь может добавлять или удалять книги из списка избранных
- Поиск по названию книги, автору или по другим ключевым словам (например, "Фантастика"); выпадающее меню из предложенных вариантов книг
- История поисковых запросов: сохранение названия поискового запроса, возможность перейти на страницу поиска после нажатия на название запроса

---

## Реализация требований

### 1 уровень (обязательный)

- [x] Реализованы Требования к функциональности.

#### React

- [x] Пишем функциональные компоненты c хуками: [components](src/components), [pages](src/pages).
- [x] Есть разделение на [умные](src/components/Card/Card.jsx) и [глупые](src/components/HistoryList/HistoryList.jsx) компоненты.
- [x] Есть рендеринг [списков](src/pages/MainPage/MainPage.jsx).
- [x] Реализована хотя бы одна [форма](src/components/Form/Form.jsx).
- [x] Есть применение Контекст API: [SearchContext](src/context/searchContext.js), [Provider](src/App.jsx), [useContext](src/components/SearchForm/SearchForm.jsx).
- [x] Есть применение предохранителя: [ErrorBoundary](src/App.jsx), [Fallback](src/components/Fallback/).
- [x] Есть хотя бы один кастомный хук: [useAuth](src/hooks/useAuth.js) [useFav](src/hooks/useFav.js).
- [x] Хотя бы несколько компонентов используют PropTypes: [Form](src/components/Form/Form.jsx), [Suggest](src/components/Suggest/Suggests.jsx), [ItemDetails](src/components/ItemDetails/ItemDetails.jsx).
- [x] Использован debounce из библиотеки loadash ([debounce](src/components/SearchForm/SearchForm.jsx)).
- [x] Есть применение [lazy + Suspense](src/router/AppRouter.jsx).

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](src/store/store.js).
- [x] Использованы redux слайсы: [userSlise](src/store/reducers/userSlice.js).
- [x] Есть хотя бы одна кастомная мидлвара: [userMiddleware](src/store/middlewares/userMiddleware.js).
- [x] Используется RTK Query: [booksApi](src/api/booksApi.js)
- [x] Используется Transforming Responses: [booksApi](src/api/booksApi.js).

---

### 2 уровень (необязательный)

- [x] Используется Firebase: [auth](src/hooks/useAuth.js), [favourite](src/api/favApi.js), [history](src/api/historyApi.js)

---

### Дополнительные библиотеки, которые использовались

- classnames для комбинирования классов при использовании css modules
- react-hook-form для валидации данных [формы](src/components/Form/Form.tsx)
- react-hot-toast для всплывающих уведомлений;

---

### Deploy

[link](https://astonbooksproject2023.netlify.app/)
