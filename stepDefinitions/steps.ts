import { Given, When, Then } from "cucumber";
import { calculator } from "../PageObjects/calculator";
import { browser, element, Browser, ExpectedConditions, WebElement } from "protractor";
import { angularHomePage } from "../PageObjects/angularHomePage";
import { amazonlogin } from "../PageObjects/amazonlogin";
import { addtocart} from "../PageObjects/amazonaddtocart";
import { myCiklum } from "../PageObjects/myCiklum";

import chai from "chai";
import { AssertionError } from "assert";
import { protractor } from "protractor/built/ptor";
var expect = chai.expect;
let calc = new calculator();
let ah = new angularHomePage();
let addtoCart = new addtocart();
let myciklum = new myCiklum();


let amazonsignin = new amazonlogin();


Given('I will navigate to Calc Site', async () => {
    // Write code here that turns the phrase above into concrete actions
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });

  Given('I will navigate to {string} Site', async (string) => {
     // Write code here that turns the phrase above into concrete actions
    if(string=="calc"){

     await browser.get('http://juliemr.github.io/protractor-demo/');

    }else if(string=="AngularJs"){

     await browser.get('https://angularjs.org/');
    }
   });

//  When('I clicked on header link', async()=>{
    
//      await ah.angularLink.click();
//  });
 

  // When ('you will navigate to angular page', async()=>{
  //        console.log("navigated to new page");
  // });
 
  // Then('you will enter {string} in search box', async(string)=>{
  //     await browser.sleep(3000);
  //     await ah.search.sendKeys(string);
  // });

  When('I add two numbers {string} and {string}', async (string, string2) => {
     await calc.firstEditBox.sendKeys(string);
     await calc.secondEditBox.sendKeys(string2);
  });
  Then('the output should be {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
      await calc.go.click();

      await calc.getResult.getText().then(function(text)
         {
 
         expect(text).to.equal(string);
         })
  });
//==================================================================================
  

//Amazon login and logout funcitionality

  Given('Amazon login page is opening', async () => {
    browser.waitForAngularEnabled(false);
     
      await browser.get("https://www.amazon.com/");
      await amazonsignin.signinLink.click();
          
  });

  When('I input username, password and click on login button', async () => {
    
      await amazonsignin.emailField.sendKeys("safdar1july21@gmail.com");
      await amazonsignin.emailContinueBtn.click();
      await amazonsignin.passwordField.sendKeys("Ciklum123");
      
  });

  Then('I should logout and redirect to homepage and I logout', async () => {

     await amazonsignin.signinBtn.click();
     await browser.actions().mouseMove(amazonsignin.signinLink).perform();
     
     browser.actions().mouseDown(amazonsignin.signoutLink).click();
     browser.sleep(5000);
     
  });
 

 //==================================================================================

      // Adding headphone to cart

      Given('I will navigate to departments section amazon site', async () => {
       
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize(); 
        await browser.get("https://www.amazon.com/");
        await addtoCart.deptMenu.click();

      });



      When('I will navigate to Electronics section', async () => {
        
        browser.actions().mouseMove(addtoCart.Electronics).click();
        browser.sleep(8000);
      });



      When('will select the Headphones tab', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });



      Then('I will select the first item and i will add it to cart', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });



// ================================================================================================

   //My Ciklum documented leave
   let sickDays;
   let incSickDays;
   let oldSickDayCount;
   let newSickDaysCount;

   Given('I will login to my ciklum site', async () => {
        
    browser.waitForAngularEnabled(false); 
        browser.driver.manage().window().maximize();
        await browser.get("https://rc-my.ciklum.net/");
        await myciklum.email.sendKeys("sra");
        await myciklum.password.sendKeys("Ciklum456#");
        await myciklum.signinBtn.click();
         browser.driver.manage().timeouts().implicitlyWait(10000);
    });



  Given('I will navigate to My Requests section in Planner module', async () => {

        await myciklum.logo.click();
        await myciklum.openPlannerBtn.click();
    
  });
 

  Given('I will collect value of my pending sick Days', async ()=> {
    
        sickDays = await myciklum.pendingSickDays.getText();
        let sickDaysString = sickDays.toString();
        let sickDaysCount = sickDaysString.substr(0,1);
        oldSickDayCount = +sickDaysCount;
        
  });

  When('I will click on new Request and select sick day and create Request', async () =>  {

        await myciklum.logo.click();
        await myciklum.createRequest.click();
        await myciklum.requestDD.click(); 
      //  await myciklum.vacationImage.click();
        browser.sleep(3000);
        
        await myciklum.sickDayOption.click();
        browser.sleep(5000);
       // await myciklum.vacationImage.sendKeys('D:\\download.jpg');
       // browser.sleep(3000);
        await myciklum.requestSubmitBtn.click();
        browser.sleep(3000);
      

        await myciklum.requestConfirmation.click();
        browser.sleep(5000);
      
        console.log("Previously, sick leaves were: " +sickDays);
        
  });


  Then('Count of pending leaves should be increamented', async () => {

        browser.refresh();
        incSickDays = await myciklum.updatedSickDays.getText();
        let incsickDaysString = incSickDays.toString();
        let incSickDaysCount = incsickDaysString.substr(0,1);
        newSickDaysCount = +incSickDaysCount;
        console.log("Now Sick leaves are: " +incSickDaysCount);
        expect(newSickDaysCount).to.equal(oldSickDayCount +1);
        browser.sleep(5000);
    
  });