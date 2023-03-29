const masterJWT = () =>

{
    fetch('http://127.0.0.1:8000/api/auth/login',
    {
        method : 'POST',
        headers : 
        {
            'Content-Type' : 'appplication/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }   
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Store the CSRF token in local storage or as a cookie
    })
    .catch(error => console.error(error));
}

export default masterJWT;
