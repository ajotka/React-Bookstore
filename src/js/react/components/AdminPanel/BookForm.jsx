import React from 'react';
import {fbase} from "../../fbase";

class BookForm extends React.Component {

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
            }
        };
    }

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
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="login-panel">
                        <h1 className="h1">Add Book</h1>
                        <form onSubmit={this.addNewBook}>
                            <div className="form-group">
                                <label className="form-control-label">Book Name</label>
                                <input type="text" id="nameInput" name="name" className="form-control" onChange={this.handleChange} value={this.state.book.name}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Book Author</label>
                                <input type="text" id="authorInput" name="author" className="form-control" onChange={this.handleChange} value={this.state.book.author}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Book Description</label>
                                <input type="textarea" id="descriptionInput" name="description" className="form-control" onChange={this.handleChange} value={this.state.book.description}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Book Image URL</label>
                                <input type="text" id="imageInput" name="image" className="form-control" onChange={this.handleChange} value={this.state.book.image}/>
                            </div>
                            <div className="form-group form-group--checkbox">
                                <label htmlFor="onStockInput" className="form-control-label">On Stock
                                    <input type="checkbox" id="onStockInput" name="onStock" className="form-check-input" onChange={this.handleChange} value={this.state.book.onStock}/>
                                    <div className="checkbox__indicator"></div>
                                </label>
                            </div>
                            <button type="submit" className="btn btn--outline btn--center">Add To List</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookForm;