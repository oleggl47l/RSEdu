import React, { useState, useEffect } from 'react';
import { extractUserIdFromToken } from '../Services/extractUserIdFromToken.ts';
import { getUserById, updateUser, UserRequest } from '../Services/users.tsx';
import { UserProfileCard } from "../components/UserProfileCard/UserProfileCard.tsx";
import { Mode, UpdateUser } from "../components/UserProfileCard/UpdateUser.tsx";

const UserProfilePage: React.FC = () => {
    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        userId: "",
    } as User;

    const [values, setValues] = useState<User>(defaultValues);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [mode, setMode] = useState(Mode.Edit);

    const userId: string = extractUserIdFromToken(localStorage.getItem('token') || '');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData: User = await getUserById(userId);
                setUser(userData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();

    }, [userId]);

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (user: User) => {
        setMode(Mode.Edit);
        setValues(user);
        setIsModalOpen(true);
    };

    const handleUpdateUser = async (id: string, request: UserRequest) => {
        await updateUser(id, request);
        closeModal();
        const updatedUser = await getUserById(userId);
        setUser(updatedUser);
    };

    return (
        <div style={{margin: '10px', display: 'flex', justifyContent: 'center'}}>

            <UpdateUser
                mode={mode}
                values={values}
                isModalOpen={isModalOpen}
                handleCancel={closeModal}
                handleUpdate={handleUpdateUser}
            />

            {loading ? (
                <h1>Loading . . .</h1>
            ) : (
                <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h1 >User Profile</h1>
                    </div>

                    <div style={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center"}}>

                        <UserProfileCard user={user!} handleOpen={openEditModal}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;
