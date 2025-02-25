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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/section",
          element:<Section></Section>
        },
        {
          path:"/content",
          element:<element></element>
        }


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
