import React from 'react';
import './app-details.scss';
class Button extends React.Component{
    render(){
        return(
           <div className={this.props.buttonMode}>
               <div className='gradient-border'>
               <button className='day-night' onClick={this.props.clickSleep}>
                   Change Mode
                </button>
               </div>
           </div>

        )
    }
}


export default Button;