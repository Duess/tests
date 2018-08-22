
page = Sys.Browser("*").Page("*")

function getCaseIdFromURL(){
// this function is for pulling the case id from the url after case creation
  var getCaseURL = page.contentDocument.URL 
  var posStart = 0 // position to start removing characters
  var posEnd = (aqString.Find(getCaseURL, "=", 0, false) + 1) // position to end char removal
  var urlCaseId = aqString.Remove(getCaseURL, posStart, posEnd) // assigns result to variable
  Log.Message("Case ID : " + urlCaseId) // posts result to log
  
}