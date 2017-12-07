import React from 'react';
import {Link} from 'react-scroll';

let Home = () => {
    return (
        <div id = 'home-container'>
                <div id = 'home-content'>
                    <div>Artificial Intelligence</div>
                    <div>How can we help you?</div>
                    <Link to = 'categories-container' smooth={true} duration={100}>
                        <button className = 'btn'>KNOW MORE</button>
                    </Link>
                </div>
                <div className = 'image'>
                    <img src = '../../images/home.png'/>
                </div>          
        </div>
    )
}

export default Home;