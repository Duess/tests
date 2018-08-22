

//USEUNIT login

page = Sys.Browser("*").Page("*")
url = ProjectSuite.Variables.User.URL(1)


function navigatePatients(){
// finds and clicks patients nav link
  page.NativeWebObject.Find("data-navigationtype", "PATIENTS", "a").Click()
  Sys.WaitBrowser(url + "/Patient/PatientCenter", 2500) //allows time for patients to load
// validates user is on patient/patientcenter page
  var urlPatients = (url + "/Patient/PatientCenter")
  var getURL = page.contentDocument.URL
  if (urlPatients !== getURL)
   {
    Runner.Halt("User is not in Patient Center")
   }
  else
   {
    Log.Event("User successfully navigated to Patient Center")
   }

}

function navigateCases(){
// this test will create a physician buy-n-bill case within ms1
  page.NativeWebObject.Find("data-navigationtype", "CASES", "a").Click()
  aqUtils.Delay(1200) // gives little time for the cases page to load
  
// checks to ensure user has reached the cases page
  var urlCases = (url + "/Case/Cases")
  var getURL = page.contentDocument.URL
    if (getURL !== urlCases)
      {
        Runner.Halt("User not currently on cases page")
      }
    else
      {
        Log.Event("User has reached the cases page")
      }
}


function navigateNewCase(){
    
  page.NativeWebObject.Find("data-navigationtype", "NEW_CASE", "a").Click()
  aqUtils.Delay(1200) // gives little time for new case page to load
// checks to ensure the user has reached the create new case page  
  var urlNewCase = (url + "/Case/NewCasePatient")
  var getURL = page.contentDocument.URL
    if (getURL !== urlNewCase)
      {
        Runner.Halt("User not currently on create new case page")
      }
    else
      {
        Log.Event("User has reached the create new case page")
      }

}
