const {test, expect, request} = require("@playwright/test")
const loginpayload = {userEmail:"test159@gmail.com", userPassword: "Hello123"}

test.beforeAll( async ()=>{

    const context = await request.newContext();
    context.post("https://rahulshettyacademy.com/client/auth/login", 
        {
            data: loginpayload
        })


});

test.beforeEach( ()=>{

});


test("Client App login", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await signbtn.click();
    
    console.log(await cardtitle.nth(1).textContent());
    console.log(await cardtitle.first().textContent());
    const alltitles = await cardtitle.allTextContents();
    console.log(alltitles);
    
})