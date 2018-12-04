import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Inventory from '../../components/Inventory/Inventory';
import Order from '../../components/Order/Order';
import AdminPanel from '../../components/AdminPanel/AdminPanel';

export default class App extends Component {
    state = {
        counter: 1,
    };

    incrementCounter = () => {
        this.setState(state => ({ ...state, counter: state.counter + 1 }));
    };

    render() {
        const { counter } = this.state;

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
                    <div className="container">
                        <div className="row justify-content-center">
                            <marquee>Testing React, counter is {counter}. Greetings from <a href="https://netkata.com">https://netkata.com</a></marquee>
                            <Button text="Click to increase this running weird sample text" onClickHandler={this.incrementCounter} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
