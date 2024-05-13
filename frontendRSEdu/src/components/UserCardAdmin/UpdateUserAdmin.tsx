import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {UserRequest} from "../../Services/users.tsx";

interface Props {
    mode: Mode;
    values: User;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleUpdate: (id: string, request: UserRequest) => void;
}

export enum Mode {
    Edit,
}

export const UpdateUserAdmin = ({mode, values, isModalOpen, handleCancel,  handleUpdate}: Props) => {
    const [firstName, setFirstName] = useState(values.firstName || '');
    const [lastName, setLastName] = useState(values.lastName || '');
    const [email, setEmail] = useState(values.email || '');
    const [roleId, setRoleId] = useState(values.roleId || '');
    const [groupId, setGroupId] = useState(values.groupId || '');

    useEffect(() => {
        setFirstName(values.firstName || '');
        setLastName(values.lastName || '');
        setEmail(values.email || '');
        setRoleId(values.roleId || '');
        setGroupId(values.groupId || '');
    }, [values]);


    const handleOnOk = async () => {
        const userRequest = {userId: values.userId, firstName, lastName, email, roleId, groupId};
        handleUpdate(values.userId, userRequest);
    };

    return (
        <Modal show={isModalOpen} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>{mode === Mode.Edit ? "Edit User" : ""}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="roleId">
                        <Form.Label>Role ID</Form.Label>
                        <Form.Control type="text" value={roleId} onChange={(e) => setRoleId(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="groupId">
                        <Form.Label>Group ID</Form.Label>
                        <Form.Control type="text" value={groupId} onChange={(e) => setGroupId(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleOnOk}>
                    {mode === Mode.Edit ? "Save" : ""}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
