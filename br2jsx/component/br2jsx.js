"use strict"

import React from 'react';
import PropTypes from 'prop-types';

import './br2.css'
class Br2 extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    render() {
        let textArr = this.props.text.split(/<br\s*\/?>/);
        let newArr = [];
        textArr.forEach((b, i) => {
            if (i) newArr.push(<br key = {i}/>);
            newArr.push(b);
        });
        
        return <div>{newArr}</div>;
    }
}

export default Br2;