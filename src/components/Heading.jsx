import React from 'react';
import css from './Heading.module.css';
import PropTypes from 'prop-types'

export default function Heading({ className, text }){
    return (
        <h1 className={className + " " + css.background}>{text}</h1>
    )
}

Heading.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}