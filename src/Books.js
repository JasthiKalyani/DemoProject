import React,{Component} from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';
import {EditBooks} from './EditBooks';
import { Link } from "react-router-dom";
// import {AddBooks} from './AddBooks';

export class Books extends Component{
    constructor(props){
        super(props);
        this.state={books :[]}        
    }   
    componentDidMount() {  
                axios.get("https://localhost:44310/api/Library/Books").then(response => {  
            console.log(response.data);  
            this.setState({  
                books: response.data  
            });  
        });
     }
     
render(){
      const{books} = this.state;
    return(
        <div>
            <h2 align="center" style={{ color: "Blue" }}  >Book details</h2> 
            {/* <table class="tablecls" width= "100%">class="h4cls" */}
            <table className="tbcls">
           <thead >
            <tr></tr>
            <tr>
                <td className ="thtdcls">Id </td>             
                <td className ="thtdcls">BookName</td>
                <td className ="thtdcls">Author</td>
                <td className ="thtdcls">Genre</td>
                <td className ="thtdcls">Description</td>
            </tr>
           </thead>
           <tbody>           
                {books.map(b=>
                <tr key={b.Id}>
                    <td className ="thtdcls">{b.id}</td>                    
                    <td className ="thtdcls">{b.bookName}</td>
                    <td className ="thtdcls">{b.author} </td>
                    <td className ="thtdcls">{b.genre} </td>
                    <td className ="thtdcls">{b.description} </td>
                    <td> <Link
                    className="btncls"
                    to={`/EditBooks/${b.id}`}
                  >
                    Edit
                  </Link>
                  </td>                    
                </tr>)}
                <tr><td> <Link
                    className="btncls"
                    to={`/AddBooks`} >
                    Add Book
                  </Link></td></tr>
           </tbody>
           </table>         
        </div>
    )
}
}