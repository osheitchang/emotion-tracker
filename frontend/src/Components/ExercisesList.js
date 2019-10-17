import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import serverUrl from "../configServer";
import EditExercise from "./EditExercise";
// console.log(serverUrl, process.env);

function Exercise(props) {
    console.log("PROPS", props.exercise)
    return(
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
        <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
        <a
            href="#"
            onClick={() => {
            props.deleteExercise(props.exercise._id);
            }}
        >
            delete
        </a>
        </td>
    </tr>
    )
};


class ExercisesList extends Component {
  constructor(props) {
    super(props);

    // this.deleteExercise = this.props.deleteExercise.bind(this);
    // this.displayExercises = this.displayExercises.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get(`${serverUrl}/exercises/`, { withCredentials: true })
      .then(response => {
          console.log("-=-=-=-=-=-=-=-=", response.data)
        this.setState({ exercises: response.data },
            ()=>{console.log("STATE", this.state.exercises)}
            );
            this.displayExercises()
      })
      .catch(error => {
        console.log(error);
      });
  }

    displayExercises = () => {
        console.log(this.state.exercises)
        return this.state.exercises.map(el=>{
            console.log("EL", el)
          return <li>{el.description}</li>
        })
    }

  deleteExercise= (id) => {
    axios
      .delete(`${serverUrl}/exercises/+ id`)
      .then(res => {
          console.log(res.data)

        //   this.setState({
        //     exercises: this.state.exercises.filter(el = el._id !== id)
        //   });
        });
  }

  exercisesList=()=>{
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=',this.state)
    return this.state.exercises.map(currentExercise => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }

  render() {
    console.log("This is the service URL>>>>", serverUrl);
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>{this.exercisesList}</tbody> */}
        </table>
        {this.exercisesList()}
      </div>
    );
  }
}

export default ExercisesList;
