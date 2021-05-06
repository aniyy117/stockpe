import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/logo.png'
import side from './image/side.png'
import React, {useState} from 'react';

function App() {

  const saveAnswer = (event) =>{
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    console.log(elementsArray);
  }

  return (
    <div className="App">
     <section>
      <header>
        <div className="logo">
        <img src={logo} alt="logo" className="logo"/>
        </div>
      </header>
      <div className="content">
      <div className="textbox">
          <h3>Post Dribble Shot in <br/> 1 Minute</h3>
          <p>Upload directly from sketch to Dribble with a<br/>beautifully carfted mockedup in seconds</p>
          <div className="input-group  textArea" >
            <input type="text" className="form-control textArea " placeholder="Enter your email"/>
            <span className="input-group-text btn btn-primary textArea " id="basic-addon2" onClick={saveAnswer} >Request Invite</span>
          </div>
        </div>
        <div className="imgbox">
             <img src ={side} className="side img-fluid" alt="img"/>
        </div>
      </div>
     </section>
     <div className="bottomtext">
          <p>Platform by Indians for Indians ❤</p>
        </div>
    </div>
  );
}

export default App;
