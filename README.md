# WebdriverIO_Jasmine_Framework
[WebdriverIO 7.19.5](http://webdriver.io/)

<img src = "https://user-images.githubusercontent.com/48508827/117580229-ac1d5d80-b114-11eb-8a0a-89ae0c9a031b.png"> <img src = "https://user-images.githubusercontent.com/48508827/117580298-f272bc80-b114-11eb-8e10-3e4e2c6c1fa9.png" height = "160">

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.

This is a sample WebdriverIO (v7) Jasmine framework project to automate web applications using Javascript. This framework was designed with Page Object Pattern.

## :rocket: Quick Start
1. Install [NodeJS](https://nodejs.org/en/download/) >= 16
2. Download Visual Studio Code [IDE](https://code.visualstudio.com/download) based on the OS.

## :pushpin: Updating all the dependencies in package.json
The below command will update the dependencies to the latest versions (including major version changes) in the package.json file
```bash
npx npm-check-updates -u
```
To go ahead with the upgrades, run the following command:
```bash
npm install
```
## :pushpin: Installation
:point_right: Clone the project from GitHub.

:point_right: Open `Terminal` from the project root directory `WebdriverIO_Jasmine_Framework`  on the VS code.

:point_right: Command to install all the dependencies present in the package.json
```bash
npm install
```

:point_right: Command to execute the test script.
```bash
npm test
```
## :pushpin: Execute tests on Docker
1. On the terminal, Run command `docker-compose up -d` to start the docker service. 
2. Open new terminal and Run command `npm test` to execute the scripts on docker container.

## :pushpin: Clean the "reports" directory
:point_right: Command to clean the "reports" directory. 
```bash
npm run cleanup
```
Note: Execute this command before the execution of test.

## :pushpin: Reports
:point_right: Spec Reporter

:point_right: Junit Reporter

:point_right: HTML Reporter

:point_right: PDF Report (Generated from an HTML Report)

:point_right: Timeline Reporter

## :pushpin: Key Features
:point_right: Jasmine framework

:point_right: Page Object design pattern

:point_right: Babel Setup

:point_right: Docker Service

:point_right: Support for cross browser testing and Parallel test execution