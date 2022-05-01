import axios from 'axios';

class MockApi {

    async getMockResponse() {
        try {
            let response = await axios.get("http://localhost:9000/api/mytest");
            return response;
        } catch (err) {
            console.error(err);
        }
    }
}

export default new MockApi();