import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Home';
import Error from './Components/Error';
import CountryDetails from './Components/CountryDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/country/:name",
        element: <CountryDetails/>,
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router}/>
  </>
);


