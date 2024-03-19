import './StudentHubApp.css'

export const StudentHubApp = () => {
    console.log("Hello World!");

    const requestBody = {
        'username': 'student02',
        'password': '102'
    }

    fetch('http://localhost:3000/auth/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(requestBody)
    }).then((response) => console.log(response));


    return (
        <div className='container'>
            <div>Student Hub Application</div>
        </div>
    );
    
}