import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App';

window.addEventListener('load', () => {
    ReactDOM.render(
        <App />,
        document.getElementById('react-app'),
    );
});
