
import React, { PureComponent } from 'react';
import { css } from 'glamor';
import logo from '../../../utils/confirm.png';




const styles = {

    imgContainer: css({
        width: '50%',
        '@media(min-width: 1224px)': {
            width: '50%%',
            display: 'flex ',
            float: 'center',

        },
        '> img': {
            maxWidth: '30vw',
            maxHeight: '30vw',
            margin: '0 auto',

        },
        display: 'flex ',
        margin: '0 auto',
    }),

};

class Image extends PureComponent {
    render() {
        return (

                    <div  {...styles.imgContainer}>
                        <img src={logo}  />
                    </div>

        );
    }
}

export default Image;
