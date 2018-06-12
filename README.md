# Elulu

Elulu is the third king of the first dynasty of Ur, according to the Sumerian
King list.

This package shows how to create a simple Chrome Extension to Automate work flow

## Getting Started
### Downloading the Files

If you are comfortable with GitHub, you can run the command:
`git clone https://github.com/e2dubba/elulu.git` in the directory that you would like to work with the project.

Or you can select "Download the Zip", and unzip the file on your computer.


### Open the files with Atom (or other Text Editor)

After the file is extracted, open Atom, and select "Add File Project". Select the directory that contains the all of the subdirectories and files for the Chrome extension.

## The Anatomy of a Chrome Extension

A Chrome extension must have a few components. The following sections out line the essential files for loading a Chrome Extension.

### The Manifest.json

This json file gives Chrome the needed information on where to find the necessary files, and what permissions the browser will allow the extension to access.

* `browser_action`: This provides links to both the icon that will display in the browser window as well as the html file that the page will load
* `icons`: These are the Icons that are on the `chrome://extensions` page, as well as on the extensions web store.
* `background`: If you want your chrome extension to do something outside of the popup.html, you need to specify a background page.
* `commands`: These are commands that can be accessed outside of the popup window. (Keyboard shortcuts can be modified in the extensions settings)
* `permissions`: These are the different types of permissions that the browswer will allow your extension to have access to. We will only be using three: the two related to the clipboard and the active tab.

### The Popup.html

The Chrome will not allow any execution of javascript inside of an html file, so all scripts have to be sourced. 
