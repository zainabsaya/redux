import React, { Component } from "react";
import "./CreateBook.css";
import { createBook } from "../action/Book.action";
import { connect } from "react-redux";

class CreateBook extends Component {
  constructor(props) {
    super();
    this.state = {
      id: 0,
      title: "",
      author: "",
      year: "",
    };
  }
  handleSubmit(e){
    e.preventDefault();
      this.props.onAdd(this.state);
    
  }
  handleOnChangeValue(e){
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  render() {
    return (
      <div className="create-book">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter place holder"
              onChange={this.handleOnChangeValue.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="author"
              placeholder="Enter place author"
              onChange={this.handleOnChangeValue.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="year"
              placeholder="Enter place year Publish"
              onChange={this.handleOnChangeValue.bind(this)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (book) => {
      dispatch(createBook(book));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
