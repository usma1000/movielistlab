import React from 'react';
import Slider from 'react-slick';
import Poster from './Poster';

const PosterSlider = (props) => {
    const settings = {
        infinite: false,
        slidesToShow: 3,
        centerMode: true,
    }
    return (
        <Slider {...settings}>
            {props.movies.map((m,i) => <Poster key={i} src={m.Poster} />)}
        </Slider>
    );
}

export default PosterSlider;