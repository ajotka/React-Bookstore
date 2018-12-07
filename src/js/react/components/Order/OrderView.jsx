import React from 'react';

export default class OrderView extends React.Component {

    render() {
        return (
            <div className="orders__item">
                <img className="orders__item-image" src={this.props.book.image} width="50px" height="50px" />
                <div className="orders__item-book">
                    <div className="book__title">{this.props.book.name}</div>
                    <div className="book__author">{this.props.book.author}</div>
                </div>
                <div>
                    <p>x{this.props.book.qty}</p>
                    <button className="btn btn--outline orders__item-button" onClick={ () => this.props.removeFromOrder(this.props.book.name) }>Remove</button>
                </div>
            </div>
        );
    }
}
