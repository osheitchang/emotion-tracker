import React, { Component } from "react";
import serverUrl from '../configServer.js';
import axios from 'axios';


class Dashboard extends Component {

   state = {
     intesity:3,
     emotion:[],

  }

  
  
  
  
  render() {
    
      // axios.get('/intensity', response)
      // .then(response =>{
      //   console.log("This is the >>>", response)
      // })
      // .catch(err => console.log(err))
    
    return (
      <div>
      <h2>Emotions</h2>
      <div className='progressBar'>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '25%',
            ariavaluenow:'25',
            ariavaluemin:'0',
            ariavaluemax:'100'}}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '25%',
            ariavaluenow:'25',
            ariavaluemin:'0',
            ariavaluemax:'100'}}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '25%',
            ariavaluenow:'25',
            ariavaluemin:'0',
            ariavaluemax:'100'}}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '25%',
            ariavaluenow:'25',
            ariavaluemin:'0',
            ariavaluemax:'100'}}
          ></div>
        </div>
      </div>
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Music</h5>
        <p class="card-text">This week's new tracks</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Activities</h5>
        <p class="card-text">Activities of the Week </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">recommendations</h5>
    <p class="card-text">Lorem </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

      </div>
    );
  }
}

export default Dashboard;
