/**
 * Created by johnathansaunders on 3/22/18.
 */
import React from 'react'
import FlatButton from 'material-ui/FlatButton';


export default class NavBarBtns extends React.Component {
    constructor(props) {
        super(props);
    }



    render () {
        return (
            <div>
                {( this.props.menuItems != null &&  this.props.menuItems.length > 0)?
                    this.props.menuItems.map((item, index) => (
                    <FlatButton  onClick={() => window.location.assign(item.path)} label={item.title} style={{color:"white"}} secondary={true} />
                    )) : 'null'
                }
            </div>
        )
    }
}
