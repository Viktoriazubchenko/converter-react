import React from 'react';
import './app.scss';
import Button from '../app-details/app-details';
import Body from '../body/body';
import Calculator from '../converter/converter';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            night: false,
            dance: false
        }
        this.sleep = this.sleep.bind(this);
        this.dance = this.dance.bind(this);
    }
    // night mode
    sleep(){
        this.setState({
            night: !this.state.night
        })   
    }
    // party mode
    dance(){
        this.setState({
            dance: !this.state.dance
        })
    }

    render(){
        // night mode
        const backgroundMode = this.state.night ? 'app night' : 'app day';
        const eyesMode = this.state.night ? 'eye closed' : 'eye';
        const mouthMode = this.state.night ? 'mouth-closed' : '';
        const bodyMode = this.state.night ? 'body night-monster' : 'body';
        const converterMode = this.state.night ? 'converter-wrapper night-mode' : 'converter-wrapper';
        const buttonMode = this.state.night ? 'button-wrapper night-button' : 'button-wrapper';
        // party mode
        const bodyState = this.state.dance ? 'body party-monster' : bodyMode;
        const eyesState = this.state.dance ? 'eye crazy' : eyesMode;
        const buttonState = this.state.dance ? 'no-button' : buttonMode;
        const mouthState = this.state.dance ? 'party-mouth' : mouthMode;
        const backgroundState = this.state.dance? 'app dance' : backgroundMode;
        
        
        return(
        <div className={backgroundState}>
                <div className='converter'>
                    <Calculator converterMode={converterMode} goToParty={this.dance}/>
                </div>
                <div className='monster'>
                    <Button
                    buttonMode={buttonState} 
                    clickSleep={this.sleep} 
                    />
                    <Body stateOfEyes={eyesState} stateOfMouth={mouthState} stateOfBody={bodyState} 
                    />
                </div>    
            </div>
        )
    }
}

export default App;