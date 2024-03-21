import React from 'react'
import { useLocalStorageFunc } from '../util/useLocalStorageFunc';


const Dashboard = () => {

  const [jwtToken, setJwtToken] = useLocalStorageFunc("", "jwtToken");


  return (
    <div className="container">
      <h3>Student Hub Application Dashboard</h3>
      <div>JWT Token on dashboard is {jwtToken}</div>
    </div>
  );

}


export default Dashboard