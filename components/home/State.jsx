"use client"
import React from 'react';



export default function State({id, fill, onMouseEnter, onMouseLeave, children}){

     
    return (
        
        <g className="state" id={id}  style={{fill: fill, color: 'red'}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {...children}
        </g>
        
    );
}