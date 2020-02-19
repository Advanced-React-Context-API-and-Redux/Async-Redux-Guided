import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { missionReducer as reducer } from "./reducers/missionReducer.js";

import MissionForm from "./components/MissionForm.js";
import MissionsList from "./components/MissionsList.js"

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Space Missions</h1>
          <MissionForm />
          <MissionsList />
      </div>
    </Provider>
  );
}

export default App;
