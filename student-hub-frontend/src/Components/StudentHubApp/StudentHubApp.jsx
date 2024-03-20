import { useEffect } from 'react';
import './StudentHubApp.css'
import { useLocalStateFunc } from '../util/useLocalStorageFunc';

export const StudentHubApp = () => {

    const [jwtToken, setJwtToken] = useLocalStateFunc("", 'jwtToken');

    useEffect(() => {

        if (!jwtToken) {
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
        }

    }, [jwtToken, setJwtToken]);


    return (
        <div className='container'>
            <div>Student Hub Application</div>
            <div>JWT Token is ${jwtToken}</div>
        </div>
    );

}