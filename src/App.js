import React, { useState } from 'react';
import CreateSurveyComponent from "./Components/createSurveyComponent/createSurveyComponent"
import SurveyTableComponent from "./Components/surveyTableComponent/surveyTableComponent";
import HeaderComponent from "./Components/headerComponent/headerComponent";
import HomeComponent from "./Components/homeComponent/homeComponent";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const App = () => {

  /**
   * More time would allow great styling to be applied for an added UX.
   * Styling considerations are uses of pre-processors, and a branding system that would allow the app to be skinned based on client needs.
   *
   * The app component houses most of the main functionality, as the app grows in scope and size some of this functionality like "createNewSurvey" could be moved  to a child controller
   * Depending on data store functionality Redux or MobX could be used to keep app state consistent and flowing in a singular data flow pattern.
   * Conversions from functional to class based components could also happen depending on need for App() and SurveyTableComponent().
   * Webpack and babel for bundling and JS transcompilation into older version ES5, etc are also in play.
   *
   */



  // using random num generation to simulate an ID for key={} in lists
  // only for demo purposes since a backend would automatically generate an ID for new surveys
  // init single survey state
  const [survey, setSurvey] = useState({ id: Math.floor(Math.random() * 1000000), name: "", startDate: null, endDate: null, status: 1 });
  // init survey table data
  const [surveyList, setSurveyList] = useState([
    { id: 1000001, name: "Survey Test 1", startDate: "2020-4-16", endDate: "2020-4-30", status: 2 },
    { id: 1000002, name: "Survey Test 2", startDate: "2020-4-10", endDate: "2020-4-15", status: 3 }]);

  // data handlers for: Survey name, Survey start date, Survey End date
  const handleSurveyName = newSurvey => setSurvey({ ...survey, name: newSurvey.target.value })
  const handleSurveyStartDate = startDate => setSurvey({ ...survey, startDate: startDate.target.value });
  const handleSurveyEndDate = endDate => setSurvey({ ...survey, endDate: endDate.target.value });
  // data handler for pushing a new survey to survey table
  const submitNewSurvey = (e) => {
    e.preventDefault();
    setSurveyList([...surveyList, survey]);
  }
  // data handler for deleting a survey from survey table
  const deleteSurveyHandler = surveyObj => {
    let surveyArray = surveyList;
    const surveyIndex = surveyArray.findIndex(survey => survey.name === surveyObj.name)
    surveyArray.splice(surveyIndex, 1)
    setSurveyList([...surveyArray]);
  }

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Router exact path="/">
            <HomeComponent />
          </Router>
          <Router path="/CreateNewSurvey">
            <CreateSurveyComponent survey={survey} handleName={handleSurveyName} handleStartDate={handleSurveyStartDate} handleEndDate={handleSurveyEndDate} submitNewSurvey={submitNewSurvey} />
          </Router>
          <Router path="/SurveyTable">
            <SurveyTableComponent surveyList={surveyList} deleteSurvey={deleteSurveyHandler} />
          </Router>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
