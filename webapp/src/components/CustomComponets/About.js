

import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Values from '../../utils/Values';
import logo from '../../utils/logo.svg';




const styles = {
    container: css({
        alignSelf: 'flex-end',
        background: Values.colors.white,
        width: '100%',
        height: '100%',
        display: 'flex',
        '@media(max-width: 1224px)': {
            alignSelf: 'auto',
        },
    }),
    imgContainer: css({
        width: '100%',
        '@media(min-width: 1224px)': {
            width: '50%',
            display: 'flex ',
            float: 'left',
            padding: '1em',
            margin: '3em 0 3em 0',
            border: '1px solid lightgray',
        },
        '> img': {
            maxWidth: '100%',
            margin: '0 auto',
            objectFit: 'cover',
        },
        display: 'flex ',
        margin: '0 auto',
    }),
    textContainer: css({
        display: 'flex',
        '@media(min-width:1224px)': {
            padding: '5em 3em',
            display: 'flex',
            lineHeight: 2,
            textAlign: 'left',
        },
    }),
};

class About extends PureComponent {
    render() {
        return (
            <div {...styles.container}>
                <h1 title="About">
                    <h3>
                        Rowan Parking Booking System
                    </h3>
                    <div />
                    <div {...styles.imgContainer}>
                        <img src={logo}  />
                    </div>
                    <p >{Values.about.text}</p>
                </h1>
            </div>
        );
    }
}

export default About;
