"use strict"

import React from 'react';
import PropTypes from 'prop-types';

import './br2.css'
class Br2 extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    render() {
        let textArr = this.props.text.replace(/\s|\//g, "").split("<br>");
        let newArr = [];
        let key = 1;
        textArr.forEach(b => {
            newArr.push(b);
            newArr.push(<br key = {key++}/>);
        });
        
        return <div>{newArr}</div>;
    }
}

export default Br2;