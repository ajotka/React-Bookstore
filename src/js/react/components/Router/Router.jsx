import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../../containers/App';
import AdminPanel from '../AdminPanel/AdminPanel';
import OrderSummary from "../Order/OrderSummary";
import PageNotFound from './PageNotFound';
import Footer from "../Footer/Footer";
import PackageJson from "../../../../../package.json";

export default class Router extends React.Component {

    render() {

        return (
            <React.Fragment>

                <BrowserRouter>
                    <Switch>
                        <Route path={PackageJson.homepage + '/'} component={App} />
                        <Route path={PackageJson.homepage + '/admin'} component={AdminPanel} />
                        <Route path={PackageJson.homepage + '/order'} component={OrderSummary} />
                        <Route component={PageNotFound} />
                    </Switch>
                </BrowserRouter>

                <Footer />
            </React.Fragment>
        )
    }

}
