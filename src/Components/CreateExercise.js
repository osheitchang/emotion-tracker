import React, { Component } from 'react';

class CreateExercise extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    this.state ={
        username:'',
        description:'',
        duration:0,
        date: new Date(),
        users: []
    }

        componentDidMount() {
            this.setState({
                users: ['test user'],
                username: 'test User'
            })
        }

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        })
    }

    onChangeDuration(e) {
        this.setState({
        duration: e.target.value,
        })
    }
    
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration:this.state.duration,
            date: this.state.date,
            users:this.state.users
        }
        console.log(exercise)
        
        window.location ='/';
    }

    render() {
        console.log(this.state.username)
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className= "form-group">
                        <label> Username:</label>
                        <select ref = "userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(user=>{
                                return(
                                    <option key={user} value={user}> {user}</option>
                                )
                            })
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" required className="form-control"
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateExercise;