
import React, { PureComponent } from 'react';
import { css } from 'glamor';
import logo from '../../utils/logo.svg';




const styles = {

    imgContainer: css({
        width: '100%',
        '@media(min-width: 1224px)': {
            width: '50%',
            display: 'flex ',
            float: 'left',
            padding: '1em',
            margin: '0em 0 0em 0',
        },
        '> img': {
            maxWidth: '100%',
            margin: '0 auto',
            objectFit: 'cover',
        },
        display: 'flex ',
        margin: '0 auto',
    }),

};

class Image extends PureComponent {
    render() {
        return (

                    <div {...styles.imgContainer}>
                        <img src={logo}  />
                    </div>

        );
    }
}

export default Image;
