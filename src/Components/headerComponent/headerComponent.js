import React from 'react';
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    // more development here could turn this into a common component that can be recycled for for use. for instance it could house: app-search, longin/out etc.
    return (
        <header>
            <title>Survey Maker App</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/CreateNewSurvey">Create Survey</Link></li>
                    <li><Link to="/SurveyTable">View Surveys</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;
