describe('Chrome Dev Tools', () => {
    it('should listen on network events', () => {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        browser.url('https://www.google.com')
    })

    it('should take JS coverage', () => {
        /**
         * enable necessary domains
         */
        browser.cdp('Profiler', 'enable')
        browser.cdp('Debugger', 'enable')

        /**
         * start test coverage profiler
         */
        browser.cdp('Profiler', 'startPreciseCoverage', {
            callCount: true,
            detailed: true
        })

        browser.url('http://google.com')

        /**
         * capture test coverage
         */
        const { result } = browser.cdp('Profiler', 'takePreciseCoverage')
        const coverage = result.filter((res) => res.url !== '')
        console.log('JS coverage ==> ' + coverage)
    })
});