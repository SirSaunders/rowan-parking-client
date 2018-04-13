import React, { PureComponent } from 'react';
import Values from '../../../utils/Values';
import Typography from 'material-ui-next/Typography'

import '../../../css/App.css';
class About extends PureComponent {
    render() {
        return (

            <div className="About">
                <Typography variant="display3"  align="center" gutterBottom>
                   ABOUT
                </Typography>
                <Typography variant="headline" gutterBottom align="inherit">
                    {Values.about.text}
                </Typography>
            </div>
        );
    }
}

export default About;
