export const extractGroupFromToken = (token: string) => {
    try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken['Group'];
    } catch (error) {
        console.error('Ошибка при извлечении группы из токена:', error);
        return null;
    }
};