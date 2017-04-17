this.WelcomePage = $page("WelcomePage" , {
  loginButton: ".button-login"
});

this.LoginPage = $page("LoginPage" , {
  username: "input[name='login.username']" ,
  password: "input[name='login.password']" ,
  button: ".button-login"
});

var welPage = new WelcomePage(driver);
welPage.loginButton.click();

var logPage = new LoginPage(driver);
logPage.waitForIt();

logPage.username.typeText('testuser@example.com');
logPage.password.typeText('test123');;
logPage.button.click();