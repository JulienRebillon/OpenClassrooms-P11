import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Error from './pages/error';
import About from './pages/about';
import Logement from './pages/logement';

import reportWebVitals from './reportWebVitals';


// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "logement",
    element: <Logement />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
