"use client"
import React from 'react';



export default function State({id, fill, onMouseOver, onMouseLeave, children}){
     
    return (
        
        <g className="state" id={id}  style={{fill: fill, color: 'red'}} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {...children}
        </g>
        
    );
}