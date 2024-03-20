import { useEffect, useState } from 'react';
import './StudentHubApp.css'

export const StudentHubApp = () => {

    const [jwtToken, setJwtToken] = useState("");

    useEffect(() => {
        console.log("Hello World!");

        const requestBody = {
            'username': 'student02',
            'password': '102'
        }
    

        fetch('http://localhost:8080/auth/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(requestBody)
        })
            .then((response) => response.json())
            .then((data) => setJwtToken(data.accessToken));
    }, []);
    


    return (
        <div className='container'>
            <div>Student Hub Application</div>
            <div>JWT Token is ${jwtToken}</div>
        </div>
    );

}