

function agreeTOS(){
//url for tos modal
    var url = ProjectSuite.Variables.URL.Item(0,0) + "/Admin/TermsOfUse"
//navigate to url
    Browsers.Item(btChrome).Run(url)
    
//variable declaration
    var page = Sys.Browser("*").Page("*")
//login actions
    page.NativeWebObject.Find("id", "Username", "input").SetText("at-ms1bva1")
    page.NativeWebObject.Find("id", "Password", "input").SetText("Password1")
    page.NativeWebObject.Find("type", "submit", "button").Click()
    Sys.Browser("*").WaitPage(url, 2500) //gives time to load
    
//declare title variables to compare against page title
    var tosTitle = "Terms of Use"
    var pageTitle = page.contentDocument.title
    
    if (pageTitle == tosTitle)
      {
        page.NativeWebObject.Find("id", "tosAgree", "input").Click()
        page.NativeWebObject.Find("id", "tosAgreeButton", "button").Click()
        Log.Message("Terms of Use Accepted")
      }
    if (pageTitle !== tosTitle)
    {
      Log.Message("Expected: " + tosTitle + " Actual: " + pageTitle)
    }
//closes browser window
    Sys.Browser("*").Close()
}

function cancelTOS(){
//url for tos modal
    var url = ProjectSuite.Variables.URL.Item(0,0) + "/Admin/TermsOfUse"
//navigate to url
    Browsers.Item(btChrome).Run(url)
    
//variable declaration
  var page = Sys.Browser("*").Page("*")
//login actions
  page.NativeWebobject.Find("id", "Username", "input").SetText("at-ms1bva1")
  page.NativeWebobject.Find("id", "Password", "input").SetText("Password1")
  page.NativeWebobject.Find("type", "submit", "button").Click()
  Sys.Browser("*").WaitPage(url, 2500)
//title variables
  var tosTitle = "Terms of Use"
  var loginTitle = "Login - MySynviscONE"
  var pageTitle = page.contentDocument.title
//checks to terms of use title is current page title then clicks cancel button
  if (pageTitle == tosTitle)
  {
    page.NativeWebObject.Find("id", "tosCancelButton", "button").Click()
    Log.Checkpoint("Terms of Use has been closed")
  }
  if (pageTitle == loginTitle)
  {
    Log.Message("Unable to navigate to Terms of Use. " + "Check login test values.")
  }
  
//closes browser window
  Sys.Browser("*").Close()
}