import React from 'react';
import {Link} from 'react-scroll';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import config from '../utilities/config';

const AlgorithmInterface = (props) => {

    let renderAlgorithmTiles = (algorithmCategories) => {
        let element,
        colElements,
        algoTitle, 
        algoDescription;

        colElements = algorithmCategories.map((algorithm,index)=>{
            algoTitle = algorithm.name;
            algoDescription = algorithm.description;
            return (
                <div  
                    key={index} 
                    className = 'algo-tile col-md-6 col-lg-4 col-xl-4 col-sm-12 col-12'
                >
                    <div className = 'algo-description-container'>
                        <img src='../../src/images/a0.png'/>
                        <div>
                            <span className = 'algo-title'>{algoTitle}</span>
                            <span className = 'algo-description'>{algoDescription}</span>
                        </div>
                    </div>
                    <div className = 'algo-tile-button-container'>
                        <button type="button" className="btn btn-success" >View Example</button>
                        <button type="button" className="btn btn-primary" >Read More</button>
                    </div>
                </div>
            )
        });
        element = (<div className='row justify-content-around'>{colElements}</div>)
    return element;        
    }

    return (
        <div id="algorithms-container">
            <span>Regression</span>
            <div id ='regression-container' className='container-fluid'>
                    <img src='../../src/images/a0.png'/>
                    <span> Let regression analysis be your crystal ball</span>
                    <Link to='tasks-container' smooth={true} duration={200}>
                        <button type="button" className="btn btn-success" >Find out something else </button>
                    </Link>
            </div>
            <span>Algorithm Options:</span>
            <div className = 'container-fluid'>
            {renderAlgorithmTiles(config.algorithmCategories['Regression'])}
            </div>
        </div>
    )
}

export default AlgorithmInterface;