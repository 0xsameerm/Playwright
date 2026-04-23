const {test,expect} = require('@playwright/test');

test.only('Browser context playwright test', async({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#email');
    const password = page.locator('#password');
    const loginBtn = page.locator('[name="commit"]')
    
    await page.goto("https://sso.teachable.com/secure/9521/identity/login/password?force=true");
    console.log(await page.title());

    //Validating using incorrect credentials and capturing error message
    await userName.fill('sameer@gmail.com');
    await password.fill('password');
    await loginBtn.click();
    console.log(await page.locator('.text-with-icon').textContent());
    await expect(page.locator('.text-with-icon')).toContainText('incorrect');
});

test('Page playwright test', async({page})=>
{

    await page.goto("https://google.com");
    
    //page title assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    
});