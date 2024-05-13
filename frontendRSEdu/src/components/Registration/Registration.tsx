// Registration.tsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration: React.FC = () => {
    return (
        <Card style={{maxWidth: '400px', margin: 'auto', marginTop: '50px', padding: '20px'}}>
            <h2 style={{textAlign: 'center'}}>Registration</h2>
            <Link to="/teacherRegistration">
                <Button variant="primary" className="w-100 mb-3">
                    Teacher Registration
                </Button>
            </Link>
            <Link to="/userRegistration">
                <Button variant="primary" className="w-100">
                    User Registration
                </Button>
            </Link>
        </Card>
    );
};

export default Registration;
