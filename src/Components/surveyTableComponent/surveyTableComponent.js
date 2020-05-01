import React, { useState, useEffect } from 'react';
import SurveyComp from "../surveyComponent/surveyComponent";
import SurveyFilter from "../surveyFilterComponent/surveyTableFilterComponent";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

const SurveyTableComponent = props => {

    /**
     * Additional work here  would include the ID system for loading a pre-filtered page.
     * Possible conversion into a class based component to leverage various component based methods and follow historical parent-child data controller methodology
     * expansion of the filtering and survey searching based on additional parameters
     */

    const history = useHistory();
    // more time permitting a more exhaustive type of filter system
    const [filterOption, setFilterOption] = useState({ status: 0 });

    // couldn't quite get the ID through the route system
    // the base url http://localhost:3000/SurveyTable/ with a 0-3 int works as far as sending a link goes.
    useEffect(() => {
        const filterOnPath = window.location.pathname[window.location.pathname.length - 1];
        if (filterOnPath && filterOnPath > -1 && filterOnPath < 4) {
            setFilterOption({ status: Number(filterOnPath) });
        }
    }, []);

    const filterSurveyHandler = (e) => {
        if (+e.target.value > -1 && +e.target.value < 4) {
            history.push(e.target.value);
            setFilterOption({ status: Number(e.target.value) });
        }
    }
    // filtered or unfiltered list
    const result = filterOption && filterOption.status === 0 ? props.surveyList :
        props.surveyList.filter(survey => survey.status === filterOption.status);

    // use ID in key to make list more stable
    const surveyListItems = result.map(survey =>
        <li key={survey.id}>
            <SurveyComp surveyVal={survey} deleteSurvey={() => props.deleteSurvey(survey)} />
        </li>
    )

    return (
        <div>
            <h1>Survey Table:</h1>
            <SurveyFilter filterSurveyHandler={filterSurveyHandler} />
            <ul>{surveyListItems}</ul>
        </div>
    );
}


SurveyTableComponent.propTypes = {
    surveyList: PropTypes.arrayOf(PropTypes.object)
};


export default SurveyTableComponent;
