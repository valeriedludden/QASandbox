describe("fsCalc",  () => {
    beforeAll( () => {
        //Navigate to https://fs-calc.herokuapp.com
        browser.get('https://fs-calc.herokuapp.com');
        element(by.name('email')).sendKeys('ctdalton')
        element(by.name('password')).sendKeys('asdfasdf')
        element(by.className('loginButton')).click();
        //Login using the credentials: ctdalton, asdfasdf
    });
    beforeEach( () => {
        //Click on Basic Calculator link
        //Click on Start New Calculation button
    });
    afterAll( () => {
        //Logout of app using the My Account menu
        //You may have to use an Expected Condition here
    });
    it("should have the correct title (Food Storage Calculator)",  () => {

    });
    it("should go to the correct URL (/basicCalc)",  () => {

    });
    describe("Family Information", () => {

        it("should start on the Family Information page (check for correct input elements)", () => {

        });
        it("should disable the Continue button by default",  () => {

        });
        it("should enable the Continue button when all Family Information fields are valid",  () => {

        });
        it("should show an error when Number of Adults is greater than 99 or less than 1", () => {

        });
        it("should show an error when Adult Calories per day is greater than 99999 or less than 1", () => {

        });
        it("should clear all errors when all inputs are valid", () => {

        });
        it("should continue to the Calorie Breakdown page when the form is valid and the Continue button is clicked", () => {

        });
    });
    describe('Calorie Breakdown', () => {
        beforeEach(() => {
            // Enter valid inputs into the Family Information page, and click continue
        });
        it('should have a total of 100%', () => {

        });
        it('should have default values of 64, 12, 9, 5, and 10 respectively', () => {

        });
        it('should remain at a total of 100% when any value is adjusted', () => {

        });
        it('should show the original default when any value is adjusted', () => {

        });
    });
});