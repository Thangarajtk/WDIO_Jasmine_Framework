import { MOCK_API_BASEURI } from '../../resources/baseuri';
import { MOCK_API_ENDPOINT } from '../../resources/endpoints';
import { getRequest } from '../../utils/helper';
class MockApi {

    async getMockResponse() {
        try {
            let response = await getRequest(MOCK_API_BASEURI + MOCK_API_ENDPOINT);
            
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new MockApi();