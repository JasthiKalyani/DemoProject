import React,{Component} from 'react';
import './Login.css'; 
// import { withRouter } from 'react-router-dom';
import axios from 'axios';

export class Login extends Component{
   constructor(props){
    super(props);
    this.state={usrs :[],usrname:'',chckpwd :'',chkvalid :false, errors: {}}      
    this.onusername = this.onusername.bind(this); 
    this.onpassword = this.onpassword.bind(this); 
  }  

  componentDidMount() {  
    axios.get("https://localhost:44310/api/Library/Users").then(response => {  
console.log(response.data);  
this.setState({  
    usrs: response.data  
});  
});  
}

onusername = (e) =>{
const usrname = e.target.value;
this.setState({usrname});
  console.log(usrname);
}

onpassword = (e) =>{
  const chckpwd = e.target.value;
  this.setState({chckpwd});
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
    this.state.usrs.map((u) => {
      console.log("onsub")
     if (u.userName === this.state.usrname && u.pwd === this.state.chckpwd)
       {
          if(u.is_admin===1){ this.props.history.push('/Books')}
          else{ this.props.history.push('/Bookss')}
          
         this.setState({chkvalid :true });
      
         }               
    })
    let errors = {};
    if(this.state.usrname === "" && this.state.chckpwd === ""){     
      errors["username"] = "*Please enter your username.";
      errors["password"] = "*Please enter your password.";
      this.setState({
        errors: errors
      });
    }
  else if ( this.state.usrname === "" ){
         errors["username"] = "*Please enter your username.";
      this.setState({
        errors: errors
      });

    }else if(this.state.chckpwd === ""){
       errors["password"] = "*Please enter your password.";
      this.setState({
        errors: errors
      });
    }
    else
    if(!this.state.chckpwd) {
      console.log("hi")
         alert("Enter valid credentials") }       
       
  }
  onSignup = (e) =>{
    e.preventDefault(); 
    this.props.history.push('/Signup')
  }

render(){
  const { isPasswordShown } = this.state;
  return (
    <div className="App">
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">
              Welcome to Library
              <br />
              <br />
            </span>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                placeholder="userName"
                type="text"
                name="UserName"
                autoComplete="off" required
                value={this.state.usrName} 
                onChange = {this.onusername}
              />
            </div>
            <div className="errorMsg">{this.state.errors.username}</div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                onChange ={this.onpassword}
                placeholder="Password"
                type={isPasswordShown ? "text" : "password"}
                name="pass"                
              />
              <i
                className="fa fa-eye password-icon"
                onClick={this.togglePasswordVisiblity}
              />
            </div>
            <div className="errorMsg">{this.state.errors.password}</div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btn" onClick={this.onSubmit}>Login</button>
              </div>
            </div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btnsignup" onClick={this.onSignup}>SignUp</button>
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
// export default withRouter (Login)
