import mockapiService from '../services/mockapi.service';

describe('Mock Api Test using WireMock', () => {

    it("Should return the mock response data", async () => {

        let response;

        await browser.call(async () => {
            response = await mockapiService.getMockResponse();
        });
        expect(response.status).toEqual(200);
    });
});