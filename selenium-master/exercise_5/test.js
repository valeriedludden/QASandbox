var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

// Good job manually verifying the page has been updated, I wonder if there is a way we can automatically check that rather than making the page wait.
// Try finding a way to verify the inputs value, and have the system run the following command if it finds the right text: console.log("text found");

var input = By.className('fullInput');

driver.findElement(input).sendKeys('Write some Code').then( ()=> {
	driver.findElement(input).getAttribute("value").then((data) => {
		if( data == 'Write some Code'){
				console.log("found")
			}
		else{
				console.log("it no work")
			}
		})
});

driver.sleep(2000);
// console.log(driver.findElement(By.className('fullInput')));
//driver.quit();
