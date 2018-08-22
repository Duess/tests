
function listInstalledBrowsers(){
//variable declaration
  var browser
  var currentCount = Browsers.Count
//loop to write individual installed browser information to log
    for (var i=0; i < Browsers.Count; i++)
    {
      browser = Browsers.Item(i)
      Log.Message("Browser " + aqConvert.IntToStr(i) + " : " + browser.Description)
    }

//writes to log total number of browsers so results can be compared
  Log.Message(currentCount)
  
}
