import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './app.jsx';
import CaseStudy from './casestudy.jsx';
import Footer from './footer.jsx';
import Contact from './contact.jsx';
import Header from '../containers/header.jsx';
import CustomerFeedBackPatterns from '../containers/casestudies/customerFeedbackPatterns.jsx';
import FaceRecognition from '../containers/casestudies/faceRecognition.jsx';

let Routes = () => {
    return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path = '/' render = {() => (<App/>)}/>
                        <Route exact path = '/:casestudy' render = {(props) => (<CaseStudy {...props}/>)}/>
                    </Switch>
                    <Contact/>
                    <Footer/>
                </div>
            </Router>
    )
}
export default Routes;