
const{test,expect}=require('@playwright/test')
test('verification of the filechoose button',async({page})=>{

    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    page.on('dialog',async simpleAltert=>{
        await console.log(simpleAltert.message())
        await expect(simpleAltert.message()).toContain('You need to select a file to upload!')
        await expect(simpleAltert.type()).toContain('alert')
        await simpleAltert.accept()
    })
    await page.locator('#myFile').setInputFiles('')
    await page.locator('#submit-button').click()
})