
var welPage = new WelcomePage(driver);
welPage.loginButton.click();

var logPage = new LoginPage(driver);
logPage.waitForIt();

logPage.username.typeText('testuser@example.com');
logPage.password.typeText('test123');;
logPage.button.click();