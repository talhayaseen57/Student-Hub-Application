import { useEffect } from "react";
import "./App.css";
import { useLocalStorageFunc } from "./util/useLocalStorageFunc";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Homepage from "./Home/homepage";
import Login from "./Login/login";
import PrivateRoute from "./PrivateRoute/privateRoute";



function App() {
  const [jwtToken, setJwtToken] = useLocalStorageFunc("", "jwtToken");

  
  return (

    <Routes>
      <Route path="/" element={ <Homepage/> } />
      <Route path="/dashboard" element={ 
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
       } />
      <Route path="/login" element={ <Login/> }/>
    </Routes>

  );
}


export default App;
