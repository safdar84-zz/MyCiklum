"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../PageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../PageObjects/angularHomePage");
const amazonlogin_1 = require("../PageObjects/amazonlogin");
const amazonaddtocart_1 = require("../PageObjects/amazonaddtocart");
const myCiklum_1 = require("../PageObjects/myCiklum");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
let addtoCart = new amazonaddtocart_1.addtocart();
let myciklum = new myCiklum_1.myCiklum();
let amazonsignin = new amazonlogin_1.amazonlogin();
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given('I will navigate to {string} Site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get('https://angularjs.org/');
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.Given('Amazon login page is opening', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("https://www.amazon.com/");
    yield amazonsignin.signinLink.click();
}));
cucumber_1.When('I input username, password and click on login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield amazonsignin.emailField.sendKeys("safdar1july21@gmail.com");
    yield amazonsignin.emailContinueBtn.click();
    yield amazonsignin.passwordField.sendKeys("Ciklum123");
}));
cucumber_1.Then('I should logout and redirect to homepage and I logout', () => __awaiter(void 0, void 0, void 0, function* () {
    yield amazonsignin.signinBtn.click();
    yield protractor_1.browser.actions().mouseMove(amazonsignin.signinLink).perform();
    protractor_1.browser.actions().mouseDown(amazonsignin.signoutLink).click();
    protractor_1.browser.sleep(5000);
}));
cucumber_1.Given('I will navigate to departments section amazon site', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    yield protractor_1.browser.get("https://www.amazon.com/");
    yield addtoCart.deptMenu.click();
}));
cucumber_1.When('I will navigate to Electronics section', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.actions().mouseMove(addtoCart.Electronics).click();
    protractor_1.browser.sleep(8000);
}));
cucumber_1.When('will select the Headphones tab', function () {
    return 'pending';
});
cucumber_1.Then('I will select the first item and i will add it to cart', function () {
    return 'pending';
});
let sickDays;
let incSickDays;
let oldSickDayCount;
let newSickDaysCount;
cucumber_1.Given('I will login to my ciklum site', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    yield protractor_1.browser.get("https://rc-my.ciklum.net/");
    yield myciklum.email.sendKeys("sra");
    yield myciklum.password.sendKeys("Ciklum456#");
    yield myciklum.signinBtn.click();
    protractor_1.browser.driver.manage().timeouts().implicitlyWait(10000);
}));
cucumber_1.Given('I will navigate to My Requests section in Planner module', () => __awaiter(void 0, void 0, void 0, function* () {
    yield myciklum.logo.click();
    yield myciklum.openPlannerBtn.click();
}));
cucumber_1.Given('I will collect value of my pending sick Days', () => __awaiter(void 0, void 0, void 0, function* () {
    sickDays = yield myciklum.pendingSickDays.getText();
    let sickDaysString = sickDays.toString();
    let sickDaysCount = sickDaysString.substr(0, 1);
    oldSickDayCount = +sickDaysCount;
}));
cucumber_1.When('I will click on new Request and select sick day and create Request', () => __awaiter(void 0, void 0, void 0, function* () {
    yield myciklum.logo.click();
    yield myciklum.createRequest.click();
    yield myciklum.requestDD.click();
    protractor_1.browser.sleep(3000);
    yield myciklum.sickDayOption.click();
    protractor_1.browser.sleep(5000);
    yield myciklum.requestSubmitBtn.click();
    protractor_1.browser.sleep(3000);
    yield myciklum.requestConfirmation.click();
    protractor_1.browser.sleep(5000);
    console.log("Previously, sick leaves were: " + sickDays);
}));
cucumber_1.Then('Count of pending leaves should be increamented', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.refresh();
    incSickDays = yield myciklum.updatedSickDays.getText();
    let incsickDaysString = incSickDays.toString();
    let incSickDaysCount = incsickDaysString.substr(0, 1);
    newSickDaysCount = +incSickDaysCount;
    console.log("Now Sick leaves are: " + incSickDaysCount);
    expect(newSickDaysCount).to.equal(oldSickDayCount + 1);
    protractor_1.browser.sleep(5000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELDJDQUF1RjtBQUN2RixvRUFBaUU7QUFDakUsNERBQXlEO0FBQ3pELG9FQUEwRDtBQUMxRCxzREFBbUQ7QUFFbkQsZ0RBQXdCO0FBR3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDNUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSwyQkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFHOUIsSUFBSSxZQUFZLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFHckMsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7SUFFN0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFFekQsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUFDO1FBRWpCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUUvRDtTQUFLLElBQUcsTUFBTSxJQUFFLFdBQVcsRUFBQztRQUU1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDNUM7QUFDRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBaUJKLGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN2RSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBRW5ELE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV0QixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUc5QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQTtBQUNULENBQUMsQ0FBQSxDQUFDLENBQUM7QUFNSCxnQkFBSyxDQUFDLDhCQUE4QixFQUFFLEdBQVMsRUFBRTtJQUMvQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5DLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxNQUFNLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzREFBc0QsRUFBRSxHQUFTLEVBQUU7SUFFcEUsTUFBTSxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLE1BQU0sWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFM0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx1REFBdUQsRUFBRSxHQUFTLEVBQUU7SUFFdEUsTUFBTSxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXJFLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV2QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBT0MsZ0JBQUssQ0FBQyxvREFBb0QsRUFBRSxHQUFTLEVBQUU7SUFFckUsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRW5DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsR0FBUyxFQUFFO0lBRXhELG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLGdDQUFnQyxFQUFFO0lBRXJDLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLHdEQUF3RCxFQUFFO0lBRTdELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBT04sSUFBSSxRQUFRLENBQUM7QUFDYixJQUFJLFdBQVcsQ0FBQztBQUNoQixJQUFJLGVBQWUsQ0FBQztBQUNwQixJQUFJLGdCQUFnQixDQUFDO0FBRXJCLGdCQUFLLENBQUMsZ0NBQWdDLEVBQUUsR0FBUyxFQUFFO0lBRWxELG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJTCxnQkFBSyxDQUFDLDBEQUEwRCxFQUFFLEdBQVMsRUFBRTtJQUV2RSxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRTVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLDhDQUE4QyxFQUFFLEdBQVEsRUFBRTtJQUUxRCxRQUFRLEdBQUcsTUFBTSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BELElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxJQUFJLGFBQWEsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxlQUFlLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFFdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvRUFBb0UsRUFBRSxHQUFTLEVBQUU7SUFFaEYsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFakMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEIsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3BCLE1BQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3BCLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUUsUUFBUSxDQUFDLENBQUM7QUFFOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxnREFBZ0QsRUFBRSxHQUFTLEVBQUU7SUFFNUQsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixXQUFXLEdBQUcsTUFBTSxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZELElBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9DLElBQUksZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxnQkFBZ0IsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUxQixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=