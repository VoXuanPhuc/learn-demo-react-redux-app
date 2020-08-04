import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import './../css/addWork.css';
import * as actions from './../actions/action.js';

class Items extends Component {
	constructor (props){
		super(props);
		this.state = {
			id : '',
			name : '',
			status : true
		}
	};

	componentDidMount (){
		if(this.props.changeItem && this.props.changeItem.id !== undefined ){
			this.setState({
				id : this.props.changeItem.id,
				name : this.props.changeItem.name,
				status : this.props.changeItem.status
			});
			
		}else{
			this.onClear();
		}
	
	}

	UNSAFE_componentWillReceiveProps (nextProps ){
		
		if(nextProps && nextProps.changeItem ){
			this.setState({
				id : nextProps.changeItem.id,
				name : nextProps.changeItem.name,
				status : nextProps.changeItem.status
			});

		}else{
			 this.onClear();
		}	
	}

	onSubmit = (e) => {
		e.preventDefault();
		
		if(this.props.changeItem.id === undefined){
			this.props.onAddtask(this.state);
		}else {
			this.props.editItem(this.state);
		}
		
		this.onClear();
		this.props.closeForm();
	}
	
	onChange =  (e) => {
		let name = e.target.name;
		this.setState ({
			[name] : e.target.value
		});
	}

	onCancel = () => {
		this.onClear();
		this.props.closeForm();
	}

	onClear = () => {
		this.setState({
			id : '',
			name : '',
			status : true
		});
		// console.log(this.state);
	}

	render () {
		// let {name, status} = this.props.changeItem;
		return (
		      	<form onSubmit={this.onSubmit}>
		      		<h6>{this.props.changeItem.id !== undefined ? 'Change Work ' : 'Add Work'}</h6>
		      		<div>
		      			<label>Name : </label>
		      			<input value={this.state.name} onChange={this.onChange} type="text" name="name" required />
		      		</div>
		      		<div>
		      			<label>Status : </label>
			      		<select value={this.state.status}  onChange={this.onChange} name="status" >
			      			<option value={true}>Now</option>
			      			<option value={false}>Latter</option>
			      		</select>
		      		</div>		      		
		      		<div> 
			      		<Button type="submit" color="success">Save</Button>{' '}
					    <Button onClick={this.onCancel} type="button" color="danger">Cancel</Button>{' '}
		      		</div>
		      	</form>
		);
	}
}

const mapStateToprops = (state) => {
	return {
		stateForm : state.closeForm,
		changeItem : state.changeItem
	}
};

const mapDipatch = ( dispatch , props ) => {
	return {
		onAddtask : (item) => {
			dispatch(actions.ADD_WORK(item));
		},
		closeForm : () => {
			dispatch(actions.CLOSE_FORM());
		},
		editItem : (item) => {
			dispatch(actions.EDIT_ITEM(item))
		}
	}
}

export default connect(mapStateToprops, mapDipatch)(Items);

