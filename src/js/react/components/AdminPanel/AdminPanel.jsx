import React from 'react';
import LoginPanel from "./LoginPanel";
import BookForm from "./BookForm";
import Header from "../Header/Header";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn : false
        };
    }

    changeLoggedIn = (newValue) => this.setState({loggedIn: newValue});

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn} />
                }
                {this.state.loggedIn &&
                    <React.Fragment>
                        <Header
                            store={false}
                            user={false}
                            logout={true}
                        />
                        <BookForm />
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default AdminPanel;