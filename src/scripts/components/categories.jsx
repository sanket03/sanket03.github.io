import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-router-dom';

import config from '../utilities/config';

let Categories = (props) => {
    let {
        attributes,
        index,
        isCaseStudy,
        taskTitle
    } = props,
    {
        title,
        content,
        imageUrl
    } = attributes;

    return (
            <div className = 'col-12 col-md-4 col-lg-4 col-xl-4 carousel-slides'>
                    <img src = {imageUrl}/>
                    <div className = 'task-title'>{title}</div>
                    <div className = 'task-content'>{content}</div>
                    {
                        !isCaseStudy ? 
                                        (
                                            <ScrollLink to={title.toLowerCase()} smooth={true} duration={200}>
                                                <button className = 'btn'>KNOW MORE</button>
                                            </ScrollLink>
                                        ) 
                                    : 
                                        (                                          
                                            <Link to = {`/${taskTitle}?${title}`}>
                                                <button className = 'btn'>KNOW MORE</button>
                                            </Link>                                         
                                        )
                    }
                </div>
    )
}

export default Categories;