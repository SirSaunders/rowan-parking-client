import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {

    state = {
        open: true,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});

    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.onCancel}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.onSubmit}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Confirmation"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.props.onCancel}
                >
                  Ready to confirm your reservation for {this.props.lotSelected}?
                </Dialog>
            </div>
        );
    }
}