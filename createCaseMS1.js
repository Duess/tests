

//USEUNIT login
//USEUNIT addPatient
//USEUNIT navigatePagesMS1
//USEUNIT values

page = Sys.Browser("*").Page("*")
url = ProjectSuite.Variables.User.URL(1)


function createCase(){

    navigateNewCase() // calls function for user to navigate to case
    
  var i = 0
 while (i < 5)
 {
  var keyPatientName = (ProjectSuite.Variables.Patients.LastName(i) + ProjectSuite.Variables.Patients.FirstName(i)) 
// populates patients last name, first name into find patient field
  page.NativeWebObject.Find("id", "FindPatient", "input").Keys(keyPatientName)
    aqUtils.Delay(800) // gives time for list to load
    page.Keys("[Down]") // down arrows to patient
    page.Keys("[Enter]") // selects the patient from list
// clicks prescriber dropdown
  page.NativeWebObject.Find("id", "PrescriberDropDown_chosen", "div").Click()
    aqUtils.Delay(100) // gives time for list to load
    page.Keys("[Down]") // down arrows to first prescriber
    page.Keys("[Enter]") // selects prescriber from list
// -----new case patient-----
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseInsurance", 1200) // gives time for page to load
// -----new case insurance------
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-xs btn-wide", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseMedication", 1200) // gives time for page to load
// -----new case medication-----
  var product = Project.Variables.CaseMedication.Product(i)
  page.NativeWebObject.Find("data-ProductName", product, "a").Click()
  page.NativeWebObject.Find("id", "CptCodeDropdown_chosen", "div").Click()
    page.Keys("[Down]") // down arrows to cpt code 
    page.Keys("[Enter]")
  var dcValue = Project.Variables.CaseMedication.DiagnosisCode(i)
  var knee = Project.Variables.CaseMedication.Knee(i)
  page.NativeWebObject.Find("id", "DiagnosisCodeDropDown_chosen", "div").Click() // clicks dropdown
    page.NativeWebObject.Find("data-option-array-index", dcValue, "li").Click() //clicks value from variable
  page.NativeWebObject.Find("value", knee, "input").Click() // clicks knee radio button
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click() // clicks next
  Sys.WaitBrowser(url + "/Case/NewCaseFulfillment", 1200)
  
  createPBB()
  getCaseIdFromURL()
  i++ // increments variable for loop
  }
}

function createPBB(){

// -----new case fulfillment-----
  page.NativeWebObject.Find("data-servicetype", "PRIOR_AUTHORIZATION", "input").ClickChecked(cbUnchecked) // unchecks prior auth checkbox
  page.NativeWebObject.Find("data-servicetype", "SPECIALTY_PHARMACY_TRIAGE", "input").ClickChecked(cbUnchecked) // unchecks spt checkbox
  page.NativeWebObject.Find("id", "NewCaseFulfillmentNextButton", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseSummary", 1200)
// -----new case summary------
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/CaseHistory?caseId*", 2500)
// check to ensure user is on case history of the created case
  var getCaseURL = page.contentDocument.URL
  aqObject.CompareProperty(getCaseURL, cmpContains, "/Case/CaseHistory?caseId=", false, 2)

}

function createPBBWithPA(){
  // -----new case fulfillment-----
  page.NativeWebObject.Find("data-servicetype", "PRIOR_AUTHORIZATION", "input").ClickChecked(cbChecked)
  page.NativeWebObject.Find("data-servicetype", "SPECIALTY_PHARMACY_TRIAGE", "input").ClickChecked(cbUnchecked)
  page.NativeWebObject.Find("id", "NewCaseFulfillmentNextButton", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCasePriorAuthorization", 1500)
// prior auth questions
  page.NativeWebObject.Find("id", "PatientHadPastSodiumHyaluronateTreatmentsYes", "input").Click()
  page.NativeWebObject.Find("id", "WhichKneeWasTreatedRight", "input").Click()
  page.NativeWebObject.Find("id", "PriorAuthorizationHasBeenObtainedNo", "input").Click()
  page.NativeWebObject.Find("id", "WhichKneeWasTreatedRight", "input").Click()
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseSummary", 1500)
// -----new case summary------
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/CaseHistory?caseId*", 2500)
// check to ensure user is on case history of the created case
  var getCaseURL = page.contentDocument.URL
  aqObject.CompareProperty(getCaseURL, cmpContains, "/Case/CaseHistory?caseId=", false, 2)

}

function createPBBSPP(){
  // -----new case fulfillment-----
  page.NativeWebObject.Find("data-servicetype", "PRIOR_AUTHORIZATION", "input").ClickChecked(cbUnchecked)
  page.NativeWebObject.Find("data-servicetype", "SPECIALTY_PHARMACY_TRIAGE", "input").ClickChecked(cbChecked)
  page.NativeWebObject.Find("id", "NewCaseFulfillmentNextButton", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseSummary", 1200)
// -----new case summary------
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/CaseHistory?caseId*", 2500)
// check to ensure user is on case history of the created case
  var getCaseURL = page.contentDocument.URL
  aqObject.CompareProperty(getCaseURL, cmpContains, "/Case/CaseHistory?caseId=", false, 2)
}

function createPBBSPPWithPA(){
  // -----new case fulfillment-----
  page.NativeWebObject.Find("data-servicetype", "PRIOR_AUTHORIZATION", "input").ClickChecked(cbUnchecked)
  page.NativeWebObject.Find("data-servicetype", "SPECIALTY_PHARMACY_TRIAGE", "input").ClickChecked(cbChecked)
  page.NativeWebObject.Find("id", "NewCaseFulfillmentNextButton", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseSummary", 1200)
// -----new case summary------
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/CaseHistory?caseId*", 2500)
// check to ensure user is on case history of the created case
  var getCaseURL = page.contentDocument.URL
  aqObject.CompareProperty(getCaseURL, cmpContains, "/Case/CaseHistory?caseId=", false, 2)
}
function createSPP(){
// -----new case fulfillment-----
  page.NativeWebObject.Find("id", "specialtyPharmacy", "input").Click()
  aqUtils.Delay(250)
  page.NativeWebObject.Find("id", "NewCaseFulfillmentNextButton", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseSummary", 1200)
// -----new case summary------
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/CaseHistory?caseId*", 2500)
// check to ensure user is on case history of the created case
  var getCaseURL = page.contentDocument.URL
  aqObject.CompareProperty(getCaseURL, cmpContains, "/Case/CaseHistory?caseId=", false, 2)

}


function createSPP_PA(){
// -----new case fulfillment-----
  page.NativeWebObject.Find("id", "specialtyPharmacy", "input").Click()
  aqUtils.Delay(250)
  page.NativeWebObject.Find("data-servicetype", "PRIOR_AUTHORIZATION", "input").ClickChecked(cbChecked)
  page.NativeWebObject.Find("id", "NewCaseFulfillmentNextButton", "button").Click()
  Sys.WaitBrowser(url + "/Case/NewCaseSummary", 1200)
// -----new case summary------
  page.NativeWebObject.Find("class", "btn btn-accent btn-lozenge btn-wide btn-xs", "button").Click()
  Sys.WaitBrowser(url + "/Case/CaseHistory?caseId*", 2500)
// check to ensure user is on case history of the created case
  var getCaseURL = page.contentDocument.URL
  aqObject.CompareProperty(getCaseURL, cmpContains, "/Case/CaseHistory?caseId=", false, 2)

}

function createPAP(){
  


}