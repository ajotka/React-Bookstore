import React, { Component } from 'react';
import toastr from "reactjs-toastr";
import Header from '../../components/Header/Header';
import Inventory from '../../components/Inventory/Inventory';
import Order from '../../components/Order/Order';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            order: JSON.parse(localStorage.getItem("order")),
            clicked: true,
            display: "none"
        }
    }

    addToOrder = (book) => {

        let ifDuplicate = false;

        if (isNaN(book.qty)) {
            book.qty = 1;
        }

        if(this.state.order) {
            this.state.order.map((element) => {

                if (element.name === book.name) {
                    ifDuplicate = true;
                    element.qty++;
                }

            });
        }

        if(Array.isArray(this.state.order)) {
            this.setState({
                order: [...this.state.order, book]
            });
            localStorage.setItem("order", JSON.stringify([...this.state.order, book]));
        } else {
            this.setState({
                order: [book]
            });
            localStorage.setItem("order", JSON.stringify([book]));
        }

        if (ifDuplicate) {
            this.removeDuplicateFromOrder();
            ifDuplicate = false;
        }

        toastr.success(`Book ${book.name} was added to your order`, 'Success', {displayDuration:3000});

    };

    removeDuplicateFromOrder = () => {
        this.setState({
            order: this.state.order.slice(0, this.state.order.length)
        });

        localStorage.setItem("order", JSON.stringify(this.state.order));
    };

    removeFromOrder = (bookName) => {
        this.state.order.map((element, index) => {
            if (element.name === bookName) {
                this.state.order[index].qty = 0;
            }
        });

        this.setState({
            order: this.state.order.filter(book => bookName !== book.name)
        });

        localStorage.setItem("order", JSON.stringify(this.state.order.filter(book => bookName !== book.name)));

    };


    showOrderList = () => {

        if (this.state.clicked) {
            this.setState({
                display: "block"
            })
        } else {
            this.setState({
                display: "none"
            })
        }

        this.setState({
            clicked: !this.state.clicked
        });

    };

    render() {

        let orderListCss = {
            display : this.state.display
        };

        return (
            <React.Fragment>
                <Header
                    store={true}
                    user={true}
                    logout={false}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                    showOrderList={this.showOrderList}
                />
                <Order style={orderListCss} order={this.state.order} removeFromOrder={this.removeFromOrder} />

                <main className="main">
                    {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                    <div className="container">
                        <div className="row justify-content-center">
                            <Inventory books={this.state.books} addToOrder={this.addToOrder} />
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
