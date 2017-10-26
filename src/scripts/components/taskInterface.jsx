import React from 'react';
import config from '../utilities/config';

const TaskInterface = (props) => {

    let renderTaskCategories = ({taskCategories}) => {
        let element,
            colElements,
            taskTitles = Object.keys(taskCategories);
            colElements = taskTitles.map((task)=>{
                return (
                    <div id = {task} 
                        key={task} 
                        className = 'task-tile col-md-6 col-lg-5 col-sm-12 col-xs-12'
                    >
                        <div className='image-container' 
                             style = {{backgroundImage: `url(${taskCategories[task].bgImage})`}}>
                        </div>
                        <div className = 'ml-task'>
                            {task}
                        </div>
                        <span className = 'link'
                              onClick = {props.toggleModal.bind(null,taskCategories[task])}
                        >
                            Learn More 
                        </span>
                    </div>
                )
            });
            element = (<div className='row justify-content-around'>{colElements}</div>)
        return element;
    }

    return(
        <div id="tasks-container">
            <div id='search-bar'>
                <span>So, What do you want to find out?</span>
                <div id='task-inputbox'>
                    <input placeholder='I want to'/>
                    <img src='../../src/images/right-arrow.png'/>
                </div>
            </div>
            <div className = 'container-fluid'>
                {renderTaskCategories(config)}
            </div>
        </div>

    )
};

export default TaskInterface;
