import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Inventory from '../../components/Inventory/Inventory';
import Order from '../../components/Order/Order';
import Footer from "../../components/Footer/Footer";

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            order : [],
            clicked : false,
            display : "none"
        }
    }

    addToOrder = (book) => {
        this.setState({
            order : [...this.state.order, book]
        });
    };

    removeFromOrder = (bookName) => {
        this.setState({
            order : this.state.order.filter( book => bookName !== book.name )
        });
    };

    showOrderList = () => {

        if(this.state.clicked) {
            this.setState({
                display : "block"
            })
        } else {
            this.setState({
                display : "none"
            })
        }

        this.setState({
            clicked : !this.state.clicked
        })

        console.log(this.state.clicked);

    };

    render() {

        let orderListCss = {
            display : this.state.display
        };

        return (
            <div>
                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                <Header
                    store={true}
                    user={true}
                    logout={false}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                    showOrderList={this.showOrderList}
                />
                <Order style={orderListCss} order={this.state.order} removeFromOrder={this.removeFromOrder}/>

                <main className="main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}
