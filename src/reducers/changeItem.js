import * as types from './../constants/const.js';

let initialState = {};

let changeItem = ( state = initialState , action ) => {
	switch (action.type){
		case  types.CHANGE_ITEM : {
			state = action.item;
			return state;
		}

		case  types.CLOSE_FORM  : {
			return {};
		}
		case types.OPEN_CLOSE_FORM : {
			return {};
		}
		
		default : return state;
	}
}

export default changeItem;

