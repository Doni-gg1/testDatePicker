import { useState } from "react"
import React from "react"
import {Calendar, Gregorian} from "react-multi-date-picker"

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: [new Date()]
        }
        this.setValues = this.setValues.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    setValues(today) {
        // let arr =  this.state.today;

        // console.log(today)
        this.setState({
            today
        })
    }
    handlerClick() {
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




    render() {
        return (
            <>
                <input type="text" data-bs-toggle="modal" data-bs-target="#exampleModal"/>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <Calendar
                                calendar={Gregorian}
                                value={this.state.today}
                                onChange={this.setValues} /> 
                                <button onClick={this.handlerClick}>Button</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                



            </>

        )
    }

}

export default Example;