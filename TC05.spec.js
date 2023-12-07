//static
const {test} = require('@playwright/test')

test('Verify the static dropdown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    await page.locator('#superheros').selectOption('ta')
    await page.locator('#lang').selectOption('swift')
    await page.pause()
})

//dynamic dropdown
test('Verify the Dynyamic Dropdoen',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune',{delay:1000})
    await page.waitForSelector('.placeHolderMainText')
    const optionCount = await page.locator('.placeHolderMainText').count()
    console.log(optionCount)
    
    for(let i = 0 ;i < optionCount;i++){
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if(text === 'kharadi'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
     await page.pause()
})