

function closeAllBrowsers(){
//loop to close open browsers
  while (Sys.WaitBrowser("*").Exists)
      Sys.Browser("*").Close()  
}

function login(){
// -----global variables-----  
  url = ProjectSuite.Variables.User.URL(1)
  un = ProjectSuite.Variables.User.UN(1)
  pw = ProjectSuite.Variables.User.PW(1)
//---------------------------
  
//navigates to url defined in above variable
  Browsers.Item(btFirefox).Run(url)
  page = Sys.Browser("*").Page("*")

  
//-------------------login actions----------------------
  page.NativeWebObject.Find("id", "Username", "input").SetText(un) //username field
  page.NativeWebObject.Find("id", "Password", "input").SetText(pw) //password field value
  page.NativeWebObject.Find("type", "submit", "button").Click() //clicks login
  Sys.Browser("*").WaitPage(url, 2000) //gives time to load page
//------------------------------------------------------
}

function userMenu(){
//hover over the username to display menu
  Aliases.browser.page.header.panelContainerHasNavUser.panelRow.NavUser.textnodeUsername.HoverMouse()
//clicks administration
  Aliases.browser.page.header.panelContainerHasNavUser.panelRow.NavUser.lnkUserAdmin.Click()
  aqUtils.Delay(2000) //provides time for the admin panel to load

  var getURL = page.contentDocument.URL
  var expectedURL = url + "/Admin/Administration"
  
  if (getURL != expectedURL){
    Log.Message("Does not appear the user is in administration")
    Log.Message("Expected URL: " + expectedURL)
    Log.Message("Current URL: " + getURL)
    }
  else 
  {
    Log.Event("User: " + un + " is currently on Practice Details within Administration")
  }
 
}

function verifyPracticeFields()
 {
//declarations to be used in this function and others
  browser = Sys.Browser("*")
  body = browser.Page("*").contentDocument.body
  var domtag
  var fieldName = "Name:"
  var fieldAddress = "Address:"
  var fieldCity = "City:"
  var fieldState = "State:"
  var fieldZIP = "ZIP Code:"
  var fieldPhone = "Phone:"
  var fieldFax = "Fax:"
  var fieldContact = "Contact Name:"
  
//determines if test is using IE and adjusts tag it is looking for
  if (browser.ObjectIdentifier == "iexplore")
      var domtag = "innerText"
  else
      var domtag = "textContent"
//checks if page contains text 'Name:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldName, false) !== true)
    Log.Warning(fieldName + " label not present")
//checks if page contains text 'Address:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldAddress, false) !== true)
    Log.Warning(fieldAddress + " label not present")
//checks if page contains text 'City:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldCity, false) !== true)
    Log.Warning(fieldCity + " label not present")
//checks if page contains text 'State:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldState, false) !== true)
    Log.Warning(fieldState + " label not present")
//checks if page contains text 'ZIP Code:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldZIP, false) !== true)
    Log.Warning(fieldZIP + " label not present")
//checks if page contains text 'Phone:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldPhone, false) !== true)
    Log.Warning(fieldPhone + " label not present")
//checks if page contains text 'Fax:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldFax, false) !== true)
    Log.Warning(fieldPhone + " label not present")
//checks if page contains text 'Contact Name:'
  if (aqObject.CheckProperty(body, domtag, cmpContains, fieldContact, false) !== true)
    Log.Warning(fieldContact + " label not present")

 }
 
 
function checkPrescribers(){
//looks for the prescribers link and clicks
  page.NativeWebObject.Find("data-navigationtype", "PRESCRIBERS", "a").Click()
  
//determines if test is using IE and adjusts tag it is looking for
  if (browser.ObjectIdentifier == "iexplore")
      var domtag = "innerText"
  else
      var domtag = "textContent"
//checks page for add prescriber text within button
//if text is found, it is indication that user is on the admin/prescribers page 
  if (aqObject.CheckProperty(body, domtag, cmpContains, "Add Prescriber", false) !== true)
    Log.Warning("Not on Prescriber page")

 }
 
function checkAdminUsers(){
//looks for the users link and clicks
  page.NativeWebObject.Find("data-navigationtype", "USERS", "a").Click()

//determines if test is using IE and adjusts tag it is looking for
  if (browser.ObjectIdentifier == "iexplore")
      var domtag = "innerText"
  else
      var domtag = "textContent"
//checks page for add user text within button
//if text is found, it is indication that user is on the admin/users page 
  if (aqObject.CheckProperty(body, domtag, cmpContains, "Add User", false) !== true)
    Log.Warning("Not on Users page")

 }

function checkAdminClinics(){
//looks for the clinics link and clicks
  page.NativeWebObject.Find("data-navigationtype", "CLINICS", "a").Click()

//determines if test is using IE and adjusts tag it is looking for
  if (browser.ObjectIdentifier == "iexplore")
      var domtag = "innerText"
  else
      var domtag = "textContent"
//checks page for add clinic text within button
//if text is found, it is indication that user is on the admin/clinics page 
  if (aqObject.CheckProperty(body, domtag, cmpContains, "Add Clinic", false) !== true)
    Log.Warning("Not on Clinics page")
  else
    Log.Event("Navigation to Admin/Clinics page successful")


 }

function runAllFunc(){
//closes any browsers currently open
  closeAllBrowsers()
//login for user
  login()
    Log.Event("Login test has completed")
//navigates user to administration
  userMenu()
    Log.Event("navigate to Administration completed")
//verify fields on practice details page
  verifyPracticeFields()
    Log.Event("Practice Details test complete")
//navigate to prescribers
  checkPrescribers()
//navigates to users and verfies it is on that page
  checkAdminUsers()
//checkAdminClinics
  checkAdminClinics()
//logout
  Browsers.CurrentBrowser.Navigate(url + "/Auth/Logout")
//closes any browsers currently open
  closeAllBrowsers()
}