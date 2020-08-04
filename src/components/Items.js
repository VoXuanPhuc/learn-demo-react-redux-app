import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table , Button } from 'reactstrap';
import * as actions from './../actions/action.js';

class Items extends Component {

	updateStatus (item) {
		return () => {
			this.props.updateStatus(item);
		}
	}

	onDelete (item) {
		return () => {
			this.props.deleteItem(item);
		}
	}

	onChange (item) {
		return () => {
			this.props.openForm();
			this.props.changeItem(item);
		}
	}

	onSearch = (e ) => {
		this.props.onSearch(e.target.value);
	}

	render () {

		let { todos } = this.props;
		let items = todos.map(( item , key) => {
			return (
				<tr key={key}>
				    <th scope="row">
				    	{ key + 1}
				    </th>
				    <td >
				    	{item.name}
				    </td>
				    <td >
				    	<p onClick = { this.updateStatus(item) } 
				    		className={item.status === true ? 'bg-success' : 'bg-warning'} >
				    		{item.status === true ? 'Now' : 'Later'}
				    	</p>
				    </td>
				    <td>
				    	<Button onClick={this.onChange(item)} color="success">Edit</Button>{' '}
				    	<Button onClick={this.onDelete(item)} color="danger">Delete</Button>{' '}
				    </td>
				</tr>
			);
		});
		return (
			   <div>
		      	<Table bordered>
			      <thead>
			        <tr>
			          <th>Index</th>
			          <th>Name</th>
			          <th>Status</th>
			          <th>Action</th>
			        </tr>
			      </thead>
			      <tbody>
			      	<tr>
				    <th>
				    	0
				    </th>
				    <td >
				    	<input type="text" 
				    		placeholder="Search"
				    		className="w-100 outline:none p-1 rounded border border-success" 
				    		onChange={this.onSearch}
				    	/>
				    </td>
				     <td >
				    	<select onChange={this.onSearch} 
				    		className="w-100 outline:none p-1 rounded border border-success">
				    		<option value='All' >ALL</option>
				    		<option value={true} >Now</option>
				    		<option value={false} >Later</option>
				    	</select>
				    </td>
				     <td >				    
				    </td>
				</tr>
			        { items }
			      </tbody>
			    </Table>
		    </div>
		);
	}
}

const mapToprops = ( state ) => {
	return {
		todos : state.Items
	}
}

const mapdispatch = ( dispatch , props ) => {
	return {
		updateStatus : (item) => {
			dispatch(actions.UPDATE_STATUS(item));
		},
		openForm : () => {
			dispatch(actions.OPEN_FORM());
		},
		changeItem : (item) => {
			dispatch(actions.CHANGE_ITEM(item));
		},
		deleteItem : (item) => {
			dispatch(actions.DELETE_ITEM(item));
		},
		onSearch : (value ) => {
			dispatch(actions.SEARCH(value));
		}
	}
}

export default connect( mapToprops, mapdispatch ) ( Items );

