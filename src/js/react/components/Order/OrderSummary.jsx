import React from 'react';
import {Link} from "react-router-dom";
import OrderSummaryView from "./OrderSummaryView";
import Header from "../Header/Header";

class OrderSummary extends React.Component {

    constructor() {
        super();
        this.state = {
            order : JSON.parse(localStorage.getItem("order"))
        }
    }

    removeFromOrder = (bookName) => {
        this.state.order.map( (element, index) => {
            if(element.name == bookName) { this.state.order[index].qty = 0; }
        });

        this.setState({
            order : this.state.order.filter( book => bookName !== book.name )
        });

        localStorage.setItem("order", JSON.stringify(this.state.order));

    };

    render() {

        let orderedBooks = 0;
        let bookListing = "";

        if( this.state.order ) {
            bookListing = this.state.order.map((book, index) => {
                orderedBooks += book.qty;
                return <OrderSummaryView key={index} book={book} removeFromOrder={this.removeFromOrder} />
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
                                            <p><span>Date of receipt:</span> 10.10.2018</p>
                                            <p><span>Date of return:</span> 10.10.2018</p>
                                        </div>
                                        <div className="card__footer">
                                            <button className="btn btn--center">Proceed</button>
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