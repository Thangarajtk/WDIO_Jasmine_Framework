describe('Chrome Dev Tools', () => {

    it('should listen on network events', async () => {
        await browser.cdp('Network', 'enable')
        await browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        await browser.url('https://www.google.com')
    })

    it('should take JS coverage', async () => {
        /**
         * enable necessary domains
         */
        await browser.cdp('Profiler', 'enable')
        await browser.cdp('Debugger', 'enable')

        /**
         * start test coverage profiler
         */
        await browser.cdp('Profiler', 'startPreciseCoverage', {
            callCount: true,
            detailed: true
        })

        await browser.url('http://google.com')

        /**
         * capture test coverage
         */
        const { result } = await browser.cdp('Profiler', 'takePreciseCoverage')
        const coverage = result.filter((res) => res.url !== '')
        console.log('JS coverage ==> ' + coverage)
    })
});