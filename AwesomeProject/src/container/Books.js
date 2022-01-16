import { Component } from "react";
import { Data } from "../data";
import { Book } from "../Componet/Book";
import { connect, Connect } from "react-redux";

class Books extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("this.props.isLoad",this.props.isLoading);
    if (this.props.isLoading) {
      debugger
    
      return(
        <div>
          <p>isLoading</p>
        </div>
      )
    } else {
      return (
        <div style={{ border: 5 }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Id</td>
                <td>title</td>
                <td>Author</td>
                <td>year</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.props.books.map((book) => {
                return <Book key={book.id} book={book} />;
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
const mapStateToprops = (state) => {
  return {
    books: state.booksData.books || [],
    isLoading: state.booksData.isLoading,
  };
};
export default connect(mapStateToprops, null)(Books);
