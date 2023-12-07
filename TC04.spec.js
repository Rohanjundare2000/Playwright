const {test,expect}=require('@playwright/test')
test('verify the mouse dblclick action',async({page})=>{
   await  page.goto('https://demoqa.com/buttons')
   await page.locator("#doubleClickBtn").dblclick()
   await expect(page.locator('#doubleClickMessage')).toBeVisible()
   //await page.pause()
})

test('verify te mouse right click action',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({button:'right'})
    await expect(page.locator('#rightClickMessage')).toBeVisible
   // await page.pause()
    console.log("test pass")
})

test ('verify',async({page})=>{
   await page.goto('https://demoqa.com/menu')
   await page.getByText('Main Item 1')
   await page.getByText('SUB SUB LIST »').hover()
   await page.getByText('Sub Sub Item 2').click()
   await expect(page).toHaveURL('https://demoqa.com/menu#')
   console.log("test case pass")
})