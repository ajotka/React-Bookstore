import React from 'react';

export default class BookView extends React.Component {

    render() {
        return (
            <div className="col-md-3 card">
                <div className="card__header">
                    <div className="card__header-title">{this.props.book.name}</div>
                </div>
                <div className="card__body">
                    <img src={this.props.book.image} width="100px" height="100px" alt={this.props.book.name} />
                    <p><span>Author:</span> {this.props.book.author}</p>
                </div>
                <div className="card__footer">
                    <button className="btn btn--outline btn--center" onClick={ () => this.props.addToOrder(this.props.book) }>Add to Order</button>
                </div>
            </div>
        );
    }
}
