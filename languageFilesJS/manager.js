// JavaScript Document
res.lang = "fr";

var globalResourcePath = "Global_Resources";
var resourceFiles = [];

var currentFile = globalResourcePath + "\\default" + res.lang + ".js" ;

if(!IsFileExist(currentFile))
    currentFile = globalResourcePath + "\\default.js" ;
if(!IsFileExist(currentFile)) throw new Exception("File Not Found");

resourceFiles.push(currentFile);

// Push parent folder on folder into folder
foreach(var folder in var en)
{
    currentFile = folder + "\\Local_Resource\\default." + res.lang + ".js";

    if(!IsExist(currentFile))
        currentFile = folder + "\\Local_Resource\\default.js";
    if(!IsExist(currentFile)) throw new Exception("File Not Found");

    resourceFiles.push(currentFile);
}

for(int i = 0; i < resourceFiles.length; i++) { Load.js(resourceFiles[i]); }

// Get current page name
var pageNameWithoutExtension = "SomePage";

currentFile = currentPageFolderPath + pageNameWithoutExtension + res.lang + ".js" ;

if(!IsExist(currentFile))
    currentFile = currentPageFolderPath + pageNameWithoutExtension + ".js" ;
if(!IsExist(currentFile)) throw new Exception("File Not Found");