import {
  ADD_BOOK_ERROR,
  ADD_BOOK_LOADING,
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_ERROR,
  DELETE_BOOK_SUCCESS,
  EDIT_BOOK_ERROR,
  EDIT_BOOK_SUCCESS,
  FETCH_BOOK_LOADING,
  FETCH_BOOK_SUCCESS,
} from "./types";

import { Data } from "../data";
// import Books from "../container/Books";


// export const createBook=(bookdata)=>{
// debugger;
// console.log("Books",bookdata.title);

//   return (dispatch)=>{
//    console.log("data",Data)
  
  //  console.log("data",Data.length)
  //  var last_element = Data[Data.length - 1];
  //  console.log("last_element",last_element.id)
  //  const id = last_element.id +1,
  //  const ndata = {
  //    id:id,
  //   title:bookdata.title,
  //   authoer:bookdata.authoer,
  //   year:bookdata.year,
  //   }
//   }
// }


export const fetchBooksSuccess = (data) => {
  
  return {
    type: FETCH_BOOK_SUCCESS,
    payload: data,
  };
};


export const fetchBook = dispatch => {
   
    dispatch(fetchBooksSuccess(Data));
   
};
