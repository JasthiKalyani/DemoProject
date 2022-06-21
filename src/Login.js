import React,{Component} from 'react';
import './Login.css'; 
import axios from 'axios';

 export class Login extends Component{
   constructor(props){
    super(props);
    this.state={usrs :[],usrname:'',chckpwd :'',chkvalid :false}      
    this.onusername = this.onusername.bind(this); 
    this.onpassword = this.onpassword.bind(this); 
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
     for (let i = 0; i < 5; i++) {
      console.log("onsub")
     if (this.state.usrs[i].userName === this.state.usrname && this.state.usrs[i].pwd === this.state.chckpwd)
       {
        console.log("in loop");
        this.props.history.push('/Books')
        document.location.reload()   
         this.setState({chkvalid :true });
      console.log(this.state.chkvalid); 
         }               
    }
   if ( this.state.usrname === "" || this.state.chckpwd === ""){
      alert("Please enter credentials") 
    }
    if(!this.state.chckpwd) {
      console.log("hi")
         alert("Enter valid credentials") }       
       
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
                placeholder="UserName"
                type="text"
                name="UserName"
                autoComplete="off"
                value={this.state.usrName} 
                onChange = {this.onusername}
              />
            </div>

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

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btn" onClick={this.onSubmit}>Login</button>
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
