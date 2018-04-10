import React, { Component } from 'react';

const containerStyle = {
    overflow: 'hidden',
    'text-align': 'center',
    'border-radius': '5px',
}

const imgStyle = {
    width: '250px'
}

const Poster = (props) => {
    return (
        <div style={containerStyle}>
            <img style={imgStyle} src={props.src} alt="poster" />
        </div>
    );
}

export default Poster;