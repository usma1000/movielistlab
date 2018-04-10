import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Poster from './Poster';

const PosterSlider = (props) => {
    return (
        <Carousel renderBottomCenterControls={false} renderCenterLeftControls={false} renderCenterRightControls={false} cellAlign="center" slideWidth="300px">
            <Poster src="http://placehold.it/1000x400/ffffff/c0392b/&text=poster 1" />
            <Poster src="http://placehold.it/1000x400/ffffff/c0392b/&text=poster 2" />
            <Poster src="http://placehold.it/1000x400/ffffff/c0392b/&text=poster 3" />
            <Poster src="http://placehold.it/1000x400/ffffff/c0392b/&text=poster 4" />
            <Poster src="http://placehold.it/1000x400/ffffff/c0392b/&text=poster 5" />
            <Poster src="http://placehold.it/1000x400/ffffff/c0392b/&text=poster 6" />
        </Carousel>
    );
}

export default PosterSlider;