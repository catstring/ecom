import { useState, useEffect } from 'react';

function FetchTextScreen() {
    const [data, setData] = useState('Loading...');
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://toddmctsai.me/ecom/api/products'; // Replace with your actual API URL

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(text => {
                setData(text);
            })
            .catch(err => {
                setError('Failed to load data: ' + err.message);
                console.error("Error fetching data: ", err);
            });

    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div>
            <h1>API Response</h1>
            <div>
                {error ? <p>Error: {error}</p> : <p>{data}</p>}
            </div>
        </div>
    );
}

export default FetchTextScreen;