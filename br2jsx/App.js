"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import Br2 from './component/br2jsx';

const TEXT = "первый<br>второй<br/>третий<br />последний";
ReactDOM.render(<Br2 text = {TEXT}/>, document.getElementById('container'));
