"use strict"

import React from 'react';
import propTypes from 'prop-types';

import './doubleButton.css';

class DoubleButton extends React.Component {
    static propTypes = {
        caption1: propTypes.string.isRequired,
        caption2: propTypes.string.isRequired,
    }

    buttonPressed = (e) => {
        alert(e.target.value);
    }

    render() {
        return (
            <div>
                <input type = "button" value = {this.props.caption1} onClick = {this.buttonPressed}/>
                {this.props.children}
                <input type = "button" value = {this.props.caption2} onClick = {this.buttonPressed}/>
            </div>
        )
    }
}

export default DoubleButton;