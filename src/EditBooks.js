import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {Button, Form, FormGroup} from 'react-bootstrap';
import './App.css';

function EditBook(props) {
  const [bookDetails, setBookDetails] = useState([]);
  const history = useHistory();
  const { id } = useParams();
 const apiUrl = "https://localhost:44310/api/Library/";  
 
    useEffect(()=>{
        axios.get(apiUrl+"Books/"+id).then(response =>
            {setBookDetails(response.data)                
            }) 
               .catch(e=>{
                console.log(e);
            })   
    },[]);
const onSubmit = (event) =>  {
    console.log(event.target.Genre.value)
    event.preventDefault();
    fetch('https://localhost:44310/api/Library/EditBooks',{mode:'cors'},{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:event.target.Id.value,
            bookName:event.target.BookName.value,
            author:event.target.Author.value,
            genre:event.target.Genre.value,
            description:event.target.Description.value               
        })
    })
    .then(res=>res.json())   
    .then((result)=>{
        console.log("res")
        history.push("/Books")
    },
    (error)=>{
        alert('Failed');
    })
}

  return (
    <div className="container">   
    <h2 align="center" style={{ color: "Blue" }}>Book details</h2>  
      <Form align="center" onSubmit={onSubmit} className="formcls">         
                        <Form.Group controlId="Id">
                        <Form.Label className="labelcls">Id</Form.Label>
                        <Form.Control type="text" name="Id" required 
                        placeholder="Id" className="inputcls"
                        disabled
                        defaultValue={bookDetails.id}/>                     
                    </Form.Group>

                    <Form.Group controlId="BookName">
                        <Form.Label className="labelcls">BookName</Form.Label>
                        <Form.Control type="text" name="BookName" required 
                        defaultValue={bookDetails.bookName} className="inputcls"
                        placeholder="BookName"/>
                    </Form.Group>
                   
                    <Form.Group controlId="Author">
                        <Form.Label className="labelcls">Author</Form.Label>
                        <Form.Control type="text" name="Author" required 
                        defaultValue={bookDetails.author} className="inputcls"
                        placeholder="Author"/> 
                    </Form.Group>

                    <Form.Group controlId="Genre">
                        <Form.Label className="labelcls">Genre</Form.Label>
                        <Form.Control type="text" name="Genre" required
                        placeholder="Genre" className="inputcls"
                        defaultValue={bookDetails.genre}
                        />                      
                        
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label className="labelcls">Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                        defaultValue={bookDetails.description} className="inputcls"
                        placeholder="Description"/>
                    </Form.Group>

                    <Form.Group>
                        <br></br>
                        <Button className="btncls"  variant="primary" type="submit">
                            Update Books
                        </Button>
                    </Form.Group>
                </Form>
                </div>
  );
};

export default EditBook;