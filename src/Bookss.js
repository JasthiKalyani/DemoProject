import React,{Component} from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';
// import {AddBooks} from './AddBooks';

export class Bookss extends Component{
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
     onAdd = (e,id) => {
        console.log(e.target.Genre.value)
        e.preventDefault();
        fetch('https://localhost:44310/api/Library/AddUserBooks',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                // id:event.target.Id.value,
                 bookId:id,
                // author:event.target.Author.value,
                // genre:event.target.Genre.value,
                // description:event.target.Description.value               
            })
        })
        .then(res=>res.json())   
        .then((result)=>{
            console.log("res")
            this.props.history.push("/Books")
        },
        (error)=>{
            alert('Failed');
        })
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
                    <td> <button  className="btncls" onClick ={(e) =>this.onAdd(e,b.id)} >        
                    Add to MyBooks  </button>                
                  </td>                    
                </tr>)}               
           </tbody>
           </table>         
        </div>
    )
}
}