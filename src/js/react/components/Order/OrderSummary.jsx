import React from 'react';
import OrderSummaryView from "./OrderSummaryView";
import Header from "../Header/Header";

class OrderSummary extends React.Component {

    constructor() {
        super();
        this.state = {
            order : []
        }
    }

    render() {

        const cachedOrder = JSON.parse(localStorage.getItem("order"));
        const bookListing = cachedOrder.map((book, index) => {
            return <OrderSummaryView key={index} book={book} />
        });

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
                            <div className="col-md-7">
                                {bookListing}
                            </div>
                            <div className="col-md-5 card card--vertical">
                                <div className="card__header">
                                    <h1 className="h1 h1--center">Summary Order</h1>
                                </div>
                                <div className="card__body">
                                    <p><span>Client number:</span> #123456789</p>
                                    <p><span>Number of books:</span> 3</p>
                                    <p><span>Date of receipt:</span> 10.10.2018</p>
                                    <p><span>Date of return:</span> 10.10.2018</p>
                                </div>
                                <div className="card__footer">
                                    <button className="btn btn--center">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default OrderSummary;