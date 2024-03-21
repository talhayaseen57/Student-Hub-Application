import { useEffect } from "react";
import "./App.css";
import { useLocalStorageFunc } from "./util/useLocalStorageFunc";



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
    <div className="App">
      <div>Student Hub Application</div>
      <div>JWT Token is {jwtToken}</div>
    </div>
  );
}


export default App;
