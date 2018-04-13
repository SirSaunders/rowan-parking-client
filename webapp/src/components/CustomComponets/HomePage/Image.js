
import React, { PureComponent } from 'react';
import { css } from 'glamor';
import logo from '../../../utils/logo.svg';




const styles = {

    imgContainer: css({
        width: '100%',
        '@media(min-width: 1224px)': {
            width: '100%',
            display: 'flex ',
            float: 'center',

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

                    <div  {...styles.imgContainer}>
                        <img class="framed" src={logo}  />
                    </div>

        );
    }
}

export default Image;
