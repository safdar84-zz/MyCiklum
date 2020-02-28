import {browser, by, element} from "protractor"; 
import { calculator } from "./PageObjects/calculator";
import { angularHomePage } from "./PageObjects/angularHomePage";
let calc = new calculator();


describe('Chain locators demo',function() {  
	
	
	it('Open Angular js website',async()=> {
		

		
		await browser.get('http://juliemr.github.io/protractor-demo/');
		
		await calc.firstEditBox.sendKeys("3");
		await calc.secondEditBox.sendKeys("5");
			
		await calc.go.click();

	calc.getResult.getText().then(function(text)
			{
		
		console.log(text);
			})
			
			
		//	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
			
	})
	it('Angular home page title validation', async () => {
        let ah = new angularHomePage();
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");

    })
})