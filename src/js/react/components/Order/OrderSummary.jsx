import React from 'react';
import {Link} from "react-router-dom";
import { ToastContainer } from "react-toastr";
import OrderSummaryView from "./OrderSummaryView";
import Header from "../Header/Header";

class OrderSummary extends React.Component {

    constructor() {
        super();
        this.state = {
            order : JSON.parse(localStorage.getItem("order"))
        }
    }

    removeFromOrderSummary = (bookName) => {

        console.log("Remove");
        this.state.order.map( (element, index) => {
            if(element.name == bookName) { this.state.order[index].qty = 0; }
        });

        this.setState({
            order : this.state.order.filter( book => bookName !== book.name )
        });

        localStorage.setItem("order", JSON.stringify(this.state.order.filter( book => bookName !== book.name )));

    };

    addDays = (date, days) => {
        let result = new Date(date);
        result.setDate(date.getDate() + days);
        return result;
    };

    formatDate = (date) => {
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    };

    render() {

        let orderedBooks = 0;
        let bookListing = "";
        let container;
        const today = new Date();
        const receiptDuration = 2;
        const returnDuration = 60;

        let receiptDate = this.addDays(today, receiptDuration);
        let returnDate = this.addDays(today, returnDuration);

        if( this.state.order ) {
            bookListing = this.state.order.map((book, index) => {
                orderedBooks += book.qty;
                return <OrderSummaryView key={index} book={book} removeFromOrderSummary={this.removeFromOrderSummary} />
            });

        }

        return (
            <React.Fragment>
                <Header
                    store={true}
                    user={true}
                    logout={false}
                    order={this.state.order}
                />

                <ToastContainer
                    ref={ref => container = ref}
                    className="toast-bottom-right"
                />

                <main className="main">
                    <div className="container">
                        <div className="row justify-content-center">

                            {orderedBooks == 0 &&
                                <div className="col-md-5 card card--vertical">
                                    <div className="card__header">
                                        <h1 className="h1 h1--center">Order Summary</h1>
                                    </div>
                                    <div className="card__body">
                                        <p>We are sorry but our order is empty...</p>
                                    </div>
                                    <div className="card__footer">
                                        <Link to='/'><button className="btn btn--center">Go Home</button></Link>
                                    </div>
                                </div>
                            }

                            {orderedBooks != 0 &&
                                <React.Fragment>
                                    <div className="col-md-7">
                                        {bookListing}
                                    </div>
                                    <div className="col-md-5 card card--vertical">
                                        <div className="card__header">
                                            <h1 className="h1 h1--center">Order Summary</h1>
                                        </div>
                                        <div className="card__body">
                                            <p><span>Client number:</span> #123456789</p>
                                            <p><span>Number of books:</span> {orderedBooks}</p>
                                            <p><span>Date of receipt:</span> {this.formatDate(receiptDate)}</p>
                                            <p><span>Date of return:</span> {this.formatDate(returnDate)}</p>
                                        </div>
                                        <div className="card__footer">
                                            <button className="btn btn--center" onClick={() =>
                                                container.success(`You can reciept your order from ${receiptDate}`, `Success`, {
                                                    closeButton: true,
                                                })
                                            }>Proceed</button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default OrderSummary;