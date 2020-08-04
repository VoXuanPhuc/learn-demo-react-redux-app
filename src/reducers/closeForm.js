import * as types from './../constants/const.js';

let initialState = false;

let closeForm = ( state = initialState , action ) => {
	switch (action.type){
		case  types.CLOSE_FORM : {
			return state = false;
		}
		case  types.OPEN_CLOSE_FORM : {
			return !state;
		}
		case  types.OPEN_FORM : {
			return state = true;
		}
		default : return state;
	}
}

export default closeForm;

