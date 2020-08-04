import React, { Component } from 'react';
import Items from './components/Items.js';
import FormAddWord from './components/addWork.js';
import { Container, Row , Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from './actions/action.js';
import { Button } from 'reactstrap';
import './css/app.css';

class App extends Component {
	openForm = () => {
		this.props.openForm();
	}
  render() {
  	let form = this.props.stateForm ? <FormAddWord/> : '';
	 return (
	 	<Container>
	 		<h3>PROJECT QUẢN LÝ CÔNG VIỆC</h3> 
	 		<hr/>
	 		<Row>
	 			<Col xs={form ? 4 : 0} >
	 				{form}
	 			</Col>
	 			<Col xs={form ? 8 : 12}>
	 				<Button onClick= { this.openForm } type="submit" color="success">Thêm Công Việc</Button>{' '}
	 				<br/><br/>
	 				<Items/>
	 			</Col>
	 		</Row>
	 	
	 	</Container>
	  
	);
  }
}
const mapStateToprops = ( state ) => {
	return {
		stateForm : state.closeForm
	}
};

const mapDipacthToprops = ( dispatch , props ) => {
	return {
		openForm : () => {
			dispatch(actions.OPEN_CLOSE_FORM());
		}
	}
}

export default connect(mapStateToprops, mapDipacthToprops)(App);