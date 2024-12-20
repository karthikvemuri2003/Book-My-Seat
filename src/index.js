import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Singup from './components/Singup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';
import Details from './components/Details';
import Mndash from './components/Mndash';
import Events from './components/Events';
import Movies from './components/Movies';
import Arts from './components/Arts';
import Artsdetails from './components/Artsdetails';
import Eventdetails from './components/Eventdetails';
import Addevnts from './components/Addevnts';
var router =createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/singup",
        element:<Singup></Singup>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/:id",
        element:<Details></Details>
      },
      {
        path:"/events/:id",
        element:<Eventdetails></Eventdetails>
      },
      {
        path:"/arts/:id",
        element:<Artsdetails></Artsdetails>
      },
      {
        path:"/upload",
        element:<Upload></Upload>
      },
      {
        path:"/events",
        element:<Events></Events>
      },
      {
        path:"/movies",
        element:<Movies></Movies>
      },
      {
        path:"/addarts",
        element:<Addevnts></Addevnts>
      },
      {
        path:"/arts",
        element:<Arts></Arts>
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
reportWebVitals();
