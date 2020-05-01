import React from 'react';
import PropTypes from 'prop-types';

const CreateSurveyComponent = props => {
    return (
        <div className="App">
            <h1>Create A New Survey Below:</h1>
            <form id="CreateSurveyForm" onSubmit={props.submitNewSurvey}>
                <h5>Name:</h5>
                <input type="text" value={props.survey.name} onChange={
                    (e) => props.handleName(e)} />
                <h5>Start Date:</h5>
                <input type="date" value={props.survey.startDate} onChange={
                    (e) => props.handleStartDate(e)} />
                <h5>End Date:</h5>
                <input type="date" value={props.survey.endDate} onChange={
                    (e) => props.handleEndDate(e)} />
                <div>
                    <button disabled={!props.survey.name || !props.survey.startDate || !props.survey.endDate} type="submit">Submit Survey</button>
                </div>
            </form>

        </div>
    );
}

CreateSurveyComponent.propTypes = {
    submitNewSurvey: PropTypes.func,
    survey: PropTypes.object,
    handleName: PropTypes.func,
    handleStartDate: PropTypes.func,
    handleEndDate: PropTypes.func,
}

export default CreateSurveyComponent;
