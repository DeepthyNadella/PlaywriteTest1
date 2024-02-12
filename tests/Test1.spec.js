const { test, expect } = require('@playwright/test');
const {Loginpage} = require('../pageobject/Login.js');

 //Json->string->js object
 const dataset =  JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));

for(const data of dataset){
    
test(`@Practice${data.username}`,async({page})=>{

    const loginpage = new Loginpage(page);
    await loginpage.click(data.username,data.password);

})
}
