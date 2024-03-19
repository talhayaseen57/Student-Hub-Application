import './StudentHubApp.css'

export const StudentHubApp = () => {
    console.log("Hello World!");

    const requestBody = {
        'username': 'student01',
        'password': '101'
    }

    fetch('auth/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(requestBody)
    });


    return (
        <div className='container'>
            <div>Student Hub Application</div>
        </div>
    );
    
}