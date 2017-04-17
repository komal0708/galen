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
    checkLayout(driver , "mynotes.gspec" , "desktop") 
});




afterTest(function()  {
	var driver = session.get('driver');
    driver.quit();

});


var devices = {
    mobile: {
        deviceName: "mobile" ,
        tags: ["mobile"],
        size: "500x600"
    },

    desktop: {
        deviceName: "desktop" ,
        tags: ["mobile"],
        size: "1024x768"
    }
};

forAll(devices , function () {
  test("Home page on ${deviceName}" , function (device) {
  var driver = session.get('driver');
  resize(driver, device.size);
  checkLayout(driver , "home_page.gspec" , driver.tags); 
  });


});