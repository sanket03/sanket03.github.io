import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './app.jsx';
import CaseStudy from './casestudy.jsx';
import Footer from './footer.jsx';


let Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path = '/' render = {() => (<App/>)}/>
                    <Route path = '/:casestudy' render = {(props) => (<CaseStudy {...props}/>)}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default Routes;