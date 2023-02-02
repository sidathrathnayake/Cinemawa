import * as React from "react";
import { useRoutes } from "react-router-dom";

// import frontend variables
import { FrontendAPI } from "./Utils/frontend_variables";

// import screens
import UserHome from "./Screens/Home/UserHome";

export default function App() {

  let element = useRoutes([

    {path:`${FrontendAPI.FRONTEND_API_HOME}` , element: <UserHome />},
    
  ]);

  return element;
}