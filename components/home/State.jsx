"use client"
import React from 'react';

export default function State({id, fill, setXY, children}){
    return (
            <g className="state" id={id}  style={{fill: fill, color: 'red'}} onMouseEnter={(e) => setXY(e) }>
                {...children}
            </g>
    );
}