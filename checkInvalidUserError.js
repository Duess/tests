
function InvalidUserError(){ 

//assigns url variable from URL table
 var url = ProjectSuite.Variables.URL.Item(0, 0);

//closes all open browser instances 

   while (Sys.WaitBrowser().Exists)
     Sys.WaitBrowser().Close();
 
//opens Chrome and navigates to url variable
 Browsers.Item(btChrome).Run(url);

//defining 'page' variable to be used in the next sequence
 var page = Sys.Browser("*").Page("*");

 
//sequence of events to throw intended 'Invalid User' error 
 page.NativeWebObject.Find("id", "Username", "input").SetText("at-ms1a1");
 page.NativeWebObject.Find("id", "Password", "input").SetText("password");
 page.NativeWebObject.Find("type", "submit", "button").ClickButton();
 
 
//define variables for error message authentication 
 var alertMessage = Aliases.browser.pageLogin.form.panelContainerFluid.panelContainer.panelRow.panelColXs3ColXsPush3;
 var alertText = alertMessage.contentText;
 var error = "The username or password is incorrect / Invalid User."
 
//statement to authenticate error message 
  if (alertText !== error)
  {
    Log.Warning("Expected Message: " + error)
    Log.Warning("Actual Message: " + alertText)
    Runner.Halt("Something went wrong. Compare actual with expected.");
  }
   else
  {
    Log.Checkpoint("Message Identification Successful:  " + alertText)
    Sys.Browser().Close();
  }
  
}