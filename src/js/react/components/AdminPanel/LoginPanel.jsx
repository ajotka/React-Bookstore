import React from 'react';
import {firebaseApp} from "../../fbase";

class LoginPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    authenticate = (event) => {

        event.preventDefault();

        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                this.props.changeLoggedIn(true);
            })
            .catch( () => {
                //console.log("Wrong email or password");
            });

    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="login-panel">
                            <h1 className="h1">Admin Login</h1>
                            <form onSubmit={this.authenticate}>
                                <div className="form-group">
                                    <label className="form-control-label">EMAIL</label>
                                    <input type="text" name="email" id="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" name="password" id="password" className="form-control" onChange={this.handleLoginChange} value={this.state.password} />
                                </div>
                                <button type="submit" className="btn btn--outline btn--center">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPanel;