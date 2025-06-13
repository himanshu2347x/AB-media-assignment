import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const travelApi = {
    getDestinations: async () => {
        const response = await axios.get(`${API_BASE_URL}/destinations`);
        return response.data;
    },

    getTopSellingPackages: async () => {
        const response = await axios.get(`${API_BASE_URL}/packages/top-selling`);
        return response.data;
    },
};
