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
            isOpen: !this.state.isOpen,
            showList: false
        });
    }

    showList() {
        if(window.innerWidth <= 900) {
            this.setState({
                showList: !this.state.showList
            });
        }
    }

    render() {
        return (
            <div id = 'header' className = 'container-fluid'>
                <a href = 'https://maqsoftware.com/'>
                    <img src = '../../src/images/MAQlogo.png'/>
                </a>
                <button className = 'btn' onClick = {this.toggle}>
                    <i className = "fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul id = 'navigation' className = {this.state.isOpen ? 'show' : 'hide'}>
                    <li>
                        <a href = 'https://maqsoftware.com/'>Home</a>
                    </li>
                    <li><a>FAQs</a></li>
                    <li id = 'expertise' onClick = {this.showList}>
                        <a>Expertise</a>
                        <ul id = 'expertise-list' className = {this.state.showList ? 'show' : 'hide'}>
                            <li>
                                <a href = 'https://maqsoftware.com/expertise/datamanagement'>Data Management</a>
                            </li>
                            <li>
                                <a href = 'https://maqsoftware.com/expertise/artificialintelligence'>Artificial Intelligence</a>
                            </li>
                            <li>
                                <a href = 'https://maqsoftware.com/expertise/powerbi'>Power BI</a>
                            </li>
                            <li>
                                <a href = 'https://maqsoftware.com/expertise/appdevelopment'>App Development</a>
                            </li>
                            <li>
                                <a hnref = 'https://maqsoftware.com/expertise/cloudtransformation'>Cloud Transformation</a>
                            </li>
                            <li>
                                <a href = 'https://maqsoftware.com/expertise/collaborationcontent'>Collaboration and Content</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <ScrollLink to = 'contact-container' smooth = {true} duration={3000} delay = {200}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        )
    }
}