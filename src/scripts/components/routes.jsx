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
            <Router basename="/src">
                <Switch>
                    <Route exact path = '/src/' render = {() => (<App/>)}/>
                    <Route path = {`/src/:casestudy`} render = {(props) => (<CaseStudy {...props}/>)}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default Routes;