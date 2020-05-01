import React from 'react';
import { NOT_LAUNCHED, IN_PROGRESS, COMPLETED } from "../../constants/globalConstants";
import PropTypes from 'prop-types';

// basic functional comp for displaying a generic survey place holder. potential upgrades could include editing a survey, additional fields on survey data for filtering and feedback are also a considerations
const SurveyComponent = props => {
    return (
        <div className="surveyComponent">
            <div>
                <h2>{props.surveyVal.name}</h2>
                <p>{props.surveyVal.startDate}</p>
                <p>{props.surveyVal.endDate}</p>
                <p>{props.surveyVal.status === 1 ? NOT_LAUNCHED : props.surveyVal.status === 2 ? IN_PROGRESS : COMPLETED}</p>
                <button disabled={props.surveyVal.status === 2 || props.surveyVal.status === 3} onClick={props.deleteSurvey}>Delete</button>
            </div>
        </div>
    );
}

SurveyComponent.propTypes = {
    name: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    status: PropTypes.number
};

export default SurveyComponent;
