import React from 'react'
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div id = 'header' className = 'container-fluid'>
                <img src = '../../src/images/MAQlogo.png'/>
                <button className = 'btn' onClick = {this.toggle}>
                    <i className = "fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul id = 'navigation' className = {this.state.isOpen ? 'show' : 'hide'}>
                    <li><Link to = '/'>Home</Link></li>
                    <li>FAQs</li>
                    <li>Expertise</li>
                    <li>
                        <ScrollLink to = 'contact-container' smooth={true} duration={200}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        )
    }
}