import React from 'react';
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom';
import IndividualLead from './Components/IndividualLead';
import LoanLeads from './Components/LoanLeads';

function CustomRoute(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/loanlead" component={IndividualLead} />
                <Route exact path="/" component={LoanLeads} />
            </Switch>
        </Router>        
    );
}

export default CustomRoute;