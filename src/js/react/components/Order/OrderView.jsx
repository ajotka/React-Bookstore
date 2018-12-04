import React from 'react';

export default class OrderView extends React.Component {

    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br />
                <button onClick={ () => this.props.removeFromOrder(this.props.book.name) }>Remove</button>
            </div>
        );
    }
}
