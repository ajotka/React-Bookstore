import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Inventory from '../../components/Inventory/Inventory';
import Order from '../../components/Order/Order';
import AdminPanel from '../../components/AdminPanel/AdminPanel';

export default class App extends Component {

    render() {
        return (
            <div>
                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                <Header/>

                <main className="main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Order/>
                            <Inventory/>
                            <AdminPanel/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
