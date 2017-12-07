import React from 'react';
import {Link} from 'react-scroll';

import config from '../utilities/config';

export default class CaseStudy extends React.Component {
    constructor(props) {
        super(props);

        this.taskCategory = this.props.match.params.casestudy;
        this.casestudyName = props.location.search.replace('?','');
        this.casestudyDetails = {};

        this.getCaseStudyDetails = this.getCaseStudyDetails.bind(this);
    }

    componentWillMount() {
        this.getCaseStudyDetails();
    }

    getCaseStudyDetails() {
        let page = config.Pages.find((page, index) => {
            return page.title === this.taskCategory;
        })

        let casestudyDetails = page.caseStudies.find((casestudy, index)=> {
            return casestudy.title === this.casestudyName;
        })
        
        this.casestudyDetails = {
            ...casestudyDetails.data
        }
        console.log(this.casestudyDetails);
    }

    renderContent(content) {
        let element = content.map((content, index)=>{
            return (
                <div key = {index}>{content}</div>
            )
        })
        return element;

    }

    render() {
        let {
                heading,
                desc,
                summary,
                scenario,
                challenge,
                solution,
                benefits
            } = this.casestudyDetails;
        return (
                <div id = 'casestudy-container'>
                    <div id = 'casestudy-home'>
                        <div id = 'casestudy-home-content'>
                            <div id = 'casestudy-title'>{heading}</div>
                            <div id = 'casestudy-desc'>{this.renderContent(desc)}</div>
                            <div id = 'casestudy-summary'>{this.renderContent(summary)}</div>
                            <Link to = 'casestudy-scene' smooth={true} duration={100}>
                                <button className = 'btn'>KNOW MORE</button>
                            </Link>
                        </div>
                        <div id = 'casestudy-home-image'>
                            <img src = '../../images/home.png'/>
                        </div>
                    </div>
                    <div id = 'casestudy-scene'>
                        <div id = 'casestudy-scene-content'>
                            <div id = 'casestudy-scenario'>
                                <div className = 'title'>Scenario</div>
                                <div className = 'description'>{this.renderContent(scenario)}</div>
                            </div>
                            <div id = 'casestudy-challenge'>
                                <div className = 'title'>Challenge</div>
                                <div className = 'description'>{this.renderContent(challenge)}</div>
                            </div>
                        </div>
                        <div id = 'casestudy-scene-image'>
                            <img src = '../../images/home.png'/>
                        </div>
                    </div>
                    <div id = 'casestudy-otherdetails'>
                        <div>
                            <div className = 'title'>Solution</div>
                            <div className = 'description'>{this.renderContent(solution)}</div>
                        </div>
                        <div>
                            <div className = 'title'>Benefits</div>
                            <div className = 'description'>{this.renderContent(benefits)}</div>
                        </div>
                        </div>
                    </div>
            )
    }
}
