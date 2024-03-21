import React from 'react'
import { useLocalStorageFunc } from '../util/useLocalStorageFunc';


const Homepage = () => {

  const [jwtToken, setJwtToken] = useLocalStorageFunc("", "jwtToken");


  return (
    <div className="container">
      <h3>Student Hub Application Home</h3>
      <div>JWT Token is {jwtToken}</div>
    </div>
  );

}


export default Homepage