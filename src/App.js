import React, { Component } from 'react';
import Registration from "./pages/Registration"
import { BrowserRouter as Router, Route } from
    "react-router-dom";
import Wrapper from "./building_components/Wrapper/Wrapper";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Wrapper>
                        <Route exact path="/register" component={Registration} />
                    </Wrapper>
                </div>
            </Router>
        );
    }


}

export default App;