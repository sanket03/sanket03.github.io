import React from 'react';
import {Link} from 'react-scroll';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TaskModal = (props) => {
    let {showModal, toggleModal, modalData} = props;
    return (
        <Modal isOpen={showModal} toggle={toggleModal}>
            <img src='../../src/images/cancel.png'onClick={toggleModal}/>
            <span className='task-title'>{modalData.data}</span>
            <div className='task-description'> 
                Forecast the future by estimating the relationship between variables.
            </div>
            <div className='option-title'>JUST SOME OF THE OPTIONS:</div>
            <div className='task-options-container container'>
                <div className='row justify-content-around'>
                    <div className='task-options col-md-12 col-lg-3 col-sm-12 col-xs-12'>
                        <img src='../../src/images/line-chart.png'/>
                        <span>Estimate product demand</span>
                    </div>
                    <div className='task-options col-md-12 col-lg-3 col-sm-12 col-xs-12'>
                        <img src='../../src/images/currency.png'/>
                        <span>Predict sales figures</span>
                    </div>
                    <div className='task-options col-md-12 col-lg-3 col-sm-12 col-xs-12'>
                        <img src='../../src/images/search.png'/>
                        <span>Determine equipment servicing priorities</span>
                    </div>
                </div>
            </div>
            <Link to='algorithms-container' smooth={true} duration={200}>
                <button type="button" className="btn btn-success" onClick={toggleModal}>Explore</button>
            </Link>                   
        </Modal>
    )
}

export default TaskModal;