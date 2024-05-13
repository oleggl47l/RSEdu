import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DeleteConfirmationModal } from '../DeleteConfirmation';

interface AdminGroupCardProps {
    group: Groups;
    handleDelete: (id: string) => void;
    handleOpen: (group: Groups) => void;
}

const AdminGroupCard: React.FC<AdminGroupCardProps> = ({ group, handleDelete, handleOpen }) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleDeleteConfirmation = () => {
        setShowConfirmationModal(true);
    };

    const handleDeleteConfirmed = () => {
        handleDelete(group.groupId);
        setShowConfirmationModal(false);
    };

    return (
        <Card style={{ width: '18rem' }} key={group.groupId}>
            <Card.Body>
                <Card.Title><strong>Group ID: </strong>{group.groupId}</Card.Title>
                <Card.Text><strong>Group Name:</strong> {group.name}<br/></Card.Text>
                <div style={{display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Button variant="primary" onClick={() => handleOpen(group)}>Edit</Button>
                    <Button variant="danger" onClick={handleDeleteConfirmation}>Delete</Button>
                    <DeleteConfirmationModal
                        show={showConfirmationModal}
                        onHide={() => setShowConfirmationModal(false)}
                        onConfirm={handleDeleteConfirmed}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default AdminGroupCard;
