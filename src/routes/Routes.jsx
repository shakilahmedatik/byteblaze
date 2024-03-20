import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import Blog from '../pages/Blog'
import Content from '../components/Content'
import Author from '../components/Author'
import ErrorPage from '../components/ErrorPage'
import Bookmarks from '../pages/Bookmarks'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blog/:id',
        element: <Blog />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params?.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.id}`),
          },
          {
            path: 'author',
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.id}`),
          },
        ],
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
])
