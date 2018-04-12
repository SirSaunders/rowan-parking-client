import React from 'react';
import DatePicker from "material-ui/DatePicker/index";
import TimePicker from "material-ui/TimePicker/index";

export default class ParkingLotCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }

    handleSubmit(event) {
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
                    <DatePicker hintText="Date" autoOk="true" style={{display : 'inline-block'}} floatingLabelText="Date" />
                    <TimePicker hintText="Start Time" style={{display : 'inline-block'}} floatingLabelText="Start Time" />
                    <TimePicker hintText="End Time" style={{display : 'inline-block'}} floatingLabelText="End Time" />
                    <input type="submit" value="Search" style={{display : 'inline-block'}}/>
                </div>
                }

            </form>
        )
    }
}