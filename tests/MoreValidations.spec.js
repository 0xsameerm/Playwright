const {test, expect} = require('@playwright/test');

test("More validations", async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//await page.goto("https://google.com");

//navigate back
//await page.goBack();

//navigate forward
//await page.goForward();

await expect(page.locator("#displayed-text")).toBeVisible();
page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

//Java/Javascript alert popups
page.on('dialog',dialog => dialog.accept());
await page.locator("#confirmbtn").click();

//Hover 
await page.locator("#mousehover").hover();

//working with frames
//const framesPage = page.frameLocator("#courses-iframe");
//await framesPage.locator("li a[href*='lifetime-access']:visible").click();

//const textCheck = await page.locator(".text h2").textContent();
//console.log(textCheck.split(" ")[1]);

})