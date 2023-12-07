const{test,expect}=require('@playwright/test')
test('Verification of the dropdown',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box6').dragTo(await page.locator('#box106'))
    await expect(page.locator('#box6')) .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})
