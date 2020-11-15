import React from 'react';
import './converter.scss';

const currencyName = {
    UAH: 'Ukrainian Hryvnia',
    SEK: 'Swedish Krona'
};

function toHryvnia(krona){
    return krona * 3.27;
}

function toKrona(hryvnia){
    return hryvnia / 3.27;
}


function tryConvert(amount, convert){
    const input = parseFloat(amount);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 100)/100;
    return rounded.toString();
}

class EnoughForProsecco extends React.Component{
    
    render(){
        if(this.props.krona > 99.99){
            return (
                <div>
                    <p className='goodNews'>It is enough!!! Welcome to...</p> 
                    <span className='party' onClick={this.props.goToParty}> ▶︎ ▷ ☆ PARTY ✩ ◁ ◀︎</span>
                </div>
                
            )
        }
        return(<p className='sadNews'>It is not enough to party, use your other card </p>) 
    }
    
}

class AmountInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onAmountChange(e.target.value);
    }
    render(){
        const amount = this.props.amount;
        const currency = this.props.currency;
        return (
            <fieldset>
                <legend className='converter-legend'>Please, enter amount in {currencyName[currency]}:</legend>
                <input className='converter-input' value = {amount} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {amount: '', currency: 'UAH'};
        this.handleToHryvnia = this.handleToHryvnia.bind(this);
        this.handleToKrona = this.handleToKrona.bind(this);
    }
    handleToKrona(amount){
        this.setState({currency: 'SEK', amount});
    }

    handleToHryvnia(amount){
        this.setState({currency: 'UAH', amount});
    }

    render(){
        const currency = this.state.currency;
        const amount = this.state.amount;
        const krona = currency === 'UAH' ? tryConvert(amount, toKrona) : amount;
        const hryvnia = currency === 'SEK' ? tryConvert(amount, toHryvnia) : amount;

        return(
            <div className={this.props.converterMode}>
                <h1 className='converter-title'>UAH/SEK Converter</h1>
                <div className='converter-content'>
                    <AmountInput amount={hryvnia} currency = 'UAH' onAmountChange = {this.handleToHryvnia}/>
                    <AmountInput amount={krona} currency = 'SEK' onAmountChange = {this.handleToKrona}/>
                    <EnoughForProsecco krona = {(parseFloat(krona))} goToParty={this.props.goToParty}/>
                </div>
            </div>
            
        )
    }

}

export default Calculator;


