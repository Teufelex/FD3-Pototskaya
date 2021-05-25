"use strict"

import React from 'react';
import './frame.css';

let withRainbowFrame = colors => Comp => props => {
   let frame = null;
   colors.forEach(b => {
       frame = 
       <div style = {{border:"solid 5px "+ b, padding:"10px"}}>
           {frame || <Comp {...props}/>}
       </div>;
   });

   return frame;
};

export {withRainbowFrame};