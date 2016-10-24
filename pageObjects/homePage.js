/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, includes, expect, titlePromise, includes , element, $, then, $locatorRepeater, calenderInputData*/
/* The Page Object Representation of the Alarm Type Page.
 */
'use strict';

//**************************** Required web data*************************************//
var genericData = requireData('genericData'),
//**************************** Page Objects *************************************//
    mainMenuLocator = locatorRepeater('menuitem in menu.site');

module.exports = {
    openHome: function () {
        actions.Get(genericData.Sprague.URL);
        return requirePage('homePage');
    },
    selectMenuItem: function (menuName, subMenuName) {
        actions.moveMouseOnMenuItem(mainMenuLocator,menuName);
        Short_Wait();
        actions.Click(by.linkText(subMenuName),subMenuName);
        Medium_Wait();
        return requirePage('homePage');
    },
    getCustomersPage: function () {
        this.selectMenuItem("Customer", "Customers");
        Medium_Wait();
        return requirePage('customersPage');
    },
    getNewCustomerPage: function () {
        this.selectMenuItem("Customer", "New Customer");
        Medium_Wait();
        return requirePage('newCustomerPage');
    },
    getNewAccountPage: function () {
        this.selectMenuItem("Customer", "New Account");
        Medium_Wait();
        return requirePage('newAccountPage');
    }

};




