const {test, expect} = require('@playwright/test');


test('New test', async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.locator('#userEmail').fill("mm6289350@gmail.com");
await page.locator('#userPassword').fill('@RSclient093');
await page.locator('#login').click();

//Flaky
//await page.waitForLoadState('networkidle');

await page.locator('.card b').first().waitFor();
const titles = await page.locator('.card b').allTextContents();
console.log(titles);

})
