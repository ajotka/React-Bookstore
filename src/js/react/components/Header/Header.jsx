import React from 'react';
import {Link} from "react-router-dom";
import firebaseApp from "firebase";
import OrderView from "../Order/OrderView";

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            bookstoreName : "Bookstore",
            clicked : true,
            textColor : "white",
            backgroundColor : "black"
        };
    }

    handleClick = () => {

        firebaseApp.auth().signOut();

    };

    render() {

        const orderedBooks = this.props.order.length;

        return (
            <header className="header">
                <div className="header__logo">
                </div>
                <div className="header__title">
                    <h1 className="h1">
                        {this.state.bookstoreName}
                    </h1>
                </div>
                <div className="header__icons">
                    {this.props.store &&
                        <Link to="/admin">
                            <i className="icon icon-shopping-basket" data-badge={orderedBooks}></i>
                        </Link>
                    }
                    {this.props.user && <Link to="/admin"><i className="icon icon-user"></i></Link> }
                    {this.props.logout && <Link to="/" onClick={this.handleClick}><i className="icon icon-sign-out"></i></Link> }
                </div>
            </header>
        );
    }
}

export default Header;