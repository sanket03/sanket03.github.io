import React from 'react';
import TaskInterface from '../components/taskInterface.jsx'
import TaskModal from '../components/taskModal.jsx';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            showModal: false
        }
        this.modalObject = {};
        this.toggleModal = this.toggleModal.bind(this);
        this.setModalObject= this.setModalObject.bind(this);

    }

    // Toggle state for modal
    toggleModal(modalData) {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
        !this.state.showModal && this.setModalObject(modalData);
    }

    // Set model data object
    setModalObject(modalData) {
        this.modalObject = modalData;
    }

    render(){
        return (
            <div>
                <TaskInterface toggleModal = {this.toggleModal}/>
                <TaskModal toggleModal = {this.toggleModal} 
                           showModal = {this.state.showModal}
                           modalData = {this.modalObject}
                />
            </div>
        )
    }
}