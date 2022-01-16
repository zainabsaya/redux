import {combineReducers} from 'redux';
import books from './BookReducer';
import cartItems from './CardItem';
export default combineReducers({
    booksData:books,
    cardItem:cartItems
    })