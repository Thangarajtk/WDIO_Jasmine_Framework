import axios from 'axios';
import { MOCK_API_BASEURI } from '../../resources/baseuri';
import { MOCK_API_ENDPOINT } from '../../resources/endpoints';
class MockApi {

    async getMockResponse() {
        try {
            let response = await axios.get(MOCK_API_BASEURI + MOCK_API_ENDPOINT);
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new MockApi();