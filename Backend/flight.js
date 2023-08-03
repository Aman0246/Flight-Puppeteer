const { fdatasyncSync } = require('fs-extra');
const puppeteer = require('puppeteer');
(async()=>{
    const browser=await puppeteer.launch({ headless: false,
        defaultViewport: false});
        const page=await browser.newPage();
        await page.goto('https://www.google.com/travel/flights');
        await page.waitForSelector('.V00Bye.ESCxub.KckZb')

// source
await Promise.all([
    await page.waitForSelector('.Maqf5d'),
    await page.waitForSelector('.RLVa8.GeHXyb'),
    await page.click('.RLVa8.GeHXyb'),
])
await page.waitForSelector('.VfPpkd-rymPhb.r6B9Fd.bwNLcf.P2Hi5d.VfPpkd-OJnkse')
await page.waitForSelector('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.vg4Z0e > div:nth-child(1) > div.SS6Dqf.POQx1c > div.AJxgH > div > div.Maqf5d > div.RLVa8.GeHXyb > div > div > div > div.VfPpkd-xl07Ob-XxIAqe.VfPpkd-xl07Ob.VfPpkd-YPmvEd.s8kOBc.dmaMHc.VfPpkd-xl07Ob-XxIAqe-OWXEXe-uxVfW-FNFY6c-uFfGwd.VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c > ul > li:nth-child(3)')
const firstmatch =  await page.click('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.vg4Z0e > div:nth-child(1) > div.SS6Dqf.POQx1c > div.AJxgH > div > div.Maqf5d > div.RLVa8.GeHXyb > div > div > div > div.VfPpkd-xl07Ob-XxIAqe.VfPpkd-xl07Ob.VfPpkd-YPmvEd.s8kOBc.dmaMHc.VfPpkd-xl07Ob-XxIAqe-OWXEXe-uxVfW-FNFY6c-uFfGwd.VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c > ul > li:nth-child(3)')

await page.waitForSelector('.MCs1Pd.UbEQCe.VfPpkd-OkbHre.VfPpkd-OkbHre-SfQLQb-M1Soyc-bN97Pc.VfPpkd-aJasdd-RWgCYc-wQNmvb.ib1Udf.VfPpkd-rymPhb-ibnC6b.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-M1Soyc-Bz112c.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc'),
await page.waitForSelector('.VfPpkd-TkwUic.VfPpkd-ksKsZd-mWPk3d-OWXEXe-AHe6Kc-XpnDCe.VfPpkd-ksKsZd-mWPk3d')
// await page.screenshot({path:`./fligh${Date.now()}.jpg`})

let a= await page.waitForSelector('.II2One.j0Ppje.zmMKJ.LbIaRd')
        // Remove the old value from the input field
    await page.evaluate(() => {
        const inputField = document.querySelector('.II2One.j0Ppje.zmMKJ.LbIaRd');
        inputField.value = '';
    });
    await page.type('.II2One.j0Ppje.zmMKJ.LbIaRd',"Delhi")
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve,300)));
    //---------------------------------
      //selecting first option
    try {
       await page.waitForSelector(".DFGgtd")
        await page.click(".n4HaVc.sMVRZe.pIWVuc")

           
       } catch (error) {
        
       }
//Destination   and  selecting first Option
try {
    await page.waitForSelector(".e5F5td.vxNK6d")
    await page.click(".e5F5td.vxNK6d")
    await page.type('.e5F5td.vxNK6d',"Mumbai")
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve,300)));
    await page.waitForSelector('.n4HaVc.sMVRZe.pIWVuc')
    await page.click(".n4HaVc.sMVRZe.pIWVuc")
    
} catch (error) {
    
}

//Date selection
await page.click('.TP4Lpb.eoY5cb.j0Ppje');
await page.waitForSelector(".Bc6Ryd.ydXJud")


let months='December'
try {
    await page.waitForSelector(".Bc6Ryd.ydXJud")
    await page.waitForSelector('.BgYkof.B5dqIf.qZwLKe')
    let allMonths = await page.$$eval('.BgYkof.B5dqIf.qZwLKe', elements => elements.map(element => element.textContent));
    let finds= allMonths.includes(months)
console.log(finds)
console.log(allMonths)
    let currentmonth = await page.$eval('.BgYkof.B5dqIf.qZwLKe', elements => elements.textContent);
    console.log("currentmonth", currentmonth);
    
    let indedofFind=allMonths.findIndex(month => month === months)
    // clicking Right =>
    if(currentmonth != months){
        let initial=1
        while(initial<indedofFind){
            console.log(initial<indedofFind)
            await page.waitForSelector('.d53ede.rQItBb.FfP4Bc.Gm3csc')
            await page.click ('.d53ede.rQItBb.FfP4Bc.Gm3csc')
            await page.evaluate(() => new Promise((resolve) => setTimeout(resolve,300)));
            console.log("currentmonth",currentmonth)
            initial++
        }
    }
    // clicking on Date 
    let date=20
    //getting all innerHtml
    let singleDate=await page.$$eval(`#ow81 > div.ZGEB9c.yRXJAe.P0ukfb.icWGef.bgJkKe.BtDLie.iWO5td > div > div.rj7qGc.ksI2Bc.P0ukfb > div.qxcyof.RNniQb > div > div > div.SJyhnc > div >  div:nth-child(${indedofFind+1}) > div:nth-child(3) > div > div`,elements => elements.map(elements => elements.innerHTML))
    //Chalange to get Selector for clicking throuh innerHTML
     // took first inner HTml
    const targetInnerHTML = singleDate[date-1]; 
    //again running all innerHtml
     const elements = await page.$$(`#ow81 > div.ZGEB9c.yRXJAe.P0ukfb.icWGef.bgJkKe.BtDLie.iWO5td > div > div.rj7qGc.ksI2Bc.P0ukfb > div.qxcyof.RNniQb > div > div > div.SJyhnc > div >  div:nth-child(${indedofFind+1}) > div:nth-child(3) > div > div`); 
    // console.log("elements",elements)
    let targetElement = null;
    for (const element of elements) {
        const innerHTML = await element.evaluate(el => el.innerHTML);
  if (innerHTML === targetInnerHTML) {
    targetElement = element;
    break;
  }
}
if (targetElement) {
    //final Click on Date
  await targetElement.click();
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve,300)));
  //click Search Done Button
  await page.click('#ow81 > div.ZGEB9c.yRXJAe.P0ukfb.icWGef.bgJkKe.BtDLie.iWO5td > div > div.akjk5c.FrVb0c > div.WXaAwc')
  //Click on Search
  await page.click('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.vg4Z0e > div:nth-child(1) > div.SS6Dqf.POQx1c > div.MXvFbd > div > button > div.VfPpkd-Jh9lGc')
  
} else {
  console.log('Element not found.');
}

} catch (error) {
    console.log(error)
}
//Taking Data of All flights
await page.evaluate(() => new Promise((resolve) => setTimeout(resolve,1000)));
let allFlightData=await page.$$eval('.Rk10dc > li > div > div.yR1fYc > div.mxvQLc.ceis6c.uj4xv.uVdL1c.A8qKrc > div.OgQvJf.nKlB3b > div.Ir0Voe > div.sSHqwe.tPgKwe.ogfYpf > div.sSHqwe.tPgKwe.ogfYpf ',options => options.map(option => option.textContent))
console.log(allFlightData)

})();