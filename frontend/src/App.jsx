import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to the Booking System</h1>
                </Route>
                {/* Add more routes here as needed */}
            </Switch>
        </Router>
    );
};

export default App;