import React,{Component} from 'react';
import './Login.css'; 
import {Books} from './Books';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class Login extends Component{
  constructor(props){
    super(props);
    this.state={usrs :[]}        
  }  

  componentDidMount() {  
    axios.get("https://localhost:44310/api/Library/Users").then(response => {  
console.log(response.data);  
// const len = this.count(response.data.array.lenght);
// console.log(len);
this.setState({  
    usrs: response.data  
});  
});  
}

onusername = (e) =>{
  console.log("onchangeusername")
 const un = e.target.value;
  console.log(un);
}

onpassword = (e) =>{
  const chckpwd = e.target.value;
   console.log(chckpwd);
 }
  state = {
    isPasswordShown: false
  };
  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  onSubmit = (e) => {
    e.preventDefault();
    // const users = this.state.usrs;
    console.log(this.state.usrs)
      // console.log(username.target.value);
    // for (let i = 0; i < 5; i++) {
    //   console.log("hi")
    //   if (this.state.usrs[i].userName === this.state.un)
    //    {
    //     console.log(this.state.un);
    //     console.log(this.state.usrs.userName);
    //     // this.context.router.push('/Users');
    //     this.props.history('/Books');
    //    }
    // }
    console.log("submit")
    console.log(this.state.un)
    console.log(this.state.usrs.userName)
    const userdata = this.state.usrs.find((u)=>u.userName === this.state.un);
    console.log(userdata.userName)
    if(userdata){
      console.log("userdata")
      if(userdata.pwd === this.state.pwd){
        this.props.history('/Books'); 
      }else{
        alert("Invalid credentials")
      }
    }
   
  }
  

render(){
  const { isPasswordShown } = this.state;
  return (
    <div className="App">
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-26">
              Welcome to Library
              <br />
              <br />
            </span>

            <div class="wrap-input100 validate-input">
              <input
                class="input100"
                placeholder="UserName"
                type="text"
                name="UserName"
                autoComplete="off"
                onchange = {this.onusername}
              />
            </div>

            <div class="wrap-input100 validate-input">
              <input
                class="input100"
                onchange ={this.onpassword}
                placeholder="Password"
                type={isPasswordShown ? "text" : "password"}
                name="pass"                
              />
              <i
                className="fa fa-eye password-icon"
                onClick={this.togglePasswordVisiblity}
              />
            </div>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn" />
                <button class="login100-form-btn" onClick={this.onSubmit}>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};
}
