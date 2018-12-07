import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../../containers/App';
import AdminPanel from '../AdminPanel/AdminPanel';
import PageNotFound from './PageNotFound';

export default class Router extends React.Component {

    render() {

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact  path='/' component={App} />
                    <Route  path='/admin' component={AdminPanel} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        )
    }

}
