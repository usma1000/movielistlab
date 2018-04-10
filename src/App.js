import React, { Component } from 'react';
import base from './base';
import PosterSlider from './components/PosterSlider';
import './css/index.css';


class App extends Component {
    state = {
        list: [],
    }

    componentDidMount() {
        this.ref = base.syncState("list", {
            context: this,
            state: "list",
            options: { asArray: true }
        });
    }

    render() {
        return (
            <div className="App">
                <PosterSlider movies={this.state.list} />
            </div>
        );
    }
}

export default App;