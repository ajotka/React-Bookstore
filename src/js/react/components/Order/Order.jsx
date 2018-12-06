import React from 'react';
import OrderView from "./OrderView";

class Order extends React.Component {

    render() {

        const orderedBooksLength = this.props.order.length;

        const orderedBooks = this.props.order.map(order => {
            return <OrderView book={order} removeFromOrder={this.props.removeFromOrder} />
        });

        return (
            <div className="orders">
                {orderedBooks}
                {orderedBooksLength > 0 &&
                    <button className="btn btn--center orders__button">Order</button>
                }
            </div>
        );
    }
}

export default Order;