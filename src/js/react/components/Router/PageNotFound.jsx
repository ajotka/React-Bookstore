import React from 'react';
import packageJson from '../../../../../package.json';

const PageNotFound = () => {
    return (
        <div className="notfound">
            <p className="error-text">Page Not Found</p>
            <p>404</p>
            {console.log('public url: ',packageJson.homepage)}
        </div>
    );
};

export default PageNotFound;