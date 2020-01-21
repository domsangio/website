import React from 'react'
import Image from '../../pano.jpg'

export const LoonImage = (props) => {
    return (
        <div style = {{maxWidth: "100%", maxHeight: "100%" }}>
            <img src={Image} width='100%' height='450px' />
        </div>
    )
}