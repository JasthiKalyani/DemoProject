import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

export class Users extends Component{
    constructor(props){
        super(props);
        this.state={usrs :[]}        
    }   
    componentDidMount() {  
                axios.get("https://localhost:44310/api/Library/Users").then(response => {  
            console.log(response.data);  
            this.setState({  
                usrs: response.data  
            });  
        });  
    }

render(){
    const usrs =this.state.usrs;
    console.log("hi")
    return(
        <div>
            <Table>
           <thead>
            <tr striped bordered hover size = 'sm'>
                <td>Id </td>             
                <td>UserName</td>
                <td>Isadmin</td>
            </tr>
           </thead>
           <tbody>
                {usrs.map(u=>
                <tr key={u.Id}>
                    <td>{u.id}</td>                    
                    <td>{u.userName}</td>
                    <td>{u.is_admin}</td>
                </tr>)}
           </tbody>
           </Table>
        </div>
    )
}
}