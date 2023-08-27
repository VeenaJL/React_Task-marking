import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Aboutus from "./components/Aboutus";
import Greeting from "./components/Greeting";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const router = createBrowserRouter([
    { path: '', element: <Login/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greeting/>},
    { path: 'register', element:<Register/>},
    { path: '/login', element:<Login/>},
    { path: '/home', element:<App/>}
]);

export default router;