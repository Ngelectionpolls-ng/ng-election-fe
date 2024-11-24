"use client"
import React from 'react';

export default function State({id, fill, displayResult, children}){
    return (
            <g className="state" id={id}  style={{fill: fill, color: 'red'}} onMouseEnter={displayResult}>
                {...children}
            </g>
    );
}