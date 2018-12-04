import React from 'react';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            bookstoreName : "Black Books",
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
            <header className="header">
                <div className="container">
                    <div className="col-md-12" style={headerClasses} onClick={this.handleClick}>{this.state.bookstoreName}</div>
                </div>
            </header>
        );
    }
}

export default Header;