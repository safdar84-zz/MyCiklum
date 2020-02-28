
import { Before, After, Status } from "cucumber";
import { browser } from "protractor";





Before({tags: "@calculatortesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.driver.manage().window().maximize();

});

After({tags: "@calculatortesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("Test is completed");
  });

Before({tags: "@Angulartesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log("I need to execute first");
});

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log("Test is completed");
  if(scenario.result.status===Status.FAILED){
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot,"image/png");
  }
});
