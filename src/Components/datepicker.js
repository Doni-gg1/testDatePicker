import { useState } from "react"
import React from "react"
import DatePicker from "react-multi-date-picker"

class Example extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            today: [new Date()]
        }
        this.setValues = this.setValues.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    setValues(today){
        // let arr =  this.state.today;

        // console.log(today)
        this.setState({
            today
        })
    }
    handlerClick(){
        console.log(this.state.today);
        let arr = []
        this.state.today.forEach(item => {
            let date = `${item.year}/${item.month}/${item.day}`;
            
            arr.push(date);
            
        });
        console.log(arr);
    }
   
    // const tomorrow = new Date()

    // tomorrow.setDate(tomorrow.getDate() + 1)

    // const [values, setValues] = useState([today]);
    // // function showDate() {
        
    


   render(){
      return (
        <>
           <DatePicker
            multiple
            value={this.state.today}
            onChange={this.setValues}
        /> 
        <button onClick={this.handlerClick}>Button</button>
        
        </>
        
    ) 
   } 
    
}

export default Example;