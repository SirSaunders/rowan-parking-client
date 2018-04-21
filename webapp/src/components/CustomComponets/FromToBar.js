import React from 'react';
import DatePicker from "material-ui/DatePicker/index";
import TimePicker from "material-ui/TimePicker/index";

export default class ParkingLotCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth,date:this.start(),startTime:this.start(),endTime:this.end() };
        this.callbackDate = this.callbackDate.bind(this)
        this.end = this.end.bind(this)
        this.start = this.start.bind(this)

    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }


    start() {
        var start= new Date()
        start.setTime(this.props.startTimeDefualt)
        return start
    }

    end() {
        var end= new Date()
        end.setTime(this.props.endTimeDefualt)
        return end
    }
    render () {

        return (


                <div>
                    <DatePicker hintText="Date" autoOk="true" style={{display : 'inline-block'}} floatingLabelText="Date"
                                onChange={( undefined,  object)=> {
                                    this.callbackDate({date:object})
                                }}
                                defaultDate={this.start()}
                    />
                    <TimePicker hintText="Start Time" style={{display : 'inline-block'}} floatingLabelText="Start Time"
                                onChange={( undefined,  object)=> {
                                    this.callbackDate({startTime:object})

                                }}
                                defaultTime={this.start()}

                    />
                    <TimePicker hintText="End Time" style={{display : 'inline-block'}} floatingLabelText="End Time"
                                onChange={( undefined,  object)=> {
                                    this.callbackDate({endTime:object})

                                }}
                                defaultTime={this.end()}
                    />
                </div>

        )
    }

    callbackDate(changeTime) {
        this.setState(changeTime)
        window.setTimeout(
            function() {
                console.log(this.state.date + this.state.startTime + this.state.endTime)
                if (this.state.date != null && this.state.startTime != null && this.state.endTime != null) {
                    this.props.timeChange(this.state.date, this.state.startTime, this.state.endTime)
                }
            }.bind(this),250) //hacky fix fro setting state delay
    }
}