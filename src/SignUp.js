import React, { useState } from 'react'  
import axios from 'axios';  


function SignUp(props) {  
  const [data, setdata] = useState({ userName: '', password: '',confirmPassword: '',errors: {}})  
  const apiUrl = "https://localhost:44310/api/Library/AddUser";  
  let errors = {};
  const SignupUser = (e) => {  
    e.preventDefault();  
    const data1 = { userName: data.userName, password: data.password};
    console.log("post") 
    console.log(data1)
      axios.post(apiUrl, data1)  
      .then((result) => {  
         console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
        props.history.push('/Login')  
      })  
  }  

 const onChange = (e) => {  
    e.persist();   
    setdata({ ...data, [e.target.name]: e.target.value });    
  if(data.Password !== data.ConfirmPassword ){
      errors["cnfmpwd"] = "*Password and Confirm doesn't match.";
      setdata({
        errors: errors
      });
    }
  }  
  return (  
    <div className="App">
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">
              Signup
              <br />
              <br />
            </span>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                placeholder="userName"
                type="text"
                name="userName"
                autoComplete="off"
                onChange={onChange} value={data.userName}
              />
            </div>

            <div className="wrap-input100 validate-input">
              <input type="Password"
              onChange={onChange} value ={data.Password}  
                className="input100"
                placeholder="password"                
                name="pwd"            
            />             
            </div>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="Password"
                onChange={onChange} value={data.ConfirmPassword}
                placeholder="confirmPassword"
               name="confirmPwd"                
              />             
            </div>
            <div className="errorMsg">{errors.cnfmpwd}</div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btn" onClick={SignupUser}>SignUp</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>  
  )  
}  
  
export default SignUp  