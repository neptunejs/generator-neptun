import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Component} from '../..';

const App = class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Component></Component>
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
