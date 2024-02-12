const { test, expect } = require('@playwright/test');
const {Login} = require('../pageobject/Login');

 //Json->string->js object
 const dataset =  JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));

for(const data of dataset){

test(`@Practice${data.username}`,async({page})=>{

    const login = new Login(page);
    await login.click(data.username,data.password);

})
}
