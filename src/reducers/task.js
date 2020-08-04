import * as types from './../constants/const.js';

let getLocalState = JSON.parse(localStorage.getItem('work'));
let initialState = getLocalState ? getLocalState : [];

function taoID(){
	return Math.random();
}

let showItems = ( state = initialState , action ) => {
	switch (action.type){

		case  types.LIST_ALL : {
			return state;
		}

		// add item

		case types.ADD_WORK : {
			let newTask = {
				name : action.item.name,
				status : !action.item.status || action.item.status === 'false' ? false : true ,
				id : taoID()
			}
			state.push(newTask);
			localStorage.setItem('work',JSON.stringify(state));
			return [...state];
		}

		// update status

		case types.UPDATE_STATUS : {
			let index = state.indexOf(action.item);
			let {status} = action.item;
			let newState = [
				...state.slice(0,index),
				{
					...action.item,
					status : !status
				},
				...state.slice(index + 1)
			];
			// debugger;
			localStorage.setItem('work',JSON.stringify(newState));
			return [...newState]
		}

		//edit item 

		case types.EDIT_ITEM : {
			let indexState;
			for(let i = 0 ; i < state.length ; i++){
	            if(state[i].id === action.item.id){
	               indexState = i;
	            }	
			}
			state.splice(indexState , 1 , action.item);
			localStorage.setItem('work',JSON.stringify(state));
			return [...state]
		}

		// delete item

		case types.DELETE_ITEM : {
			let index = state.indexOf(action.item);
			state.splice(index,1);
			localStorage.setItem('work',JSON.stringify(state));
			return [...state]
		}

		//SEACH	

		case types.SEARCH : {

			let newState = getLocalState ? getLocalState : [];
			if( action.value !== 'true' 
				&& action.value !== 'false' 
				&& action.value !== 'All' )
			{
				return newState.filter((item) =>{
					let reg = new RegExp (action.value , 'gi');
					return item.name.match(reg);
				});
			}else{
				let statusSearch = action.value;
				let result = [];
				 if ( statusSearch ===  'true') {
					for(let i = 0 ; i < newState.length ;i ++){
						if(newState[i].status){
							result.push(newState[i]);
						}
					}
		
					return result;
				}else if( statusSearch === 'false' ){
					for(let i = 0 ; i < newState.length ;i ++){
						if(!newState[i].status){
							result.push(newState[i]);
						}
					}	
					return result;
				}
			}
			return newState;
		}

		default : return state;

	}
}

export default showItems;

