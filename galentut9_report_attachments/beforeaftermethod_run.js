load("mypages.js");



beforeTest(function ()  {
  var driver = createDriver("http://testapp.galenframework.com/" , "1024x768");
  session.put('driver' , driver);
});


test("My Notes Page" , function () {
    var driver = session.get('driver');
	var welPage = new WelcomePage(driver);
    welPage.loginButton.click();
    var logPage = new LoginPage(driver);
    logPage.username.typeText('testuser@example.com');
    logPage.password.typeText('test123');;
    logPage.button.click();
    
   throw new Error("Something went wrong");

    checkLayout(driver , "mynotes.gspec" , "desktop") 
});




afterTest(function()  {
	var driver = session.get('driver');

    if (test.isFailed()) {
        session.report().info("Screenshot").withAttachment("screenshot.png" , takeScreenshot(driver));
        // session.report().info("PageSource").withAttachment("pagesource.png" , driver.getPageSource());
    }
    driver.quit();

});


