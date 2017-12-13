import React from 'react'
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.showList = this.showList.bind(this);
        this.state = {
            isOpen: false,
            showList: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    showList() {
        if(window.innerWidth <= 768) {
            this.setState({
                showList: !this.state.showList
            });
        }
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
                    <li id = 'expertise' onClick = {this.showList}>
                        <a>Expertise</a>
                        <ul id = 'expertise-list' className = {this.state.showList ? 'show' : 'hide'}>
                            <li><a>Data Management</a></li>
                            <li><a>Artificial Intelligence</a></li>
                            <li><a>Power BI</a></li>
                            <li><a>App Development</a></li>
                            <li><a>Cloud Transformation</a></li>
                            <li><a>Collaboration and Content</a></li>
                        </ul>
                    </li>

                    <li>
                        <ScrollLink to = 'contact-container' smooth={true} duration={2000} delay = {200}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        )
    }
}