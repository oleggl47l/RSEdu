import axios from 'axios';

export interface GroupRequest {
    name: string;
}

export const getAllGroups = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await axios.get("http://localhost:5037/api/GroupCRUD");
        return response.data;
    } catch (error) {
        console.error('Ошибка получения списка групп:', error);
        throw error;
    }
};

export const createGroup = async (groupRequest: GroupRequest) => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    try {
        await axios.post("http://localhost:5037/api/GroupCRUD", groupRequest);
    } catch (error) {
        console.error('Ошибка создания группы:', error);
        throw error;
    }
};

export const updateGroup = async (id: string, groupRequest: GroupRequest) => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    try {
        await axios.put(`http://localhost:5037/api/GroupCRUD/${id}`, groupRequest);
    } catch (error) {
        console.error('Ошибка обновления группы:', error);
        throw error;
    }
};

export const deleteGroup = async (id: string) => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    try {
        await axios.delete(`http://localhost:5037/api/GroupCRUD/${id}`);
    } catch (error) {
        console.error('Ошибка удаления группы:', error);
        throw error;
    }
};
