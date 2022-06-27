import React,{Component} from 'react';
// import {Button,ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';

export class UserBooks extends Component{
    constructor(props){
        super(props);
        this.state={userBooks :[],users:[],books:[]}        
    }   
    apiUrl = "https://localhost:44310/api/Library/"
    componentDidMount() {  
                axios.get(this.apiUrl+"UserBooks").then(response => {  
            console.log(response.data);  
            this.setState({  
                userBooks: response.data  
            });  
        });
        axios.get(this.apiUrl+"Books").then(response => {  
            console.log(response.data);  
            this.setState({  
                books: response.data  
            });  
        });
        axios.get(this.apiUrl+"Users").then(response => {  
            console.log(response.data);  
            this.setState({  
                users: response.data  
            });  
        });        
     }

  
     
render(){
     return(
        <div>
            <h2 align="center" style={{ color: "Blue" }}  >Book details</h2> 
           <table className="tbcls">
           <thead >
            <tr></tr>
            <tr>
                <td className ="thtdcls">Id </td>             
                <td className ="thtdcls">UserName</td>
                <td className ="thtdcls">BookName</td>
                <td className ="thtdcls">BookedTime</td>
                <td className ="thtdcls">ReturnedDate</td>
                <td className ="thtdcls">RenewedDate</td>                
            </tr>
           </thead>
           <tbody>    
           {this.state.userBooks.map((ub)=>{
             const usrName = this.state.users.find(u => u.id === ub.userId);
             const bkName = this.state.books.find(b => b.id === ub.bookId);
            })
          }        
                {this.state.userBooks.map(u=>
                <tr key={u.Id}>
                    <td className ="thtdcls">{u.id}</td>                    
                    <td className ="thtdcls">{this.state.usrName}</td>
                    <td className ="thtdcls">{this.state.bkName}</td>
                    <td className ="thtdcls">{u.bookedTime} </td>
                    <td className ="thtdcls">{u.returnedDate} </td>
                    <td className ="thtdcls">{u.renewedDate} </td>
                    <td>                  
                  </td>                    
                </tr>)}                
           </tbody>
           </table>         
        </div>
    )
}
}