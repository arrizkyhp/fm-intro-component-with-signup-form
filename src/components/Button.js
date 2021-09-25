import React from 'react'

import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
    const className = [props.className];

    if(props.isGreen) className.push("btn-green");

    // link external/internal
    if(props.type === "link") {
        if(props.isExternal) {
            return (
                // eslint-disable-next-line
                <a
                    href={props.href}
                    className={className.join(" ")}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                    {props.children}
                </a>
            )
        } else {
            return (
                <Link
                    to={props.href}
                    className={className.join(" ")}
                >
                    {props.children}
                </Link>
            )
        }
    }

    return (
        <button className={className.join(" ")}>
            {props.children}
        </button>
    )
}


Button.propTypes = {
    className: propTypes.string,
    href: propTypes.string,
    target: propTypes.string,
    isGreen: propTypes.bool,
}