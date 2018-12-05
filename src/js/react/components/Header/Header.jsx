import React from 'react';
import {Link} from "react-router-dom";

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

        if(this.state.clicked) {
            this.setState({
                bookstoreName : "White Books",
                textColor : "black",
                backgroundColor : "white"
            });
        } else {
            this.setState({
                bookstoreName : "Black Books",
                textColor : "white",
                backgroundColor : "black"
            });
        }

        this.setState({
            clicked : !this.state.clicked
        });
    };

    render() {

        let headerClasses = {
            color : this.state.textColor,
            backgroundColor : this.state.backgroundColor
        };

        return (
            //style={headerClasses}
            <header className="header">
                <div className="header__logo">
                </div>
                <div className="header__title">
                    <h1 className="h1">
                        {this.state.bookstoreName}
                    </h1>
                </div>
                <div className="header__icons">
                    <Link to="/admin"><i className="icon icon-shopping-basket"></i></Link>
                    <Link to="/admin"><i className="icon icon-user"></i></Link>
                </div>
            </header>
        );
    }
}

export default Header;