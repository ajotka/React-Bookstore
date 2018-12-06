import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Inventory from '../../components/Inventory/Inventory';
import Order from '../../components/Order/Order';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            //books : [],
            order : []
        }
    }

    // addNewBook = (book) => {
    //
    //     let newBooks = [...this.state.books];
    //
    //     newBooks.push(book);
    //
    //     this.setState({
    //         books : newBooks
    //     });
    // };

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

    render() {
        return (
            <div>
                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                <Header
                    store={true}
                    user={true}
                    logout={false}
                />

                <main className="main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                            <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
