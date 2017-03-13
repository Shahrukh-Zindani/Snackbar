import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import Button from 'material-ui/Button'
import customPropTypes from 'material-ui/utils/customPropTypes';

export const styleSheet = createStyleSheet('SnackbarBody', (theme) => {
  const { transitions, typography, snackbar, spacing } = theme;
  return {
    root: {
      borderRadius: 0,
      backgroundColor: 'rgb(0,0,0)',
      padding: 24,
      height: 20,
      lineHeight: 48,
      maxWidth: 'inherit',
      minWidth: 'inherit',
      width: 40,
      flexGrow: 1
    },
    content: {
	   fontSize: 14, 
	   color: 'rgb(0,0,0)',
        opacity:1,
        
      },
      action: {
      color: 'rgb(0,0,0)',
      float: 'right',
      marginTop: 6,
      marginRight: -16,
      marginLeft: 24,
      backgroundColor: 'transparent',
    }
    
    }
  })
export default class Sample extends Component {
	static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  };

	render() {

	
  const classes = this.context.styleManager.render(styleSheet);

		return(
			<div className={classes.root}>
      	<div className = {classes.content}>
        	
      	</div>
    	</div>

		)
	}
}