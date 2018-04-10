import React, { Component } from 'react';
import PosterSlider from './components/PosterSlider';
import './css/index.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <PosterSlider />
            </div>
        );
    }
}

export default App;