import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/logo.png'
import side from './image/side.png'
import React, {useState} from 'react';
import firebase from './ult/firebase';

function App() {
  const [title , setTitle ] = useState('');
  const [show , setShow ] = useState(false);

  const handleOnChange = (e) =>{
    setTitle(e.target.value);
  };

  const createTodo = () =>{
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title, 
      Compelete : false,
    };

    todoRef.push(todo);
  };

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
      <h3>We let you buy Stocks in <br/> tokenized form</h3>
      <p>Just like cryptocurrency, Now buy real stocks with any amount <br/>Get yourself a part of stock without buying it a whole.</p>
          <div className="input-group  textArea">
            <input type="email" className="form-control textArea " placeholder="Enter your email"  onChange={handleOnChange}/>
            <span className="input-group-text btn btn-primary textArea " id="basic-addon2" onClick={() =>{createTodo(); setShow(true); }}>Request Invite</span>
          </div>
          {
              show?<h6 className="msg">Thank you. We will email you once our BETA App is out.</h6>:null
            }
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
