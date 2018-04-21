import React from 'react';
import DatePicker from "material-ui/DatePicker/index";
import TimePicker from "material-ui/TimePicker/index";

export default class ParkingLotCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth,date:null,startTime:null,endTime:null };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={date:null,startTime:null,endTime:null}
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

    handleSubmit(event) {
        console.log(event);
        alert('submitted');
        event.preventDefault();
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
            <form onSubmit={this.handleSubmit}>


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
                    <input type="submit" value="Search" style={{display : 'inline-block'}}/>
                </div>


            </form>
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