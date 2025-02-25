import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/conponents/Root/Root.jsx';
import Home from './assets/conponents/Home/Home.jsx';
import About from './assets/conponents/About/About.jsx';
import Content from './assets/conponents/Content/Content.jsx';
import Section from './assets/conponents/section/Section.jsx';
import Users from './assets/conponents/Users/Users.jsx';
import UserDtails from './assets/conponents/UserDetails/UserDtails.jsx';
import Posts from './assets/conponents/Posts/Posts.jsx';
import PostDetails from './assets/conponents/postDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/section",
        element: <Section></Section>
      },
      {
        path: "/content",
        element: <Content></Content>
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:"/user/:id",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<UserDtails></UserDtails>
      },
      {
        path:"/posts",
        loader:() =>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/post/:id",
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<PostDetails></PostDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
