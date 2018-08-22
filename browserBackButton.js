

function unoBrowserBackButton(){
//one approach to scripting out the back button within browser
//this 
  var page = Sys.Browser("*").Page("*")
  page.contentDocument.Script.eval("history.back()")
  Delay(1000)

}

function dosBrowserBackButton(){
//second approach to scripting out the back within the browser
//this uses the keyboard keys
  var page = Sys.Browser("*").Page("*")
  page.Keys("~[Left]")

}

