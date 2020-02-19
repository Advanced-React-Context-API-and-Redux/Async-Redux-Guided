import React from 'react';
import './App.css';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { missionReducer as reducer } from "./reducers/missionReducer.js";

import MissionForm from "./components/MissionForm.js";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Space Missions</h1>
        <MissionForm />
      </div>
    </Provider>
  );
}

export default App;
