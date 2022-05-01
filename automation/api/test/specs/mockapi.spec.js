import mockapiService from '../services/mockapi.service';

describe('Mock Api using WireMock', () => {

    let response;

    it("Should return the mock response data", async () => {

        await browser.call(async () => {
            await mockapiService.getMockResponse()
                .then(data => response = data)
                .catch(err => console.log(err))
        });

        expect(response.status).toEqual(200);
    });
});