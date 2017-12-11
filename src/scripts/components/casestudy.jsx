import React from 'react';
import {Link} from 'react-scroll';

import config from '../utilities/config';
import CustomerFeedBackPatterns from '../containers/casestudies/customerFeedbackPatterns.jsx';
import FaceRecognition from '../containers/casestudies/faceRecognition.jsx';

let CaseStudy = (props) => {
    
    let taskCategory, casestudyName;
    taskCategory = props.match.params.casestudy;
    casestudyName = props.location.search.replace('?','');

    // Render casestudy page as per url
    let renderCaseStudyPage = () => {

        switch(taskCategory) {
            case 'Events': {
                if(casestudyName === 'Events'){
                    return <CustomerFeedBackPatterns/>;
                }
                break;  
            }
            
            case 'Bots': {
                if(casestudyName === 'Events'){
                    return <FaceRecognition/>;
                }
                break;  
            }
        }
    }

    return (
        <div>
            {renderCaseStudyPage()}
        </div>
    )
}

export default CaseStudy;