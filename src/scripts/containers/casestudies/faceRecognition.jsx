import React from 'react';
import {Link} from 'react-scroll';

export default class FaceRecognition extends React.Component {
    constructor(props) {
        super(props);
        this.casestudyDetails = {
            'title': `Using AI with Video Analysis to Determine Real-Time Audience Emotions from Facial Expressions`,
            'summary': `Emotion Analyzer uses Microsoft Cognitive Services to collect audience feedback in real time without the need for cumbersome surveys.`,  
            'scenario': [
                `Audience feedback is a key factor in evaluating the effectiveness of a conference, summit, or meeting. Capturing consistent, high-quality feedback from audience members, however, is a challenge. Long-used tools such as surveys fail to accurately gauge the actual emotion of audience members. Surveys suffer from low response rates, delayed responses, and participant bias.`,
                `Cameras and AI have been used in the past to recognize objects. The analysis was unable, however, to present any data about the object beyond a physical description. MAQ Software developed Emotion Analyzer to take object recognition a step further.`,
                `We worked with our development team, observing a company-wide meeting, to demonstrate use of our Emotion Analyzer to measure audience feedback from 300 attendees.`,
            ],
            'challenges': [
                `Identify individual faces from a crowd of attendees captured in video footage.`,
                `Detect emotions on faces by analyzing facial expressions.`,
                `Translate emotion data to real-time graph to gauge overall attendee sentiment.`,
                'Maintain privacy of individuals while collecting and analyzing video footage.'
            ],
            'keyHighlights': [
                `Used Microsoft’s Cognitive Face API to identify sentiment person by person.`,
                `Used Microsoft’s Emotion API to match facial patterns to emotions.`,
                `Extracted emotion data using Microsoft’s Vision API.`
            ],
            'outcome': [
                `Using Emotion Analyzer, we were able to observe emotional trends, such as periods when the audience happiness quotient increased. These trends allowed us to return to our presentation and cross-reference moments, pinpointing the precise topics that made our participants happy or sad.`,
                `The ability to capture and record audience sentiment allows businesses to gather unbiased feedback. With Microsoft Cognitive APIs, there is no longer a need to rely on the accuracy of cumbersome surveys.`
            ],
            'outcomeHightlights': [
                `Gathered real-time feedback from facial expressions during large meetings.`,
                `Used expression analysis to reduce the need for surveys, resulting in significant cost and time savings.`,
                `Enabled rapid tailoring of presentations to suit audience interests and needs`
            ]
        }
        };
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    renderContent(content, start, end) {
        let element = content.splice(start, end).map((content, index)=>{
            return (
                <div key = {index}>{content}</div>
            )
        })
        return element;
    }


    renderList(content) {
        let element = content.map((content, index)=>{
            return (
                <li key = {index}>{content}</li>
            )
        })
        return element;
    }

    render() {
        let {
            title,
            summary,
            scenario,
            challenges,
            solution,
            keyHighlights,
            outcome,
            outcomeHightlights
            } = this.casestudyDetails;

        return (
                <div id = 'casestudy-container'>
                    <div id = 'casestudy-home'>
                        <div id = 'casestudy-home-content'>
                            <div id = 'casestudy-title'>
                                {title}
                            </div>
                            <div id = 'casestudy-summary'>
                                {summary}
                            </div>
                            <Link to = 'casestudy-scenario' smooth={true} duration={200}>
                                <button className = 'btn'>KNOW MORE</button>
                            </Link>
                        </div>
                        <div id = 'casestudy-home-image'>
                            <img src = '../../src/images/blog.png'/>
                        </div>
                    </div>

                    <div id = 'case-study-description-container'>
                        <div id = 'casestudy-scenario' className = 'image-desc-box'>
                            <div id = 'casestudy-scene-content-1' className = 'casestudy-content-1'>
                                <div className = 'title'>Business Case</div>
                                <div className = 'description'>{this.renderContent([...scenario],0,2)}</div>
                            </div>
                            <div id = 'casestudy-scene-content-2' className = 'casestudy-content-2'>
                                <div className = 'description'>{this.renderContent([...scenario],2,scenario.length)}</div>
                            </div>
                            <div id = 'casestudy-scene-image'  className = 'casestudy-box-image'>
                                <img src = '../../src/images/blog.png'/>
                            </div>
                        </div>

                        <div id = 'casestudy-challenges' className = 'casestudy-details'>
                            <div className = 'title'>Key Challenges</div>
                            <ul className = 'description'>{this.renderList(challenges)}</ul>
                        </div>

                        <div id = 'casestudy-outcome' className = 'casestudy-details'>
                            <div className = 'title'>Solution</div>
                            <div className = 'description'>
                                <div>
                                    Our custom-built Emotion Analyzer can extract data from live video footage, recorded video, or static images. From the extracted data, the software recognizes faces and analyzes emotions conveyed through facial expressions. Emotion Analyzer then outputs the observed sentiment data graphically.
                                </div>
                                <div className = 'casestudy-full-width-image'>
                                    <img src = '../../src/images/casestudy/emotion-body-1.png'/>
                                </div>
                                <div>
                                    To analyze the audience sentiment, we started by breaking the video input into frames which we gave as input to the API. The data returned from the API was captured and stored in a SQL server for deeper analysis.
                                </div>
                                <div className = 'casestudy-full-width-image'>
                                    <img src = '../../src/images/casestudy/emotion-body-2.png'/>
                                </div>
                                <div>
                                    Next, the software analyzed the observed audience feedback and plotted a distribution of various emotions including anger, contempt, disgust, fear, happiness, neutral, sadness, and surprise. These emotions are understood to be communicated cross-culturally through facial expressions and are difficult to hide or fake.
                                </div>
                                <div className = 'casestudy-full-width-image'>
                                    <img src = '../../src/images/casestudy/emotion-body-3.png'/>
                                </div>
                                <div>
                                    To protect the privacy of audience members, Emotion Analyzer does not match faces to individuals or store facial recognition data
                                </div>
                            </div>
                        </div>

                        <div id = 'casestudy-key-highlights' className = 'casestudy-details'>
                            <div className = 'title'>Key Highlights</div>
                            <ul className = 'description'>{this.renderList(keyHighlights)}</ul>
                        </div>

                        <div id = 'casestudy-outcome' className = 'casestudy-details'>
                            <div className = 'title'>Business Outcome</div>
                            <div className = 'description'>{this.renderContent([...outcome],0,outcome.length)}</div>
                        </div>

                        <div id = 'casestudy-outcome-highlights' className = 'casestudy-details'>
                            <div className = 'title'>Outcome Highlights</div>
                            <ul className = 'description'>{this.renderList(outcomeHightlights)}</ul>
                        </div>
                    </div>
                </div>
            )
    }
}