import React from 'react';
import Eyes from '../eyes/eyes';
import Mouth from '../mouth/mouth';
import './body.scss';
class Body extends React.Component{
    render(){
        return(
            <div className={this.props.stateOfBody}>
                <div className='face'>
                    <Eyes stateOfEyes={this.props.stateOfEyes}/>
                    <Mouth stateOfMouth={this.props.stateOfMouth}/>
                </div>
            </div>
        )
    }
}
export default Body;