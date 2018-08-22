

function closeAllOpenBrowsers()
{
// this will close all browsers
 while (Sys.WaitBrowser("*").Exists)
   {
    Sys.Browser("*").Close()
   }
}