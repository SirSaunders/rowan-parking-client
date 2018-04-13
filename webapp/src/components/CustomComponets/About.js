

import React, { PureComponent } from 'react';
import Values from '../../utils/Values';
import Typography from 'material-ui-next/Typography';

class About extends PureComponent {
    render() {
        return (

            <div>
                <Typography variant="display4" align="center" gutterBottom>
                   About
                </Typography>
                <Typography variant="headline" gutterBottom align="center">
                    {Values.about.text}
                </Typography>
            </div>
        );
    }
}

export default About;
