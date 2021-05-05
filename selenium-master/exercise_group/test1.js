var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

/*  You have 45 minutes to complete all three of these tasks as a group
		Group Exercise 1:

		1. Access the To Do app at "https://loghen41.github.io"
		2. Click on the "About" link
		3. Confirm you are on the about page
		4. Click on the "Settings" link
		5. Change the app Settings to a different Background style and language
		6. Change the app settings back to the original background of bamboo and language of English
*/


driver.quit();
