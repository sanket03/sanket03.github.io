import React from 'react';
import HomeInterface from '../components/homeInterface.jsx';
import Task from '../containers/task.jsx';
import AlgorithmInterface from '../components/algorithmInterface.jsx' 
import {Element} from 'react-scroll';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomeInterface/>
                <Task/>
                <AlgorithmInterface/>
            </div>
        );
    }
}