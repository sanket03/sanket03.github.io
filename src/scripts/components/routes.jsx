import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './app.jsx';
import CaseStudy from './casestudy.jsx';
import Footer from './footer.jsx';
import Header from '../containers/header.jsx';


let Routes = () => {
    return (
        <div>
            <Router>
                <div>
                <Header/>
                <Switch>
                    <Route exact path = '/' render = {() => (<App/>)}/>
                    <Route path = '/:casestudy' render = {(props) => (<CaseStudy {...props}/>)}/>
                </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    )
}

export default Routes;