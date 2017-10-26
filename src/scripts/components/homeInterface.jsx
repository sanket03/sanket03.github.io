import React from 'react';
import {Link} from 'react-scroll';

const HomeInterface = () => {

    return(
        <div id='home-container' className='container'>
            <div className='row justify-content-around'>
                <div id = 'left-box' className='col-md-4 col-sm-4 col-lg-4'>
                    <div className = 'child'>
                        <span>DIG DEEP WITH </span>
                        <span>AZURE</span>
                        <span>MACHINE</span>
                        <span>LEARNING</span>
                    </div>
                </div>
                <div id = 'right-box' className='col-md-5 col-sm-5 col-lg-5'>
                    <img src='../src/images/aml-logo.png'/>
                    <span className = 'link'>Use data analysis to take your business to a whole new level.</span> 
                    <span>Microsoft Azure Machine Learning simplifies data analysis and empowers you to find the answers your business needs.</span>
                    <span>The question isn’t whether you can find the answers.</span>
                    <span><b>The question is how.</b></span>
                </div>
            </div>
            <div id='scroll-down'>
                <Link to='tasks-container' smooth={true} duration={200}>
                    <img src='../../src/images/down-arrow.png'/>
                </Link>
            </div>
        </div>
    )
};

export default HomeInterface;
