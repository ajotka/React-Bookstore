import React from 'react';
import Button from '../../components/Button/Button';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
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

        this.props.addBook(newBook);

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

    render() {
        return (
            <div className="col-md-4">
                <form onSubmit={this.addNewBook}>
                    <div className="form-group">
                        <input type="text" placeholder="Book Name" id="nameInput" name="name" className="form-control" onChange={this.handleChange} value={this.state.book.name} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book Author" id="authorInput" name="author" className="form-control" onChange={this.handleChange} value={this.state.book.author} />
                    </div>
                    <div className="form-group">
                        <input type="textarea" placeholder="Book Description" id="descriptionInput" name="description" className="form-control" onChange={this.handleChange} value={this.state.book.description} />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" placeholder="Book OnStock" id="onStockInput" name="onStock" className="form-check-input" onChange={this.handleChange} value={this.state.book.onStock} />
                        <label htmlFor="onStockInput" className="form-check-label">On Stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book Image" id="imageInput" name="image" className="form-control" onChange={this.handleChange} value={this.state.book.image} />
                    </div>
                    <button type="submit" className="button">Add</button>
                </form>
            </div>
        );
    }
}

export default AdminPanel;