import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {extractRoleFromToken} from "../../Services/extractRoleFromToken.ts";
import {extractGroupFromToken} from "../../Services/extractGroupFromToken.ts";


interface UserCardProps {
    user: User;
    handleOpen: (user: User) => void;
}

export const UserProfileCard = ({user, handleOpen}: UserCardProps) => {

    const roleName = extractRoleFromToken(localStorage.getItem('token') || ''); // предполагаем, что токен хранится в локальном хранилище
    const groupName = extractGroupFromToken(localStorage.getItem('token') || ''); // предполагаем, что токен хранится в локальном хранилище

    return (
        <Card style={{width: '18rem'}} key={user.userId}>
            <Card.Body>
                <Card.Title><strong>User ID: </strong>User ID: {user.userId}</Card.Title>
                <Card.Text>
                    <strong>First Name:</strong> {user.firstName}<br/>
                    <strong>Last Name:</strong> {user.lastName}<br/>
                    <strong>Email:</strong> {user.email}<br/>
                    <strong>Role:</strong> {roleName}<br/>
                    <strong>Group:</strong> {groupName}<br/>
                    <strong>Group ID:</strong> {user.groupId}<br/>
                </Card.Text>
                <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <Button variant="primary" onClick={() => handleOpen(user)}>Edit</Button>
                </div>
            </Card.Body>
        </Card>
    );
}
