import React, { Component } from 'react'
import './BmiStyle.css'

export class BmiCalculator extends Component {
    constructor(){
        super()
        this.state={
            output:"-------"
        }
    }
    //functions
    refresh(){
        document.querySelector('.height').value=""
        document.querySelector('.weight').value=""
        this.setState({
            output:"-------"
        })

    }
    result(){
        const h=parseFloat(document.querySelector('.height').value) /100
        const w=parseFloat(document.querySelector('.weight').value) 
        if(h>0 && w>0){
        try{
        const r=w/(h*h) 
        // stage
        const res=r<15?"Very severely Underweight":
            (r<16?"Severely Underweight":
                (r<18.5?"Underweight":
                    (r<25?"Normal (healthy weight)":
                        (r<30?"Overweight":
                            (r<35?"Moderately obese":
                                (r<40?"Severely Obese":
                                    "Very Severely Obese"
                                        ))))))
        this.setState({
            output:res
        })
    }
    catch(error){
        this.setState({
            output:"Provide Correct Metrics"
        })
    }
}
else{
    window.alert("Please Enter Values")
}
    }

    //render
    render() {
    return (
        <div className='body'>
            <form>
            <h2>Enter Your Details </h2>
            <label>Enter Your Height : </label>
            <input type='number' className='height' required></input><label> cms</label><br/><br/>
            <label>Enter Your Weight : </label>
            <input type='number' className='weight' required></input><label> kgs</label>
            <h1 className="result">{this.state.output}</h1>
            <button type='button' onClick={()=>this.refresh()}>Refresh</button>
            <button type='button' onClick={()=>this.result()}>Result</button>
            </form>
        </div>
    )
    }
}

export default BmiCalculator