import React from 'react';
import PropTypes from 'prop-types';

const SurveyFilter = props => {

    return (
        <div className="surveyFilter">
            <h5>Filter By Survey Status:</h5>
            <select id="surveyStatus" onChange={props.filterSurveyHandler}>
                <option value="0">none</option>
                <option value="1">Not Launched</option>
                <option value="2">In Progress</option>
                <option value="3">Completed</option>
            </select>
        </div>
    );
}

SurveyFilter.propTypes = {
    filterSurveyHandler: PropTypes.func,
};

export default SurveyFilter;
