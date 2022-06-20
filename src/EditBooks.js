import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditBooks extends Component{
    constructor(props){
        super(props);
        // this.state={bks:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    //     componentDidMount(){
    //     fetch('https://localhost:44310/api/Library/EditUser')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         this.setState({bks:data});
    //     });
    // }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44310/api/Library/EditUser',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:event.target.Id.value,
                BookName:event.target.BookName.value,
                Author:event.target.Author.value,
                Genre:event.target.Genre.value,
                Description:event.target.Description.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


  render(){
        return (
            <div className="container">

<Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Books
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="Id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" name="Id" required 
                        placeholder="Id"
                        disabled
                        defaultValue={this.props.bookId}/>
                    </Form.Group>

                    <Form.Group controlId="BookName">
                        <Form.Label>BookName</Form.Label>
                        <Form.Control type="text" name="BookName" required 
                        defaultValue={this.props.bkName}
                        placeholder="BookName"/>
                    </Form.Group>

                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="Author" required 
                        defaultValue={this.props.bookAuthor}
                        placeholder="Author"/>
                    </Form.Group>

                    <Form.Group controlId="Genre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" name="Genre" required
                        placeholder="Genre"
                        defaultValue={this.props.bookGenre}
                        />                      
                        
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                        defaultValue={this.props.bookDesc}
                        placeholder="Description"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Books
                        </Button>
                    </Form.Group>
                </Form>
            </Col>          
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}