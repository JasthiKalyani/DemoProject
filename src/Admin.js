import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import e from 'cors';

export class Admin extends Component{
    constructor(props){
        super(props);
        this.state={usrs :[],usrname:'',id:null,isadmin:null,usrsById :[],userdata : []}        
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
    //  onusername = (e) =>{
    //     const un = e.target.value;
    //      console.log(un);
    //    }
    //  oncheckupdate = (e) => {  
    //     const chk = e.target.value;      
    //  };  
    //  axios.get(this.apiurl+'Users'+id).then(response => {  
    //     console.log(response.data);  
    //     this.setState({  
    //         usrsById: response.data  
    
    //     axios.put(this.apiurl+'EditUser').then(response => {  
    // console.log(response.data);  
    // this.setState({  
    //     usrs: response.data  
    // });  
    // });
    oncheckupdate(id,chckbox){
         axios.get(this.apiurl+'Users'+id).then(response => {  
        console.log(id);  
        this.setState({  
            usrsById: response.data
    });  
    });
    chckbox = (e) => e.target.value;
    console.log(id);  
    console.log(this.state.chckbox)
    //   userdata:  
    // updatedetails();   
    }

  
render(){
    const usrs =this.state.usrs;
    console.log("hi")
    return(
        <div>
            <h4 align="center" style={{ color: "white" }} class="h4cls">User details</h4> 
            <table class="tablecls" width= "100%">
           <thead >
            <tr>
                <td class ="thtdcls">Id </td>             
                <td class ="thtdcls">UserName</td>
                <td class ="thtdcls">Isadmin</td>
            </tr>
           </thead>
           <tbody>
                {usrs.map(u=>
                <tr key={u.Id}>
                    <td class ="thtdcls">{u.id}</td>                    
                    <td class ="thtdcls">{u.userName }</td>
                    <td class ="thtdcls"> 
                        <input type="checkbox" id = "chck"  checked={!u.is_admin||u.is_admin === null?false:true}/>
                                               
                        </td>
                        {/* <td>        onchange={this.oncheckupdate(u.id,u.is_admin.target.value)}                
         <ButtonToolbar>
            <Button className="mr-2" variant="info"
            onClick={()=>this.setState({editModalShow:true,
                depid:dep.DepartmentId,depname:dep.DepartmentName})}>
                    Edit
                </Button>
                </ButtonToolbar>
                        </td> */}
                </tr>)}
           </tbody>
           </table>
        </div>
    )
}
}
