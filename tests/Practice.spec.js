const{test,expect} = require('@playwright/test');

test("practice test", async({page})=>{

    await page.goto("https://about.bankofamerica.com/en");
    await expect(page).toHaveTitle("About Bank of America - Our People, Our Passion, Our Purpose");
    // test.setTimeout(100000);
    // const logo = await page.locator("img[alt='Bank of America']");
    // await expect(logo).toBeEnabled();
    // logo.click();

    const listoflinks = await page.$$("a");
    for(const links of listoflinks){
        // const count = listoflinks.length
        // console.log(count);
        // const urllink = await links.textContent();
        const urllink = await links.getAttribute("href");
        console.log(urllink);

        
    }

})