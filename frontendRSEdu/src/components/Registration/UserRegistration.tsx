import React, { useState } from 'react';
import {Container, Form, Card, Button, Modal, Spinner} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegistration: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        groupId: ''
    });
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCloseError = () => setShowError(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5037/api/UserRegistration/userRegistration', formData);
            const token = response.data.token;
            localStorage.setItem('token', token);
            // Переход на другую страницу после успешной регистрации
            navigate('/login');
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            setShowError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="container">
            <h1 className="text-center mt-4 mb-3">User Registration</h1>
            <Card style={{maxWidth: '400px', margin: 'auto', marginTop: '50px', padding: '20px'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" name="firstName"
                                      value={formData.firstName} onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" name="lastName"
                                      value={formData.lastName} onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email}
                                      onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={formData.password}
                                      onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Group ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter group ID" name="groupId" value={formData.groupId}
                                      onChange={handleChange} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm"/> : 'Submit'}
                    </Button>
                </Form>
            </Card>
            <Modal show={showError} onHide={handleCloseError} keyboard={false} centered>
                <Modal.Body className="bg-danger text-white text-center" style={{position: 'relative'}}>
                    <div style={{position: 'absolute', top: '0', right: '5px', cursor: 'pointer'}}
                         onClick={handleCloseError}>×
                    </div>
                    Registration failed. Please check your input data and try again later.
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default UserRegistration;
