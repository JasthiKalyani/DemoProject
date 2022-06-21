import React,{Component} from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';
import {EditBooks} from './EditBooks';
import {AddBooks} from './AddBooks';

export class Books extends Component{
    constructor(props){
        super(props);
        this.state={books :[], addModalShow:false, editBooksShow:false}        
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
      let addModalClose=()=>this.setState({addModalShow:false});
     let editBooksClose=()=>this.setState({editBooksShow:false});
    console.log("hi")
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
                    <td><ButtonToolbar>
                <Button className="btncls" 
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
                <td width="100px"> <ButtonToolbar>
                    <Button className="btncls"
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Book</Button>

                    <AddBooks show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar></td>
                </tr>)}
           </tbody>
           </table>
           
          
        </div>
    )
}
}