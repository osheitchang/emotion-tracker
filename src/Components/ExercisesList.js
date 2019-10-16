import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import serverUrl from '../configServer'

class ExercisesList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state =  {exercises: []}
    }

    componentDidMount(){
        axios.get(`${serverUrl}/exercises/`, {withCredentials: true})
        .then(response=>{
            this.setState({exercises: response.data})
        })
        .catch(error=>{console.log(error)})
    }


    deleteExercise(id) {
        axios.delete(`${serverUrl}/exercises/+ id`)
        .then(res=> console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }
    
    render() {
        console.log('This is the service URL>>>>',serverUrl)
        return (
            <div>
                <p>This is the exercise list component</p>
            </div>
        );
    }
}

export default ExercisesList;