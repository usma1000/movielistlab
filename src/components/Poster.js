import React from 'react';

const containerStyle = {
    overflow: 'hidden',
    'margin': '48px auto',
    'width': '300px',
    'border-radius': '6px',
}

const imgStyle = {
    width: '300px'
}

const Poster = (props) => {
    return (
        <div style={containerStyle}>
            <img style={imgStyle} src={props.src} alt="poster" />
        </div>
    );
}

export default Poster;