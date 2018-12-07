import React from 'react';

export default class OrderSummaryViewView extends React.Component {

    render() {
        return (
            <div className="card card--horizontal">
                <div className="card__header">
                    <img src={this.props.book.image} width="100px" height="100px" alt={this.props.book.name} />
                </div>
                <div className="card__body">
                    <div className="card__header-title">{this.props.book.name}</div>
                    <p><span>Author:</span> {this.props.book.author}</p>
                </div>
                <div className="card__footer">
                    <button className="btn btn--outline btn--center" onClick={ () => this.props.addToOrder(this.props.book) }>Remove</button>
                </div>
            </div>
        );
    }
}
