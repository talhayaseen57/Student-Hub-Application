import { useEffect } from "react";
import "./App.css";
import { useLocalStorageFunc } from "./util/useLocalStorageFunc";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Homepage from "./Home/homepage";



function App() {
  const [jwtToken, setJwtToken] = useLocalStorageFunc("", "jwtToken");

  useEffect(() => {
    if (!jwtToken) {
      console.log("Hello React!");

      const requestBody = {
        username: "student02",
        password: "102",
      };

      fetch("http://localhost:8080/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => setJwtToken(data.accessToken));
    }
  }, []);

  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  );
}


export default App;
