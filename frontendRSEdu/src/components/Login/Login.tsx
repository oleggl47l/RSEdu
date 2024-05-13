import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { extractRoleFromToken } from "../../Services/extractRoleFromToken.ts";
import { extractUserIdFromToken } from "../../Services/extractUserIdFromToken.ts";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showError, setShowError] = useState(false);

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
            const response = await axios.post('http://localhost:5037/api/auth/login', formData);
            const token = response.data.token;
            localStorage.setItem('token', token);
            const role = extractRoleFromToken(token);
            const userId = extractUserIdFromToken(token);
            console.log('Полученная роль:', role);
            console.log('Id пользователя:', userId);
            window.location.href = "/"
        } catch (error) {
            console.error('Ошибка авторизации:', error);
            setShowError(true);
        }
    };

    return (
        <Container className="container">
            <Card style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px', padding: '20px' }}>
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    </Form.Group>
                    <div className="d-grid">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
            <Modal show={showError} onHide={handleCloseError} keyboard={false} centered>
                <Modal.Body className="bg-danger text-white text-center" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '0', right: '5px', cursor: 'pointer' }} onClick={handleCloseError}>×</div>
                    Error: Email or Password is incorrect.
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Login;
