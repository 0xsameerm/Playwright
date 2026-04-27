const {test, expect} = require('@playwright/test');


test('New test', async({page})=>{

const email = "mm6289350@gmail.com";
const productName = "ZARA COAT 3";
const products = page.locator(".card");
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("@RSclient093");
await page.locator("#login").click();

//Flaky
//await page.waitForLoadState('networkidle');

await page.locator(".card b").first().waitFor();
const titles = await page.locator(".card b").allTextContents();
console.log(titles);

const count = await products.count();
console.log(count);
for(let i=0; i<count ; ++i)
{
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
}

await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();

await page.locator("text=Checkout").click();

await page.locator("[placeholder*='Country']").pressSequentially("ind", {delay:100});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionscount = await dropdown.locator("button").count();

for(let i=0;i<optionscount;++i)
{

   const text = await dropdown.locator("button").nth(i).textContent();
    if(text === " India"){
        await dropdown.locator("button").nth(i).click();
        break;
    }
}
await page.locator(".action__submit").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderID);


})
