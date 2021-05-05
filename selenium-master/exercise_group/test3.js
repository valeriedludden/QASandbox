var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');



function newList(name){

	driver.findElement(By.className('fullInput')).sendKeys(name);

	driver.findElement(By.className('fullButton')).click();


}

function newTask(name){

	driver.findElement(By.id('fullInput_2')).sendKeys(name);

	driver.findElement(By.id('fullButton_2')).click();


}

for (let i = 0; i < 3; i++) {
	newList('shop' + i);
}

driver.findElement(By.id('edit_0')).click();
driver.findElement(By.id('editInput_0')).sendKeys('Edited List');
driver.findElement(By.className('editInputButton')).click().then(() => {
	let list = driver.findElement(By.xpath('//*[@id="element_2"]/div[1]/span'));
	list.click()
});

driver.sleep(3000).then(() => {
	for (let i = 0; i < 3; i++) {
		newTask('element' + i);
	}
	// driver.findElement(By.id('complete_0')).click();
	// driver.findElement(By.id('complete_1')).click();
	// driver.findElement(By.id('clear_2')).click();
});







/*  You have 45 minutes to complete all three of these tasks as a group
		Group Exercise 3:

		1. Access the To Do app at "https://loghen41.github.io"
		2. Create 3 new lists
		3. Edit the name of the first list to something other than what you originally named it
		5. Enter into the third list that you created
		6. Add 3 tasks to the list
		7. Mark the first two tasks as being completed
		8. Clear all completed tasks
		9. Return to the lists page and mark the first and last list as completed
		10. Clear all completed lists

*/
driver.sleep(10000);

driver.quit();
