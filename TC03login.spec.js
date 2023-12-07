const{test,expect}=require('@playwright/test')
test("verify the login functionality with valid credentials",async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[id="user-name"]').fill('standard_user')
    await page.locator('input[id="password"]').fill('secret_sauce')
    await page.locator('input[id="login-button"]').click()
    await expect(page.locator('div[class="inventory_item_name"]').first()).toBeVisible();
    await expect(page.locator())
})