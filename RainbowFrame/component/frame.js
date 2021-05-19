"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import './frame.css'

class RainbowFrame extends React.Component {
    render() {
        let frames = null;
        this.props.colors.forEach(b => {
            frames = 
            <div style = {{border:"solid 5px "+ b, padding:"10px"}}>
                {frames || this.props.children}
            </div>;
        });

        return frames;
    }
}

export default RainbowFrame;