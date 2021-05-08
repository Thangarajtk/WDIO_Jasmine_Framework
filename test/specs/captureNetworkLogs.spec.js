let fs = require('fs')
let assert = require('assert')

const LoginPage = require('../pageobjects/login.page')

describe('Capture Network Logs', () => {
    it('Capture All get calls', () => {

        var output = browser.mock('**',{method:'get'})
        browser.url('https://reqres.in')
        
        Object.keys(output.calls).forEach(function(key){
            console.log(output.calls[key].url)
            fs.writeFile('./json/getCall.json', JSON.stringify(output.calls[key]), function(err){
                if(err) throw err;
            })
        })

    });

    it('Capture All post calls', () => {

        var output = browser.mock('**',{method:'post'})
        browser.url('https://reqres.in')
        
        Object.keys(output.calls).forEach(function(key){
            console.log(output.calls[key].url)
            fs.writeFile('./json/postCall.json', JSON.stringify(output.calls[key]), function(err){
                if(err) throw err;
            })
        })

    });

    it('Capture a specific calls', () => {

        var output1 = browser.mock('**/login',{method:'post'})
        browser.url('https://the-internet.herokuapp.com/login')
        
        LoginPage.inputUsername.setValue('asdfasf')
        LoginPage.inputPassword.setValue('asfadsfasf')
        LoginPage.btnSubmit.click()

        Object.keys(output1.calls).forEach(function(key){
            console.log(output1.calls[key].url)
            fs.writeFile('./json/login.json', JSON.stringify(output1.calls[key]), function(err){
                if(err) throw err;
            })
        })

    });
 
    it('Verify request data', () => {

        var output2 = browser.mock('**/authenticate',{method:'post'})
        browser.url('https://the-internet.herokuapp.com/login')
        
        LoginPage.inputUsername.setValue('asdfasf')
        LoginPage.inputPassword.setValue('asfadsfasf')
        LoginPage.btnSubmit.click()

        assert.strictEqual(output2.calls[0].postData, 'username=asdfasf&password=asfadsfasf')
    });

    it('Verify response data', () => {

        var output3 = browser.mock('**/api/users/2',{method:'get'})
        browser.url('https://reqres.in')
        
        $('//*[@data-id="users-single"]/a').scrollIntoView()
        $('//*[@data-id="users-single"]/a').click()  
        browser.pause(2000)

        Object.keys(output3.calls).forEach(function(key){
            console.log(output3.calls[key].url)
            fs.writeFile('./json/getUser.json', JSON.stringify(output3.calls[key]), function(err){
                if(err) throw err;
            })
        })

        assert.strictEqual(output3.calls[0].body.data.email, 'janet.weaver@reqres.in')
    });
    
});
