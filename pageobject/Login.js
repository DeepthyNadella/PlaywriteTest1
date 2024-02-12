class Loginpage {

    constructor(page)
    {
        this.page = page;
        this.mainlogin =page.locator("//a[normalize-space()='Login']");
        this.username= page.locator("#email");
        this.password = page.locator("#password");
        this.login =page.locator("input[value='Log in']");
    
    }

    async click(username,password)
{
    await this.page.goto("https://rahulshettyacademy.com/");
    await this.mainlogin.click();
    await this.username.fill(username);
    await this.password.fill(password);
    await this.login.click();
    // await this.page.wait(3000);    
}
}
module.exports = {Loginpage};