// @flow weak

import React, {PropTypes, Component} from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import transitions from 'material-ui/styles/transitions';

export const styleSheet = createStyleSheet('SnackbarContent', (theme) => {
  const { typography } = theme;
  
  return {
    root: {
      borderRadius: 2,
      backgroundColor: 'rgb(50, 50, 50)',
      padding: '0px 24px ',
      lineHeight: '48px',
    },
    content: {
	   fontSize: 14, 
     fontFamily: 'Roboto Regular 14sp',
	   color: 'rgba(255,255,255,0.87)',
     opacity:1,
     overflow: 'auto',
    },
    action: {  
      float: 'right',
      lineHeight:'48px',
      marginRight: -16,
      backgroundColor: 'transparent',
      color: 'rgb(255,64,129)',
    },
    '@media (min-width: 760px) and (max-width:2000px )': {
      root: {
        minWidth: 288 ,
        maxWidth: 568,
        width: 50,
      }
    }, 
  }
});

export default class SnackbarContent extends Component {

 static propTypes = {
    
    rightIconButtonElement: PropTypes.node,

    action: PropTypes.node,
    /**
     * Override the inline-styles of the content element.
     */
    contentStyle: PropTypes.object,
    /**
     * The message to be displayed.
     *
     * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
     * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
     * showing again)
     */
    message: PropTypes.node,
    /**
     * Fired when the action button is touchtapped.
     *
     * @param {object} event Action button event.
     */
    onActionTouchTap: PropTypes.func,
    /**
     * @ignore
     * Controls whether the `Snackbar` is opened or not.
     */
    open: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @ignore
     * Width of the screen.
     */
    width: PropTypes.number,
  };

  handleMouseOver = () => {
    console.log('haha')
      this.setState({
        isHovered: true
      })
      
  };
  handleMouseOut = () => {
    console.log('mouse left')
    this.setState({
      isHovered: false
    })
    
  }

render() {
  const transitionStyle = {
    transition: open ? 
      transitions.create('opacity', {
        duration: transitions.duration.complex,
        delay: transitions.delay.shortest,
        easing: transitions.easing.easeOut,
      }) : transitions.create('opacity', {
        duration: transitions.duration.standard,
        delay: 0,
        easing: transitions.easing.easeOut,
      })  
  }
 
  const {
    action,
    contentStyle,
    message,
    open, // eslint-disable-line no-unused-vars
    onActionTouchTap,
    style,
    children,
    rightIconButtonElement,
    ...other
  } = this.props;

  
  const classes = this.context.styleManager.render(styleSheet);

  return(
    <div 
      className={classes.root}
    >
      <div className={classes.content} style = {{transitionStyle}}>
          <span>{message}</span>
        <div className={classes.action}>
          {action}
          {rightIconButtonElement}    
        </div>
      </div>
    </div>
  )
}
}

SnackbarContent.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};