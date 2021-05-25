"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import {withRainbowFrame} from './components/withRainbowFrame';
import DoubleButton from './components/doubleButton';



const COLORS = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
const FramedFragment = withRainbowFrame(COLORS)(DoubleButton);

ReactDOM.render(
    <div>
        <DoubleButton caption1 = {"Однажды"} caption2 = {"пору"}>
            {"в студеную зимнюю пору"}
        </DoubleButton>
        <FramedFragment caption1 = {"Я из лесу"} caption2 = {"мороз"}>
            {"вышел, был сильный"}
        </FramedFragment>
    </div>
    , document.getElementById('container')
);
