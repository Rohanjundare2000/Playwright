const {test,page}=require('@playwright/test')
test('verification of dynamic dropdown',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('pune',{delay:1000})
    await page.waitForSelector('.placeHolderMainText')
    const optionCount= await page.locator('.placeHolderMainText').count()
    for(let i=0;i<optionCount;i++)
    {
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if(text === 'kharadi'){
            await page.locator('.placeHolderMainText').nth(i).click()
            await page.pause()
            break
        }
    }
    await page.pause()
})