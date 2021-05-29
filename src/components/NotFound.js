import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oops, the page you're looking for doesn't exist!</p>
            <p><Link to="/">Go to the homepage &#129046;</Link></p>
        </div>
    )
}

export default NotFound;