import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';
import {EditBooks} from './EditBooks';

export class Books extends Component{
    constructor(props){
        super(props);
        this.state={books :[], editBooksShow:false}        
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
      const{books,bookid,bkname,bookauthor,bookgenre,bookdesc} = this.state;
     let editBooksClose=()=>this.setState({editBooksShow:false});
    console.log("hi")
    return(
        <div>
            <h4 align="center" style={{ color: "Blue" }} >Book details</h4> 
            {/* <table class="tablecls" width= "100%">class="h4cls" */}
            <Table className="mt-4" striped bordered hover size="sm">
           <thead >
            <tr>
                <td class ="thtdcls">Id </td>             
                <td class ="thtdcls">BookName</td>
                <td class ="thtdcls">Author</td>
                <td class ="thtdcls">Genre</td>
                <td class ="thtdcls">Description</td>
            </tr>
           </thead>
           <tbody>           
                {books.map(b=>
                <tr key={b.Id}>
                    <td class ="thtdcls">{b.id}</td>                    
                    <td class ="thtdcls">{b.bookName}</td>
                    <td class ="thtdcls">{b.author} </td>
                    <td class ="thtdcls">{b.genre} </td>
                    <td class ="thtdcls">{b.description} </td>
                    <td><ButtonToolbar>
                <Button className="mr-2" variant="info"
                onClick={()=>this.setState({editBooksShow:true,
                    bookid:b.id,bkname:b.bookName,bookauthor:b.author,
                    bookgenre:b.genre,bookdesc:b.description})}>
                        Edit
                </Button>
                <EditBooks show={this.state.editBooksShow}
                    onHide={editBooksClose}
                    bookid={bookid}
                    bkname={bkname}
                    bookauthor={bookauthor}
                    bookgenre={bookgenre}
                    bookdesc={bookdesc}
        />
                </ButtonToolbar>
                </td>
                </tr>)}
           </tbody>
           </Table>
        </div>
    )
}
}