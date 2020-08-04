import { combineReducers } from 'redux';
import  showItems from './task.js';
import  closeForm from './closeForm.js';
import changeItem from './changeItem.js';

const myReducer = combineReducers({
	Items : showItems,
	closeForm,
	changeItem  
});

export default myReducer;