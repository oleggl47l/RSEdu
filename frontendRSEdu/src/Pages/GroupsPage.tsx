import Button from 'react-bootstrap/Button';
import CreateUpdateGroup, {Mode} from '../components/GroupCard/CreateUpdateGroup';
import {GroupRequest, createGroup, deleteGroup, getAllGroups, updateGroup} from '../Services/groups';
import {useEffect, useState} from "react";
import AdminGroupCard from "../components/GroupCard/GroupCard.tsx";
import {Spinner} from "react-bootstrap";

export default function GroupsPage() {
    const defaultValues = {
        name: 'Default',
    } as Groups;


    const [values, setValues] = useState<Groups>(defaultValues);
    const [roles, setGroups] = useState<Groups[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);


    useEffect(() => {
        const getGroups = async () => {
            const groups = await getAllGroups();
            setLoading(false);
            setGroups(groups);
        };

        getGroups();
    }, []);

    const handleCreateGroup = async (request: GroupRequest) => {
        await createGroup(request);
        closeModal();
        const groups = await getAllGroups();
        setGroups(groups);
    };

    const handleUpdateGroup = async (id: string, request: GroupRequest) => {
        await updateGroup(id, request);
        closeModal();
        const groups = await getAllGroups();
        setGroups(groups);
    };

    const handleDeleteGroup = async (id: string) => {
        await deleteGroup(id);
        closeModal();
        const groups = await getAllGroups();
        setGroups(groups);
    };

    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (group: Groups) => {
        setMode(Mode.Edit);
        setValues(group);
        setIsModalOpen(true);
    };

    return (
        <div style={{margin: '10px', textAlign: 'center'}}>
            {!loading && (
                <Button variant="primary" style={{ marginBlock: '10px' }} size="lg" onClick={openModal}>
                    Add group
                </Button>
            )}

            <CreateUpdateGroup
                mode={mode}
                values={values}
                isModalOpen={isModalOpen}
                handleCancel={closeModal}
                handleCreate={handleCreateGroup}
                handleUpdate={handleUpdateGroup}
            />

            {loading ? (
                <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Spinner animation="border"/>
                </div>
            ) : (
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center'}}>
                    {roles.map((group: Groups) => (
                        <div key={group.groupId}>
                            <AdminGroupCard group={group} handleDelete={handleDeleteGroup} handleOpen={openEditModal}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
