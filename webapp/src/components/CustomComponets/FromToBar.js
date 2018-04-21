import React from 'react';
import DatePicker from "material-ui/DatePicker/index";
import TimePicker from "material-ui/TimePicker/index";

export default class ParkingLotCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={date:null,startTime:null,endTime:null}
        this.callbackDate = this.callbackDate.bind(this)
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

    render () {

        return (
            <form onSubmit={this.handleSubmit}>

                {(this.state.width < 650)?
                <div>
                <DatePicker hintText="Date" autoOk="true" floatingLabelText="Date"/>
                    <TimePicker hintText="Start Time" floatingLabelText="Start Time"/>
                    <TimePicker hintText="End Time" floatingLabelText="End time"/>
                    <input type="submit" value="Search" />
                </div>
                :
                <div>
                    <DatePicker hintText="Date" autoOk="true" style={{display : 'inline-block'}} floatingLabelText="Date"
                                onChange={( undefined,  object)=> {
                                    this.setState({date:object})
                                    this.callbackDate()
                                }}
                    />
                    <TimePicker hintText="Start Time" style={{display : 'inline-block'}} floatingLabelText="Start Time"
                                onChange={( undefined,  object)=> {
                                    this.setState({startTime:object})
                                    this.callbackDate()

                                }} />
                    <TimePicker hintText="End Time" style={{display : 'inline-block'}} floatingLabelText="End Time"
                                onChange={( undefined,  object)=> {
                                    this.setState({endTime:object})
                                    this.callbackDate()

                                }}/>
                    <input type="submit" value="Search" style={{display : 'inline-block'}}/>
                </div>
                }

            </form>
        )
    }

    callbackDate() {
        this.prop.timeChane(this.state.date, this.state.startTime, this.state.endTime)
    }
}