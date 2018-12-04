import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Inventory from '../../components/Inventory/Inventory';
import Order from '../../components/Order/Order';
import AdminPanel from '../../components/AdminPanel/AdminPanel';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            books : []
        }
    }

    addNewBook = (book) => {

        let newBooks = [...this.state.books];

        newBooks.push(book);

        this.setState({
            books : newBooks
        });
    };

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
                            <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
