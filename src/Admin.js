import React,{Component} from 'react';
// import { Table } from 'react-bootstrap';
import axios from 'axios';
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
                {usrs.map(u=>
                <tr key={u.Id}>
                    <td className ="thtdcls">{u.id}</td>                    
                    <td className ="thtdcls">{u.userName }</td>
                    <td className ="thtdcls"> 
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
