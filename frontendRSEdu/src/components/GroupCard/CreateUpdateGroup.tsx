import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {GroupRequest} from "../../Services/groups.tsx";

interface CreateUpdateRoleProps {
    mode: Mode;
    values: Groups;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: GroupRequest) => void;
    handleUpdate: (id: string, request: GroupRequest) => void;
}

export enum Mode {
    Create,
    Edit,
}

const CreateUpdateGroup: React.FC<CreateUpdateRoleProps> = ({
                                                               mode,
                                                               values,
                                                               isModalOpen,
                                                               handleCancel,
                                                               handleCreate,
                                                               handleUpdate,
                                                           }) => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        setName(values.name)
    }, [values]);

    const handleOnOk = async () => {
        const groupRequest = { name };
        mode == Mode.Create
            ? handleCreate(groupRequest)
            : handleUpdate(values.groupId, groupRequest)
    };

    return (
        <Modal show={isModalOpen} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>{mode === Mode.Create ? 'Add Group' : 'Edit Group'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleOnOk}>
                    {mode === Mode.Create ? 'Add' : 'Save'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateUpdateGroup;
