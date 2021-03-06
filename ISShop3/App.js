"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import ISShop from './components/shop';

const SECTION = "Parfum";
const ITEMS = require("./itemList.json");

ReactDOM.render(
    <ISShop 
      section = {SECTION}
      items = {ITEMS}
    />
    , document.getElementById('container') 
  );
