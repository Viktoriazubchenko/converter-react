import React from 'react';
import './eyes.scss';
class Eyes extends React.Component{
    
    
    render(){ 
        
        return(
            <div className='eyes'>
                 <div className={this.props.stateOfEyes} id='left'>
                    <div className="pupil" id="leftEye">
                        <div className="light"></div>
                    </div>
                </div>
                <div className={this.props.stateOfEyes}>
                    <div className="pupil" id="rightEye">
                        <div className="light"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Eyes;