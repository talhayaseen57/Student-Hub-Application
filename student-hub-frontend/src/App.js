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

  // useEffect(() => {
  //   if (!jwtToken) {
  //     console.log("Hello React!");

  //     const requestBody = {
  //       username: "student02",
  //       password: "102",
  //     };

  //     fetch("http://localhost:8080/auth/login", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "post",
  //       body: JSON.stringify(requestBody),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setJwtToken(data.accessToken));
  //   }
  // }, []);

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
