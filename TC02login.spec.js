const {test,expect}=require('@playwright/test')

test("verfify the login functionality with the valid credentials",async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator('input[placeholder="Username"]').fill('Admin')
await page.locator('input[placeholder="Password"]').fill('admin123')
await page.locator('button[type="submit"]').click()
await page.pause()
await expect(page.locator('p[class="oxd-text oxd-text--p"]').first()).toBeVisible()
})