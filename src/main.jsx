import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home';
import AddNewTask from './Pages/Home/AddNewTask/AddNewTask';
import IndividualTask from './Pages/IndividualTask/IndividualTask';
import Provider from './Provider/Provider';
import DataFetchState from './DataFetchState/DataFetchState';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addNewTask",
        element: <AddNewTask></AddNewTask>
      },
      {
        path: "/specificTask/:id",
        element: <IndividualTask></IndividualTask>
      }
    ]
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/resetPassword",
    element: <ForgetPassword></ForgetPassword>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataFetchState>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </DataFetchState>
  </React.StrictMode>,
)
