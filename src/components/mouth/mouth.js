import React from 'react';
import './mouth.scss';

class Mouth extends React.Component{
    render(){
        return(
            <div className={this.props.stateOfMouth}>
                <div className='mouth'>
                    <div className="tooth"></div>
                    <div className="tongue"></div>
                </div>
                <div className='sleeping'>
                    <span className="first">z</span>
                    <span className="second">z</span>
                    <span className="third">z</span>
                </div>
            </div>
        )
    }
}
export default Mouth;