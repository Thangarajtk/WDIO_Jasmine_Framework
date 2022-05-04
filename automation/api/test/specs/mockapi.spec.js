import mockapiService from '../services/mockapi.service';

describe('Mock Api Test using WireMock', () => {

    it("Should return the mock response data", async () => {

        let response = await browser.call(async () => {
            await mockapiService.getMockResponse()
                .then(data => response = data)
                .catch(err => console.log(err))
        });

        expect(response.status).toEqual(200);
    });
});