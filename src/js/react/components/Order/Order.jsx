import React from 'react';
import OrderView from "./OrderView";
import {Link} from "react-router-dom";

class Order extends React.Component {

    render() {

        let orderedBooksLength = 0;
        let orderedBooks;

        if(this.props.order) {
            orderedBooksLength = this.props.order.length;
            orderedBooks = this.props.order.map((order, index) => {
                return <OrderView key={index} book={order} removeFromOrder={this.props.removeFromOrder} />
            });
        }

        return (
            <div className="orders" style={this.props.style}>
                {orderedBooks}
                {orderedBooksLength === 0 &&
                    <div>Your order is empty :(</div>
                }
                {orderedBooksLength > 0 &&
                <Link to="/order"><button className="btn btn--center orders__button">Order</button></Link>
                }
            </div>
        );
    }
}

export default Order;