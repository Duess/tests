

function LockedAccountError(){
//assigns url variable from URL table
 var url = ProjectSuite.Variables.URL.Item(0, 0);

//loop that closes all open browser instances 
   while (Sys.WaitBrowser().Exists)
     Sys.WaitBrowser().Close();
 
//opens Chrome and navigates to url variable
 Browsers.Item(btChrome).Run(url);

//define 'page' variable
 var page = Sys.Browser("*").Page("*");
 
//sequence of five bad login attemps to throw intended locked account message
  for (var i=0; i<6; i++)
  {   
      aqUtils.Delay(1000)
      page.NativeWebObject.Find("id", "Username", "input").SetText("at-locked1")
      page.NativeWebObject.Find("id", "Password", "input").SetText("password")
      page.NativeWebObject.Find("type", "submit", "button").ClickButton()
      i;
  }
 
//define variables for error message authentication 
 var alertMessage = Aliases.browser.pageLogin.form.panelContainerFluid.panelContainer.panelRow.panelColXs3ColXsPush3;
 var alertText = alertMessage.contentText;
 var error = "Your account has been locked as a result of too many failed login attempts. Please try again in 30 minutes or reset your password."
 
//statement  
  if (alertText !== error)
  {
    Log.Warning("Expected: " + error)
    Log.Warning("Actual: " + alertText)
    Runner.Halt("Something went wrong. Compare actual with expected.");
  }
   else
  {
    Log.Checkpoint("Message Identification Successful: " + alertText)
    Sys.Browser().Close();
  }
}