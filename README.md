# Elulu

Elulu is the third king of the first dynasty of Ur, according to the
Sumerian King list.

This package shows how to create a simple Chrome Extension to Automate
work flow. The purpose is to walk through the process of making a
chrome extension and some of the problems involved in that.

## Getting Started

I would suggest using [Atom](https://atom.io/) as the Text editor. I
would also recommend installing [emmet](https://atom.io/),
[ide-typescript](https://atom.io/packages/ide-typescript), and I like
[vim-mode-plus](https://atom.io/packages/vim-mode-plus) which is a very
excellent implementation for vi-navigation in Atom.

## Downloading the Files

If you are comfortable with GitHub, you can run the command:
`git clone https://github.com/e2dubba/elulu.git` in the directory that
you would like to work with the project.

Or you can select "Download the Zip", and unzip the file on your
computer.


### Open the files with Atom (or other Text Editor)

After the file is extracted, open Atom, and select "Add File Project".
Select the directory that contains the all of the subdirectories and
files for the Chrome extension.

## The Anatomy of a Chrome Extension

A Chrome extension must have a few components. The following sections
outline the essential files for loading a Chrome Extension.

### The Manifest.json

This json file gives Chrome the needed information on where to find the
necessary files, and what permissions the browser will allow the
extension to access. [See the Chrome
documentation](https://developer.chrome.com/extensions/manifest)

* `browser_action`: This provides links to both the icon that will
display in the browser window as well as the html file that the page
will load
* `icons`: These are the Icons that are on the `chrome://extensions`
page, as well as on the extensions web store.  
* `background`: If you want your chrome extension to do something
outside of the popup.html, you need to specify a background page.
* `commands`: These are commands that can be accessed outside of the
popup window. (Keyboard shortcuts can be modified in the extensions
settings)
* `permissions`: These are the different types of permissions that the
browser will allow your extension to have access to. We will only be
using three: the two related to the clipboard and the active tab.

### The Popup.html

Chrome will not allow any execution of javascript inside of an html
file, so all scripts have to be sourced in an external file. The
`popup.html`, as defined in `default_popup`, is the html page that will
show up when you click on the icon in the browser window.
For our project we have a simple HTML page, that is only showing a text
box and a search button.
This page also sources the two javascript files the extension relies on.

### The Popup.js

Chrome only gives the popup access to certain parts of the browser. For
many of the actions that a Chrome Extension would want, it is necessary
to pass things between the background.html page and the popup. Chrome
has built message handling functions for handling this messaging ([see
the official Chrome
documentation](https://developer.chrome.com/extensions/messaging)).
Chrome has additional Browser Object Model (BOM) functions that can
also be found on the developer documentation.

### The Style Directory

Like any html page, the Popup.html (or any associated pages with the
extension), can also source CSS files. They will not be sourced in this
tutorial, but there is a directory for it.

## Testing the Extension

To test this extension go to `chrome://extensions` in your Web Browser,
enable developer mode (the on/off toggle on the right hand of the
page), and then click on the option "Load Unpacked Extension".
A few things to point out on this page are the toggle for turning the
extension on and off, the reload icon, and the background page link.
Chrome extensions can be hard to debug, but having access to the
background page, and the dev tools for that makes it a little bit
easier.

### Running a Search in Google Translate

Does it work to run a search in Google Translate? This is handled by
the function that begins on line 9 in the popup.js. The BOM specific
part of this is the `chrome.tabs.create` option.

Does it work to access the clipboard, if you do not type anything in to
the text box?

### Enabling Keyboard Shortcuts

To enable keyboard shortcuts, go back to the tab:
`chrome://extensions`. On the top left there is a hamburger menu, click
on the "Keyboard shortcuts" inside that menu.

Here you can (re)assign keyboard shortcuts that were called out in the
`manifest.json`. The functions themselves need to be defined in the
javascript that is called from the `backgroung.html` page. In this
extension, that is the `src/eventpage.js`.


## Projects To Work on

- [ ] Create a button that will change the page to the dbpedia.org
page, if the current page is a wikipedia page.
http://dbpedia.org/page/Karl_Barth for
https://en.wikipedia.org/wiki/Karl_Barth. And maybe even
https://de.wikipedia.org/wiki/Karl_Barth.
- [ ] Add a keyboard shortcut function that will open up a new tab with
search results in Wikipedia, duckduckgo, or worldcat.org based on what
was in the clipboard.
- [ ] Create a help page with a button that links to it from the
popup.html
- [ ] Edit the style and html of the popup.html
- [ ] Any other functionality that you would like to add?
