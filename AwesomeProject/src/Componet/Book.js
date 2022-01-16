import React from "react";

export const Book =({book})=>{return(

    <tr>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.authoer}</td>
                  <td>
                      <button className="btn btn-secondary" type="button">
                      Delete
                      </button>
                  </td>
                  <td>
                      <button className="btn btn-primary" type="button">
                      Edit
                      </button>
                  </td>
                  
                </tr>
)}