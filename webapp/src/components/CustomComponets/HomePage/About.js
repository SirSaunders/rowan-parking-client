import React, { PureComponent } from 'react';
import Values from '../../../utils/Values';
import Typography from 'material-ui-next/Typography'

import '../../../css/App.css';
class About extends PureComponent {
    render() {
        return (

            <div className="About">
                <Typography variant="display2"  align="center" gutterBottom>
                   ABOUT
                </Typography>
                <div className= "Col">
                <Typography variant="paragraph" gutterBottom align="inherit">
                    {Values.about.text}
                </Typography>
                </div>
            </div>
        );
    }
}

export default About;
