const puppeteer = require('puppeteer');

const scrappigData= async(req,res)=>{
    try {
        
        console.log(req.body)

        const { months , date }=req.body
        
        if(!months || !date){return res.send({status:false,message:'empty field'})}
    
        const browser=await puppeteer.launch({ headless:"new",
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
    
     await page.waitForSelector('.II2One.j0Ppje.zmMKJ.LbIaRd')
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
            return res.send({status:'false',message:'Data not Found'})
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
        return res.send({status:'false',message:'Data not Found'})
    }
    
    //Date selection
    await page.click('.TP4Lpb.eoY5cb.j0Ppje');
    await page.waitForSelector(".Bc6Ryd.ydXJud")
    //months
    try {
        await page.waitForSelector(".Bc6Ryd.ydXJud")
        await page.waitForSelector('.BgYkof.B5dqIf.qZwLKe')
        let allMonths = await page.$$eval('.BgYkof.B5dqIf.qZwLKe', elements => elements.map(element => element.textContent));
        let finds= allMonths.includes(months)
        if(finds== -1)  return res.send({status:'false',message:'Month not Found'})
    // console.log(finds)
    // console.log(allMonths)
        let currentmonth = await page.$eval('.BgYkof.B5dqIf.qZwLKe', elements => elements.textContent);
        // console.log("currentmonth", currentmonth);
        
        let indedofFind=allMonths.findIndex(month => month === months)
        // clicking Right =>
        if(currentmonth != months){
            let initial=1
            while(initial<indedofFind){
                console.log(initial<indedofFind)
                await page.waitForSelector('.d53ede.rQItBb.FfP4Bc.Gm3csc')
                await page.click ('.d53ede.rQItBb.FfP4Bc.Gm3csc')
                await page.evaluate(() => new Promise((resolve) => setTimeout(resolve,300)));
                initial++
            }
        }
        // clicking on Date 
    
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
      
      return res.send({status:'false',message:'Data not Found'})
    }
    
    } catch (error) {
        return res.send({status:'false',message:'Data not Found'})
    }
    //Taking Data of All flights
    await page.waitForSelector('.PSZ8D.EA71Tc')
    await page.waitForSelector('.Ep1EJd')
    await page.waitForSelector('.FXkZv')
    await page.waitForSelector('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.PSZ8D.EA71Tc > div.FXkZv > div:nth-child(4)')
    let getListofFlight=await page.$$('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.PSZ8D.EA71Tc > div.FXkZv > div:nth-child(4) > ul > li')
    let dataofFlight=[]
    await page.waitForSelector('ul > li > div > div.yR1fYc > div > div.OgQvJf.nKlB3b > div.U3gSDe.ETvUZc > div.BVAVmf.I11szd.POX3ye > div.YMlIz.FpEdX > span')
    let ticketPrice=await page.$$eval('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.PSZ8D.EA71Tc > div.FXkZv > div:nth-child(4) > ul > li > div > div.yR1fYc > div > div.OgQvJf.nKlB3b > div.U3gSDe.ETvUZc > div.BVAVmf.I11szd.POX3ye > div.YMlIz.FpEdX > span',elements =>{ return elements.map(element => element.textContent)})
    let  flightname=await page.$$eval('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.PSZ8D.EA71Tc > div.FXkZv > div:nth-child(4) > ul > li > div > div.yR1fYc > div > div.OgQvJf.nKlB3b > div.Ir0Voe > div.sSHqwe.tPgKwe.ogfYpf',elements =>{ return elements.map(element => element.textContent)})
    
    let flightinfo= await page.$$eval('#yDmH0d > c-wiz.zQTmif.SSPGKf > div > div:nth-child(2) > c-wiz > div.cKvRXe > c-wiz > div.PSZ8D.EA71Tc > div.FXkZv > div:nth-child(4) > ul > li > div > div.yR1fYc > div > div.OgQvJf.nKlB3b > div.Ir0Voe > div.zxVSec.YMlIz.tPgKwe.ogfYpf > span.mv1WYe',elements =>{ return elements.map(element => element.textContent)}) 
    
    
    
    try {
        for(let i=0;i<getListofFlight.length;i++){      
            
             dataofFlight.push({flightname:flightname[i],ticketPrice:ticketPrice[i],flightinfo:flightinfo[i]})
        }
        
    } catch (error) {
        return res.send({status:'false',message:'Data not Found'}) 
    }
    console.log("dataofFlight",dataofFlight)
    res.send({status:true,message:'Flight data',data:dataofFlight})
    
    

    await browser.close()



    
} catch (error) {
    console.log("error",error)
    res.send({status:false,message:`Flight data crashed:: ${error}`})
}

}

module.exports={scrappigData}