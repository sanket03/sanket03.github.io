import React from 'react';
import Home from './home.jsx';
import Categories from './categories.jsx';
import Pages from '../containers/pages.jsx';
import Contact from './contact.jsx';

import config from '../utilities/config';

let App = ()=>{
    let renderPages = () => {
        let element = config.Pages.map((page, index) => {
            return <Pages attributes = {page} index = {index}/>
        });
    return element;
    }

    let renderCategories = () => {
        let element = config.taskCategories.map((task, index) => {
            return <Categories attributes = {task} index = {index} isCaseStudy = {false}/>
        })
        return (
            <div id = 'categories-container'>
                <div className = 'row justify-content-around'>
                    {element}
                </div>
            </div>
        )
    }

    return (
        <div id='app-container'>
            <Home/>
            {renderCategories()}
            {renderPages()}
            <Contact/>
        </div>
    );
} 

export default App;