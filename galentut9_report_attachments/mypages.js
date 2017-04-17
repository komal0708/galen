

this.WelcomePage = $page("WelcomePage" , {
  loginButton: ".button-login"
});

this.LoginPage = $page("LoginPage" , {
  username: "input[name='login.username']" ,
  password: "input[name='login.password']" ,
  button: ".button-login",


  loginasuser: function(uname,pass) {
  	this.username.typeText(uname);
    this.password.typeText(pass);
    this.button.click();

  }
});



