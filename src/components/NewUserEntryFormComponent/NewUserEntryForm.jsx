import './newUserEntryForm.css';

import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';

const NewUserEntryForm = () => {

    return (

        <Form className='m-5'>
            <Container className='new-user-entry'>
                <Row className='name-row'>
                    <Form.Group as={Col}>
                        <FloatingLabel controlId='floatingFirstName' label='First Name' className='mb-3'>
                            <Form.Control type='text' placeholder='First Name'/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel controlID='floatingLastName' label='Last Name' className='mb-3'>
                            <Form.Control type='text' placeholder='Last Name' />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Form.Group className='mb-3' controlId='formEmailAddress'>
                    <FloatingLabel controlID='floatingEmail' label='Email' className='mb-3'>
                        <Form.Control type='email' placeholder='Email'/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formCommentsQuestions'>
                    <FloatingLabel controlID='floatingComments' label='Comments / Questions' className='mb-3'>
                        <Form.Control as='textarea' placeholder='Leave a comment / question' style={{height: '100px'}} />
                    </FloatingLabel>
                </Form.Group>
                <Row>
                    <Col className='d-flex flex-start'>
                        <Button type='submit' variant='dark'>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>

    );
}

export default NewUserEntryForm;