import React from "react";
import { useHistory } from "react-router-dom";
import {Button, Form } from 'react-bootstrap';
import './App.css';

function AddBooks(props) {
   const history = useHistory();
 
const onSubmit = (event) =>  {
    console.log(event.target.Genre.value)
    event.preventDefault();
    fetch('https://localhost:44310/api/Library/AddBooks',{
        method:'POST',
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
                        disabled/>                     
                    </Form.Group>

                    <Form.Group controlId="BookName">
                        <Form.Label className="labelcls">BookName</Form.Label>
                        <Form.Control type="text" name="BookName" required 
                       className="inputcls"
                        placeholder="BookName"/>
                    </Form.Group>
                   
                    <Form.Group controlId="Author">
                        <Form.Label className="labelcls">Author</Form.Label>
                        <Form.Control type="text" name="Author" required 
                         className="inputcls"
                        placeholder="Author"/> 
                    </Form.Group>

                    <Form.Group controlId="Genre">
                        <Form.Label className="labelcls">Genre</Form.Label>
                        <Form.Control type="text" name="Genre" required
                        placeholder="Genre" className="inputcls" />                      
                        
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label className="labelcls">Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                       className="inputcls"
                        placeholder="Description"/>
                    </Form.Group>

                    <Form.Group>
                        <br></br>
                        <Button className="btncls"  variant="primary" type="submit">
                            Add New Book
                        </Button>
                    </Form.Group>
                </Form>
                </div>
  );
};

export default AddBooks;