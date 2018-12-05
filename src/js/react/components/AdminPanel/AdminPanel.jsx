import React from 'react';
import {fbase, firebaseApp} from "../../fbase";
import Button from "../Button/Button";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            books : [],
            book : {
                name : "",
                author : "",
                description : "",
                onStock : true,
                image : ""
            },
            loggedIn : false,
            email: "",
            password: ""
        };
    }

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    handleChange = (event) => {

        let newBook;

        if(event.target.name === "onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name] : event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name] : event.target.value
            };
        }

        this.setState({
            book : newBook
        });
    };

    addNewBook = (event) => {

        event.preventDefault();

        let newBook = {...this.state.book};

        //this.props.addBook(newBook);

        if (Array.isArray(this.state.books)) {
            this.setState({books: [...this.state.books, newBook]})
        } else {
            this.setState({books: [newBook]})
        }

        this.setState({
            book : {
                name : "",
                author : "",
                description : "",
                onStock : true,
                image : ""
            }
        });

    };

    componentDidMount() {
        if(localStorage.getItem("loggedIn")) {
            this.setState({ loggedIn : localStorage.getItem("loggedIn") });
        }
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
    }

    authenticate = (event) => {

        event.preventDefault();

        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                this.setState({
                    loggedIn : true,
                });
                localStorage.setItem("loggedIn", true);
            })
            .catch( () => {
                //console.log("Wrong email or password");
            });

    };

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
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
                }
                {this.state.loggedIn &&
                    <div className="col-md-4">
                        <form onSubmit={this.addNewBook}>
                            <div className="form-group">
                                <input type="text" placeholder="Book Name" id="nameInput" name="name" className="form-control" onChange={this.handleChange} value={this.state.book.name}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book Author" id="authorInput" name="author" className="form-control" onChange={this.handleChange} value={this.state.book.author}/>
                            </div>
                            <div className="form-group">
                                <input type="textarea" placeholder="Book Description" id="descriptionInput" name="description" className="form-control" onChange={this.handleChange} value={this.state.book.description}/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" placeholder="Book OnStock" id="onStockInput" name="onStock" className="form-check-input" onChange={this.handleChange} value={this.state.book.onStock}/>
                                <label htmlFor="onStockInput" className="form-check-label">On Stock</label>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book Image" id="imageInput" name="image" className="form-control" onChange={this.handleChange} value={this.state.book.image}/>
                            </div>
                            <button type="submit" className="button">Add</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default AdminPanel;