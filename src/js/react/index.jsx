import ReactDOM from 'react-dom';
import React from 'react';
import Router from "./components/Router/Router";

window.addEventListener('load', () => {
    ReactDOM.render(<Router />, document.getElementById('react-app'));
});
