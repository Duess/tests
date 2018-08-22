

//USEUNIT closeBrowsers
//USEUNIT login
//USEUNIT navigatePagesMS1
page = Sys.Browser("*").Page("*") //defines page variable to be used throughout test
  
function addSinglePatient(){

  loginMS1() // calls login function
  navigatePatients() // calls function to navigate to patients
  
  var promptFirstName = BuiltIn.InputBox("Patient First Name", "Please enter patient first name", "default")
  var promptLastName = BuiltIn.InputBox("Patient Last Name", "Please enter patient last name", "default")
  page.NativeWebObject.Find("id", "AddNewPatient", "a").Click()
    aqUtils.Delay(2000) //gives time for modal to load
    
  var verifyAddPatientModal = page.NativeWebObject.Find("id", "AddPatient", "div").Exists
// verfies the add patient modal is open
   if (verifyAddPatientModal !== true)
    {
     Runner.Halt("Add Patient modal not open")
    }
   else
    {
     Log.Event("Add Patient modal opened successfully")
    }
    
    
}

function addPatientMS1()
{
//  loginMS1() // calls login function

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


   
// --------begin loop to add patients---------
  var i = 0; // number is starting point within the variables table
  while (i < 25) // number indicates stopping point in variables table
  {
    page.NativeWebObject.Find("id", "AddNewPatient", "a").Click()
    aqUtils.Delay(2000) //gives time for modal to load

   var verifyAddPatientModal = page.NativeWebObject.Find("id", "AddPatient", "div").Exists
// verfies the add patient modal is open
   if (verifyAddPatientModal !== true)
    {
     Runner.Halt("Add Patient modal not open")
    }
   else
    {
     Log.Event("Add Patient modal opened successfully")
    }


// --------begin patient demographic fields-------------
  page.NativeWebObject.Find("id", "LastName", "input").SetText(ProjectSuite.Variables.Patients.LastName(i))

  page.NativeWebObject.Find("id", "FirstName", "input").SetText(ProjectSuite.Variables.Patients.FirstName(i))
  
  page.NativeWebObject.Find("id", "Mrn", "input").SetText(ProjectSuite.Variables.Patients.Mrn(i))
// clicks month dropdown
  page.NativeWebObject.Find("id", "BirthMonth_chosen", "div").Click()
    page.NativeWebObject.Find("id", "BirthMonth_chosen", "div").Keys(ProjectSuite.Variables.Patients.Month(i))
    page.NativeWebObject.find("id", "BirthMonth_chosen", "div").Keys("[Enter]")
// clicks day dropdown and then selects the day
  page.NativeWebObject.Find("id", "BirthDay_chosen", "div").Click()  
    page.NativeWebObject.Find("id", "BirthDay_chosen", "div").Keys(ProjectSuite.Variables.Patients.Day(i))
    page.NativeWebObject.find("id", "BirthDay_chosen", "div").Keys("[Enter]")
// enters year
  page.NativeWebObject.Find("id", "BirthYear", "input").Keys(ProjectSuite.Variables.Patients.Year(i))
  
// phone number
  page.NativeWebObject.Find("id", "Phone", "input").SetText(ProjectSuite.Variables.Patients.Phone(i))
  
  page.NativeWebObject.Find("id", "AddressLine1", "input").SetText(ProjectSuite.Variables.Patients.Address1(i))
  page.NativeWebObject.Find("id", "City", "input").SetText(ProjectSuite.Variables.Patients.City(i))
// always selects pennsylvania as state
    page.NativeWebObject.Find("id", "State_chosen", "div").Click()
    page.Keys("Penn")
    page.Keys("[Enter]")
    page.NativeWebObject.Find("id", "Zip", "input").SetText(ProjectSuite.Variables.Patients.ZIP(i))
// -------------end patient demographic fields--------------------
  
// ------------begin primary insurance fields-------------------
  page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys(ProjectSuite.Variables.PriIns.PrimaryPayer(i))
    page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys("[Down]")
    page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys("[Enter]")
    
  page.NativeWebObject.Find("id", "PrimarySegmentId_chosen", "div").Click()
    page.Keys("[Enter]")
  page.NativeWebObject.Find("id", "PrimaryGroup", "input").SetText(ProjectSuite.Variables.PriIns.PriGroupId(i))
  page.NativeWebObject.Find("id", "PrimaryManualMemberId", "input").SetText(ProjectSuite.Variables.PriIns.PriMemberId(i))
// ------------end primary insurance fields---------------------  

  i++; //increments the variable

// submits the patient data as long as there are no errors
  page.NativeWebObject.Find("type", "submit", "button").Click()
  aqUtils.Delay(500)
  }
// ----------end loop to add patients-------------------
}


function addPatientT1()
{
// logs user into T1
loginT1()

  navigatePatients() // finds & clicks patients nav-link

   
// --------begin loop to add patients---------
  var i = 0; // number is starting point within the variables table
  while (i < 5) // number indicates stopping point in variables table
  {
    page.NativeWebObject.Find("id", "AddNewPatient", "a").Click()
    aqUtils.Delay(2000) //gives time for modal to load

   var verifyAddPatientModal = page.NativeWebObject.Find("id", "AddPatient", "div").Exists
// verfies the add patient modal is open
   if (verifyAddPatientModal !== true)
    {
     Runner.Halt("Add Patient modal not open")
    }
   else
    {
     Log.Event("Add Patient modal opened successfully")
    }


// --------begin patient demographic fields-------------
  page.NativeWebObject.Find("id", "LastName", "input").SetText(ProjectSuite.Variables.Patients.LastName(i))

  page.NativeWebObject.Find("id", "FirstName", "input").SetText(ProjectSuite.Variables.Patients.FirstName(i))
  
  page.NativeWebObject.Find("id", "Mrn", "input").SetText(ProjectSuite.Variables.Patients.Mrn(i))
// clicks month dropdown
  page.NativeWebObject.Find("id", "BirthMonth_chosen", "div").Click()
    page.NativeWebObject.Find("id", "BirthMonth_chosen", "div").Keys(ProjectSuite.Variables.Patients.Month(i))
    page.NativeWebObject.find("id", "BirthMonth_chosen", "div").Keys("[Enter]")
// clicks day dropdown and then selects the day
  page.NativeWebObject.Find("id", "BirthDay_chosen", "div").Click()  
    page.NativeWebObject.Find("id", "BirthDay_chosen", "div").Keys(ProjectSuite.Variables.Patients.Day(i))
    page.NativeWebObject.find("id", "BirthDay_chosen", "div").Keys("[Enter]")
// enters year
  page.NativeWebObject.Find("id", "BirthYear", "input").Keys(ProjectSuite.Variables.Patients.Year(i))
  
// phone number
  page.NativeWebObject.Find("id", "Phone", "input").SetText(ProjectSuite.Variables.Patients.Phone(i))
  
  page.NativeWebObject.Find("id", "AddressLine1", "input").SetText(ProjectSuite.Variables.Patients.Address1(i))
  page.NativeWebObject.Find("id", "City", "input").SetText(ProjectSuite.Variables.Patients.City(i))
// always selects pennsylvania as state
    page.NativeWebObject.Find("id", "State_chosen", "div").Click()
      page.Keys("Penn")
      page.Keys("[Enter]")
    page.NativeWebObject.Find("id", "Zip", "input").SetText(ProjectSuite.Variables.Patients.ZIP(i))
// -------------end patient demographic fields--------------------
  
// ------------begin primary insurance fields-------------------
  page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys(ProjectSuite.Variables.PriIns.PrimaryPayer(i))
    page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys("[Down]")
    page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys("[Enter]")
    
  page.NativeWebObject.Find("id", "PrimaryManualMemberId", "input").SetText(ProjectSuite.Variables.PriIns.PriMemberId(i))
// ------------end primary insurance fields---------------------  

  i++; //increments the variable

// submits the patient data as long as there are no errors
  page.NativeWebObject.Find("type", "submit", "button").Click()
  aqUtils.Delay(500)
  }
// ----------end loop to add patients-------------------
}


function addPatientXDC()
{
// logs user into XDC
loginXDC()

// finds & clicks patients nav-link
  page.NativeWebObject.Find("data-navigationtype", "PATIENTS", "a").Click()
  aqUtils.Delay(1200) //allows time for page to load
// validates user is on patient/patientcenter page
  urlPatients = (url + "/Patient/PatientCenter")
  getURL = page.contentDocument.URL
  if (urlPatients !== getURL)
   {
    Runner.Halt("User is not in Patient Center")
   }
  else
   {
    Log.Event("User successfully navigated to Patient Center")
   }

   
// --------begin loop to add patients---------
  var i = 0; // number is starting point within the variables table
  while (i < 3) // number indicates stopping point in variables table
  {
    page.NativeWebObject.Find("id", "AddNewPatient", "a").Click()
    aqUtils.Delay(2000) //gives time for modal to load

   var verifyAddPatientModal = page.NativeWebObject.Find("id", "AddPatient", "div").Exists
// verfies the add patient modal is open
   if (verifyAddPatientModal !== true)
    {
     Runner.Halt("Add Patient modal not open")
    }
   else
    {
     Log.Event("Add Patient modal opened successfully")
    }


// --------begin patient demographic fields-------------
  page.NativeWebObject.Find("id", "LastName", "input").SetText(ProjectSuite.Variables.Patients.LastName(i))

  page.NativeWebObject.Find("id", "FirstName", "input").SetText(ProjectSuite.Variables.Patients.FirstName(i))
  
  page.NativeWebObject.Find("id", "Mrn", "input").SetText(ProjectSuite.Variables.Patients.Mrn(i))
// clicks month dropdown
  page.NativeWebObject.Find("id", "BirthMonth_chosen", "div").Click()
    page.NativeWebObject.Find("id", "BirthMonth_chosen", "div").Keys(ProjectSuite.Variables.Patients.Month(i))
    page.NativeWebObject.find("id", "BirthMonth_chosen", "div").Keys("[Enter]")
// clicks day dropdown and then selects the day
  page.NativeWebObject.Find("id", "BirthDay_chosen", "div").Click()  
    page.NativeWebObject.Find("id", "BirthDay_chosen", "div").Keys(ProjectSuite.Variables.Patients.Day(i))
    page.NativeWebObject.find("id", "BirthDay_chosen", "div").Keys("[Enter]")
// enters year
  page.NativeWebObject.Find("id", "BirthYear", "input").Keys(ProjectSuite.Variables.Patients.Year(i))
  
// phone number
  page.NativeWebObject.Find("id", "Phone", "input").SetText(ProjectSuite.Variables.Patients.Phone(i))
  
  page.NativeWebObject.Find("id", "AddressLine1", "input").SetText(ProjectSuite.Variables.Patients.Address1(i))
  page.NativeWebObject.Find("id", "City", "input").SetText(ProjectSuite.Variables.Patients.City(i))
// always selects pennsylvania as state
    page.NativeWebObject.Find("id", "State_chosen", "div").Click()
    page.Keys("Penn")
    page.Keys("[Enter]")
    page.NativeWebObject.Find("id", "Zip", "input").SetText(ProjectSuite.Variables.Patients.ZIP(i))
// -------------end patient demographic fields--------------------
  
// ------------begin primary insurance fields-------------------
  page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys(ProjectSuite.Variables.PriIns.PrimaryPayer(i))
    page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys("[Down]")
    page.NativeWebObject.Find("id", "PrimaryCarrier", "input").Keys("[Enter]")
    
  page.NativeWebObject.Find("id", "PrimaryManualMemberId", "input").SetText(ProjectSuite.Variables.PriIns.PriMemberId(i))
// ------------end primary insurance fields---------------------  

  i++; //increments the variable

// submits the patient data as long as there are no errors
  page.NativeWebObject.Find("type", "submit", "button").Click()
  aqUtils.Delay(500)
  }
// ----------end loop to add patients-------------------
}

