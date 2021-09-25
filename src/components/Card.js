import React from 'react'

export default function Card(props) {
    const className = [props.className];
    if(props.isPurple) className.push("card--info")
    if(props.isWhite) className.push("card--form")

    return (
        <div className={`card${className.join(" ")}`}>
            {props.children}
        </div>
    )
}
