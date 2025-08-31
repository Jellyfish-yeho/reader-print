import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

// 간단한 테스트 함수
export const testApi = async () => {
    try {
        const response = await apiClient.get('/test');
        return response.data;
    } catch (error) {
        console.error('API 호출 실패:', error);
        throw error;
    }
};