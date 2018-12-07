import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Inventory from '../../components/Inventory/Inventory';
import Order from '../../components/Order/Order';
import Footer from "../../components/Footer/Footer";
import OrderSummary from "../../components/Order/OrderSummary";

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

        let ifDuplicate = false;

        if(isNaN(book.qty)) {
            book.qty = 1;
        } else {
            book.qty++;
        }

        this.state.order.map( (element) => {

            if(element.name === book.name) {
                ifDuplicate = true;
            }
        });

        this.setState({
            order : [...this.state.order, book]
        });

        if(ifDuplicate) {
            this.removeDuplicateFromOrder();
            ifDuplicate = false;
        }

        localStorage.setItem("order", JSON.stringify(this.state.order));

    };

    removeDuplicateFromOrder = () => {
        this.setState({
            order : this.state.order.slice(0, this.state.order.length)
        });
    };

    removeFromOrder = (bookName) => {
        this.state.order.map( (element, index) => {
            if(element.name == bookName) { this.state.order[index].qty = 0; }
        });

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
                            <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
