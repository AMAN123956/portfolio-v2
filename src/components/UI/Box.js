import React from 'react'

function Box(props) {
    const classes = "heading-box"
    return (
        <div className="heading-box">
            <h2 className="heading-1">{props.headingText}</h2>
            {props.children}
        </div>
    )
}

export default Box
