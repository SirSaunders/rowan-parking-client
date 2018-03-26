import React from 'react'

export default class Footer extends React.Component {
    render() {
        const contentStyle = {
            position: "fixed",
            left: "0",
            bottom: "0",
            padding:"5px",
            height: "30px",
            width: "100%",
            backgroundColor:"#3f51b5",
            zIndex:"9999",
            float: "left",
        }
        const copyRightStyle = {

            float:"left"

        }
        const bannerStyle = {

            width: "20%",
            float:"right",
            marginBottom:"10px",
            imageRendering: "-webkit-optimize-contrast"

        }

        return (
            <div id="footer" className="mdl-mega-footer" style={contentStyle} >
                <div className="container">

                    <p style={copyRightStyle} >Parking Guys&copy; 2018.  </p>

                </div>
            </div>
        )
    }
}
