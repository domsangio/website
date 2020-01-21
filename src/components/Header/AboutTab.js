import React from 'react'
import './AboutTab.css'

export const AboutTab = (props) => {
    return (
        <div className = {`text${props.isSelected === true ? " selected" : " unselected"}`} >
            { props.title }
        </div>
    )
}