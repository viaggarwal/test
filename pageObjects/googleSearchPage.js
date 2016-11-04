/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, includes, expect, titlePromise, includes , element, $, then, $locatorRepeater, calenderInputData*/
/* The Page Object Representation of the Alarm Type Page.
 */
'use strict';
var locator = require('../library/Locator');
//**************************** Required web data*************************************//
var genericData = requireData('genericData'),
//**************************** Page Objects *************************************//
    googleSearchTextField=locatorXpath('//input[@id="lst-ib"]'),
    googleSearchButton= locatorXpath('//input[@name="btnK"]');




module.exports = {
    performGoogleSearch: function(searchText){
        actions.Get(genericData.Google.URL);
        /*actions.SetText(googleSearchTextField,"SearchText","Entering text in google search");
        Medium_Wait();
        actions.Click(googleSearchButton);*/
        //return requirePage('searchResultPage');
    }

};




