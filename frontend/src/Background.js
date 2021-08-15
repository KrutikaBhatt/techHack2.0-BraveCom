import React, { Component } from 'react';
import "./Background.css";
export default function Background(){
    return(
        
        <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="wave1">
            <use xmlnsXlink="#wave-path" x="50" y="3" fill="rgb(196, 144, 228, .1)"/>
          </g>
          <g class="wave2">
            <use xmlnsXlink="#wave-path" x="50" y="0" fill="rgb(81, 45, 109, .7)"/>
          </g>
          <g class="wave3">
            <use xmlnsXlink="#wave-path" x="50" y="9" fill="#F9F9F9"/>
          </g>
        </svg>
    )
}