import { TabRouter } from "@react-navigation/native";
import { act } from "react-test-renderer";
import { fetchBooksSuccess } from "../action/Book.action";
import {
    ADD_BOOK_ERROR,
    ADD_BOOK_LOADING,
    ADD_BOOK_SUCCESS,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_SUCCESS,
    
    EDIT_BOOK_ERROR,
    EDIT_BOOK_SUCCESS,
    FETCH_BOOK_LOADING,
    FETCH_BOOK_SUCCESS
    
  } from "../action/types";

  const defaultState ={
      books:[],
      craditem:[],

 }
 const bookReducer =(state=defaultState,action)=>{

    switch(action.type)
    {
            case FETCH_BOOK_SUCCESS:
            return {...state,books:action.payload}
          
            case 'ADD_TO_CART':
              return{...state,craditem:[...state.craditem,action.payload]}
              
              case 'REMOVE_FROM_CART':
            return {...state, craditem:state.craditem.filter(craditem=> craditem[0].Id !== action.payload)}
            case 'UPDATEVALUE':
            return{...state}
            default:return state;
    }
 }
export default bookReducer;