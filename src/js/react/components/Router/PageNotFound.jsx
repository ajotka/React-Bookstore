import React from 'react';
import packageJson from '../../../../../package.json';

const PageNotFound = () => {
    return (
        <React.Fragment>
            <h1>Page Not Found</h1>
            <p>Please check URL address</p>
            {console.log('public url: ',packageJson.homepage)}
        </React.Fragment>
    );
};

export default PageNotFound;