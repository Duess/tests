
//USEUNIT closeBrowsers

function loginMS1()
{
// starts by closing all open browsers
closeAllOpenBrowsers()

// -----global variables/declarations-----
  url = ProjectSuite.Variables.User.URL(1)
  un = ProjectSuite.Variables.User.UN(1)
  pw = ProjectSuite.Variables.User.PW(1)
//------end declarations------------------

// prompts user for username they would like to test with
// defaults to admin account for that brand
  var promptedUN = BuiltIn.InputBox("MS1-UAT", "Enter username you would like to use", un)

  Browsers.Item(btFirefox).Run(url) // opens browser & navigates to url defined in above variable
   Sys.Browser().BrowserWindow(0).Maximize() // maximizes the browser once open
  var page = Sys.Browser("*").Page("*") // defines page variable to be used throughout test

//-------------------begin login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(promptedUN) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 3500) //gives time to load page
//-------------------end login actions------------------------

//declarations for expected & actual page titles
  titleHome = "MySynviscONE"
  getTitle = page.contentDocument.title
  
  
  while (getTitle !== titleHome)
    {
      aqUtils.Delay(1000)
    }

}


function loginT1()
{
closeAllOpenBrowsers()

// -----global variables/declarations-----
  url = ProjectSuite.Variables.User.URL(4)
  un = ProjectSuite.Variables.User.UN(4)
  pw = ProjectSuite.Variables.User.PW(4)
//------end declarations------------------

// prompts user for username they would like to test with
// defaults to admin account for that brand
  var promptedUN = BuiltIn.InputBox("T1-UAT", "Enter username you would like to use", un)

  Browsers.Item(btFirefox).Run(url) // opens browser & navigates to url defined in above variable
   Sys.Browser().BrowserWindow(0).Maximize() // maximizes the browser once open
  var page = Sys.Browser("*").Page("*") // defines page variable to be used throughout test

//-------------------begin login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(promptedUN) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 3500) //gives time to load page
//-------------------end login actions------------------------

//declarations for expected & actual page titles
  titleHome = "ThyrogenONE"
  getTitle = page.contentDocument.title
  
//check to make sure user is currently on home page 
  if (getTitle !== titleHome)
    {
     Runner.Halt("Something went wrong with the login, please check test")
    }
  else
    {
     Log.Checkpoint(promptedUN + " has successfully reached homepage")
    }
}


function loginXDC()
{
closeAllOpenBrowsers()

// -----global variables/declarations-----
  url = ProjectSuite.Variables.User.URL(7)
  un = ProjectSuite.Variables.User.UN(7)
  pw = ProjectSuite.Variables.User.PW(7)
//------end declarations------------------

// prompts user for username they would like to test with
// defaults to admin account for that brand
  var promptedUN = BuiltIn.InputBox("XDC-UAT", "Enter username you would like to use", un)

  Browsers.Item(btChrome).Run(url) // opens browser & navigates to url defined in above variable
   Sys.Browser().BrowserWindow(0).Maximize() // maximizes the browser once open
  var page = Sys.Browser("*").Page("*") // defines page variable to be used throughout test

//-------------------begin login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(promptedUN) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 3500) //gives time to load page
//-------------------end login actions------------------------

//declarations for expected & actual page titles
  titleHome = "Endo Advantage"
  getTitle = page.contentDocument.title
  
//check to make sure user is currently on home page 
  if (getTitle !== titleHome)
    {
     Runner.Halt("Something went wrong with the login, please check test")
    }
  else
    {
     Log.Checkpoint(promptedUN + " has successfully reached homepage")
    }
}

function loginXPD()
{
closeAllOpenBrowsers()

// -----global variables/declarations-----
  url = ProjectSuite.Variables.User.URL(10)
  un = ProjectSuite.Variables.User.UN(10)
  pw = ProjectSuite.Variables.User.PW(10)
//------end declarations------------------

// prompts user for username they would like to test with
// defaults to admin account for that brand
  var promptedUN = BuiltIn.InputBox("XPD-UAT", "Enter username you would like to use", un)

  Browsers.Item(btChrome).Run(url) // opens browser & navigates to url defined in above variable
   Sys.Browser().BrowserWindow(0).Maximize() // maximizes the browser once open
  var page = Sys.Browser("*").Page("*") // defines page variable to be used throughout test

//-------------------begin login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(promptedUN) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 3500) //gives time to load page
//-------------------end login actions------------------------

//declarations for expected & actual page titles
  titleHome = "Endo Advantage"
  getTitle = page.contentDocument.title
  
//check to make sure user is currently on home page 
  if (getTitle !== titleHome)
    {
     Runner.Halt("Something went wrong with the login, please check test")
    }
  else
    {
     Log.Checkpoint(promptedUN + " has successfully reached homepage")
    }
}


function loginCIM()
{
closeAllOpenBrowsers()

// -----global variables/declarations-----
  url = ProjectSuite.Variables.User.URL(13)
  un = ProjectSuite.Variables.User.UN(13)
  pw = ProjectSuite.Variables.User.PW(13)
//------end declarations------------------

// prompts user for username they would like to test with
// defaults to admin account for that brand
  var promptedUN = BuiltIn.InputBox("CIMplicity-UAT", "Enter username you would like to use", un)

  Browsers.Item(btEdge).Run(url) // opens browser & navigates to url defined in above variable
   Sys.Browser().BrowserWindow(0).Maximize() // maximizes the browser once open
  var page = Sys.Browser("*").Page("*") // defines page variable to be used throughout test

//-------------------begin login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(promptedUN) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 3500) //gives time to load page
//-------------------end login actions------------------------

//declarations for expected & actual page titles
  titleHome = "CIMplicity"
  getTitle = page.contentDocument.title
  
//check to make sure user is currently on home page 
  if (getTitle !== titleHome)
    {
     Runner.Halt("Something went wrong with the login, please check test")
    }
  else
    {
     Log.Checkpoint(promptedUN + " has successfully reached homepage")
    }
}


function loginAV()
{
closeAllOpenBrowsers()

// -----global variables/declarations-----
  url = ProjectSuite.Variables.User.URL(16)
  un = ProjectSuite.Variables.User.UN(16)
  pw = ProjectSuite.Variables.User.PW(16)
//------end declarations------------------

// prompts user for username they would like to test with
// defaults to admin account for that brand
  var promptedUN = BuiltIn.InputBox("Aveed-UAT", "Enter username you would like to use", un)

  Browsers.Item(btEdge).Run(url) // opens browser & navigates to url defined in above variable
   Sys.Browser().BrowserWindow(0).Maximize() // maximizes the browser once open
  var page = Sys.Browser("*").Page("*") // defines page variable to be used throughout test

//-------------------begin login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(promptedUN) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 4500) //gives time to load page
//-------------------end login actions------------------------

//declarations for expected & actual page titles
  titleHome = "Endo Advantage"
  getTitle = page.contentDocument.title
  
//check to make sure user is currently on home page 
  if (getTitle !== titleHome)
    {
     Runner.Halt("Something went wrong with the login, please check test")
    }
  else
    {
     Log.Checkpoint(promptedUN + " has successfully reached homepage")
    }
}


function loginMAC()
{
closeAllOpenBrowsers()

// -----global variables/declarations-----
  url = ProjectSuite.Variables.User.URL(18)
  un = ProjectSuite.Variables.User.UN(18)
  pw = ProjectSuite.Variables.User.PW(18)
//------end declarations------------------

// prompts user for username they would like to test with
// defaults to techsupport account for MAC brand due to fax-only submissions
  var promptedUN = BuiltIn.InputBox("CareConnect-UAT", "Enter username you would like to use", un)

  Browsers.Item(btChrome).Run(url) // opens browser & navigates to url defined in above variable
   Sys.Browser().BrowserWindow(0).Maximize() // maximizes the browser once open
  var page = Sys.Browser("*").Page("*") // defines page variable to be used throughout test

//-------------------begin login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(promptedUN) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 3500) //gives time to load page
//-------------------end login actions------------------------

// declarations for expected & actual page titles
  titleHome = "CareConnect"
  getTitle = page.contentDocument.title
  
// check to make sure user is currently on home page 
  if (getTitle !== titleHome)
    {
     Runner.Halt("Something went wrong with the login, please check test")
    }
  else
    {
     Log.Checkpoint(promptedUN + " has successfully reached homepage")
    }
}