import * as types from './../constants/const.js';

export function LIST_ALL  ()  {
	return {
		type : types.LIST_ALL
	}
};

export function ADD_WORK (item)  {
	return {
		type : types.ADD_WORK,
		item
	}
};

export function CLOSE_FORM ()  {
	return {
		type : types.CLOSE_FORM
	}
};

export function OPEN_FORM ()  {
	return {
		type : types.OPEN_FORM
	}
};

export function OPEN_CLOSE_FORM ()  {
	return {
		type : types.OPEN_CLOSE_FORM
	}
};

export function CHANGE_ITEM (item)  {
	return {
		type : types.CHANGE_ITEM,
		item
	}
};

export function UPDATE_STATUS (item) {
	return {
		type : types.UPDATE_STATUS ,
		item
	}
};

export function DELETE_ITEM (item) {
	return {
		type : types.DELETE_ITEM,
		item
	}
};

export function EDIT_ITEM (item) {
	return {
		type : types.EDIT_ITEM,
		item
	}
}

export function SEARCH (value) {
	return {
		type : types.SEARCH,
		value
	}
}

