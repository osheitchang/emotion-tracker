import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import ExercisesList from "./Components/ExercisesList"
import EditExercise from "./Components/EditExercise"
import CreateExercise from "./Components/CreateExercise"
import CreateUser from "./Components/CreateUser"
import Navbar from "./Components/Navbar"
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Router>
    <Navbar />
    <br/>
    <div className="App">
    <Route path='/' exact component={ExercisesList}/>
    <Route path='/edit/:id' exact component={EditExercise}/>
    <Route path='/create' exact component={CreateExercise}/>
    <Route path='/user' exact component={CreateUser}/>
    <Route path='/dashboard' exact component={Dashboard}/>
    </div>
    </Router>
  );
}

export default App;
