"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import Frame from './component/frame';

const COLORS = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
    <Frame colors = {COLORS}>Hello!</Frame>
    , document.getElementById('container') 
);
