import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from './Snackbar';
import Sample from './Sample';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			message: 'Ev=vh hsaasvhabsh '
		}

	}
	handleClick = () => {
		
			this.setState({
				open: true
			})
		
	};

  render() {
  	
  	console.log(this.state.open)
    return (
      <MuiThemeProvider>
      
      	<div>
	      	<Button onClick = {(event) => this.handleClick(event)}>Hi</Button>
	      		
	      	<Snackbar
	      		open = {this.state.open}
	      		message = {this.state.message}
	      		autoHideDuration = {5000}
	      		action = {<Button style = {{color: '#ff4081'}}>savsgvi</Button>}
	      		onRequestClose = {this.handleClose}	      		
	      	/>
	      </div>
      
      
      </MuiThemeProvider>
    );
  }
}

export default App;
