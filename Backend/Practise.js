// // const puppeteer = require("puppeteer");

// // (async () => {
// //   try {
// //     const browser = await puppeteer.launch({
// //       headless: false,
// //       defaultViewport: false,
// //       userDataDir: "./tmp",
// //     });
// //     const page = await browser.newPage();
// //     // const
// //     await page.goto(
// //       "https://www.flipkart.com/all/~cs-7fac62032f285fd41077836ef816b219/pr?sid=r18,f13&marketplace=FLIPKART&restrictLocale=true"
// //     );

// //     // Wait for some time to ensure the page loads fully
// //     // await page.waitForTimeout(5000);

// //     const productHandle = await page.$$("._13oc-S._1t9ceu");
// //     // console.log(productHandle,"A")
// //      let title;
// //      let price;
// //      let imgUrl;
// //     let ar = [];
// //     if (productHandle[0]) {
// //       for (let i = 0; i < productHandle.length; i++) {
        

// //             try {
// //                  title = await productHandle[i].evaluate(
// //                     (el) => el.querySelector("._2WkVRV")?.textContent
// //                   );
// //                 //   console.log(title);
                
// //             } catch (error) {
                
// //             }
// //             try {
                
// //            price = await productHandle[i].evaluate(
// //             (el) => el.querySelector("._30jeq3")?.textContent
// //           );
// //             //   console.log(price);
// //             } catch (error) {
                
// //             }
// //             try {
                
// //           imgUrl = await productHandle[i].evaluate((el) =>
// //           el?.querySelector("._2r_T1I").getAttribute("src")
// //         );
// //       //   console.log(imgUrl);
// //             } catch (error) {
                
// //             }

// //         ar.push({ title, price, imgUrl });
// //       }

// //       console.log(ar);
// //     }
// //     // await browser.close();
// //   } catch (error) {
// //     console.error("Error occurred:", error);
// //   }
// // })();




















// const puppeteer = require('puppeteer');

// (async()=>{
//     const browser=await puppeteer.launch({ headless: false,
//         defaultViewport: false});
//     const page=await browser.newPage();
//     await page.goto('https://www.youtube.com/');
//     await page.waitForSelector(" #search-input #search")
//     await page.type(" #search-input #search ","multiAman",{delay:100})
//     // await page.screenshot({path:`./youtubeBefore${Date.now()}.jpg`})
//     // await page.waitFor(5000);
//     await Promise.all([
//         page.waitForNavigation(),
//         page.click('#search-icon-legacy')

//     ])

//    let a= await page.waitForSelector('.yt-simple-endpoint.style-scope.ytd-video-renderer')
//     await page.screenshot({path:`./youtubeAfter${Date.now()}.jpg`})
//     const firstmatch = await page.$eval('.yt-simple-endpoint.style-scope.ytd-video-renderer',(e)=>{
//         return e.innerText;
//     })
//     console.log({firstmatch:firstmatch})
        
//     await Promise.all([page.click('.yt-simple-endpoint.style-scope.ytd-video-renderer')])


//     // await page.close();
// })();
