import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../../containers/App';
import AdminPanel from '../AdminPanel/AdminPanel';
import PageNotFound from './PageNotFound';
import packageJson from "../../../../../package.json";

export default class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact  path={packageJson.homepage + '/'} component={App} />
                    <Route  path={packageJson.homepage + '/admin'} component={AdminPanel} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        )
    }

}
