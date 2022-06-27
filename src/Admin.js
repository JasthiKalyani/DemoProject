import React,{Component} from 'react';
// import { Table } from 'react-bootstrap';
import axios from 'axios';

export class Admin extends Component{
    constructor(props){
        super(props);
        this.state={usrs :[],usrsById :[],userdata : []}        
    }   
    apiurl = 'https://localhost:44310/api/Library/'
    componentDidMount() {  
                axios.get(this.apiurl+'Users').then(response => {  
            console.log(response.data);  
            this.setState({  
                usrs: response.data  
            });  
        });
     }
     oncheckupdate(e, item){
        console.log(item)
        let userdata = this.state.usrs
        userdata.map((user) => {
            if (user.id === item.id) {
               if(e.target.checked){
               item.is_admin = 1   
               console.log(item)
               axios.put(this.apiurl+'EditUser',item).then(response => {  
                console.log(response.data);  
                this.setState({  
                    userdata: response.data  
                });                  
            })                     
               }
               else{
               item.is_admin = 0
               console.log(item)
               axios.put(this.apiurl+'EditUser',item).then(response => {  
                console.log(response.data);  
                this.setState({  
                    userdata: response.data  
                });                  
            })
         }                        
        }
        // return this.componentDidMount()
    });
    }


  
render(){
    const usdetails =this.state.usrs;
     return(
        <div>
            <h2 align="center" style={{ color: "Blue" }}>User details</h2> 
            {/* <table class="tablecls" width= "60%"> */}
            <table className="tablecls" width ="100%">
           <thead >
            <tr>
                <td className ="thtdcls">Id </td>             
                <td className ="thtdcls">UserName</td>
                <td className ="thtdcls">Isadmin</td>
            </tr>
           </thead>
           <tbody>
                {usdetails.map(u=>
                <tr key={u.Id}>
                    <td className ="thtdcls">{u.id}</td>                    
                    <td className ="thtdcls">{u.userName }</td>
                    <td className ="thtdcls"> 
                        <input type="checkbox" id = "rowcheck{u.id}" 
                         onChange={(e) => this.oncheckupdate(e, u)}
                        defaultChecked={!u.is_admin||u.is_admin === null?false:true}/>                                               
                        </td>                       
                </tr>)}
           </tbody>
           </table>
        </div>
    )}
}
