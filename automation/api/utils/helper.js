const axios = require('axios').default;

export const getRequest = async (url) => {
    try {
        const response = await axios.get(url);

        return response;
    } catch (error) {
        console.error(error);
    }
}

export const postRequest = async (url, data) => {
    try {
        const response = await axios.post(url, data);

        return response;
    } catch (error) {
        console.error(error);
    }
}