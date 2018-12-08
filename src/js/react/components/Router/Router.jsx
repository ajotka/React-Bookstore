import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../../containers/App';
import AdminPanel from '../AdminPanel/AdminPanel';
import OrderSummary from "../Order/OrderSummary";
import PageNotFound from './PageNotFound';
import Footer from "../Footer/Footer";
import Package from "../../../../../package.json";

export default class Router extends React.Component {

    render() {

        return (
            <React.Fragment>

                <BrowserRouter basename={Package.basename}>
                    <Switch>
                        <Route path='/' component={App} />
                        <Route path='/admin' component={AdminPanel} />
                        <Route path='/order' component={OrderSummary} />
                        <Route component={PageNotFound} />
                    </Switch>
                </BrowserRouter>

                <Footer />
            </React.Fragment>
        )
    }

}
