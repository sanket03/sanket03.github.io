import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

export default class Header extends React.Component {

    render() {
        return (
            <div id = 'header'>
                <img src = '../../src/images/MAQlogo.png'/>
                <div id = 'navigation'>
                    <Link to = '/'><span>Home</span></Link>
                    <span>FAQs</span>
                    <span>Expertise</span>
                    <ScrollLink to = 'contact-container' smooth={true} duration={200}>
                        <span>Contact</span>
                    </ScrollLink>
                </div>
            </div>
        )
    }
}