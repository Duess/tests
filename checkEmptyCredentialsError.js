


function EmptyFieldsError(){
//assigns url variable from URL table
 var url = ProjectSuite.Variables.URL.Item(0, 0);

//loop that closes all open browser instances 
   while (Sys.WaitBrowser().Exists)
     Sys.WaitBrowser().Close();
 
//opens Chrome and navigates to url variable
 Browsers.Item(btChrome).Run(url);

//define 'page' variable
 var page = Sys.Browser("*").Page("*");
 
//sequence of events to throw intended Password Field error message 
 page.NativeWebObject.Find("id", "Username", "input").SetText("");
 page.NativeWebObject.Find("id", "Password", "input").SetText("");
 page.NativeWebObject.Find("type", "submit", "button").ClickButton();
 
//define variables for error message authentication 
 var alertMessage = Aliases.browser.pageLogin.form.panelContainerFluid.panelContainer.panelRow.panelColXs3ColXsPush3;
 var alertText = alertMessage.contentText;
 var error = "The Username field is required. The Password field is required."
 
//statement  
  if (alertText !== error)
  {
    Log.Warning("Expected: " + error)
    Log.Warning("Actual: " + alertText)
    Runner.Halt("Something went wrong. Compare results with expected.");
    
  }
   else
  {
    Log.Checkpoint("Message Identification Successful: " + alertText)
    Sys.Browser().Close();
  }
}