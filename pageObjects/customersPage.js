/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, includes, expect, titlePromise, includes , element, $, then, $locatorRepeater, calenderInputData*/
/* The Page Object Representation of the Alarm Type Page.
 */
'use strict';

//**************************** Required web data*************************************//
var genericData = requireData('genericData'),
//**************************** Page Objects *************************************//
    searchCustomerOrAccountNameTextField = locatorModel('filter.filter[col.name].value'),
    searchStatusDropDown = locatorModel('bounded.item'),
    customerNameTextField = locatorModel('details.customer.Name'),
    customerDetailsPageHeading = locatorXpath('//h2[@ng-if="details.title"]');

module.exports = {
    performSearchForCustomers: function(customerName, status){
        actions.SetText(searchCustomerOrAccountNameTextField,customerName,"CustomerName");
        Medium_Wait();
        actions.selectByPartialText(searchStatusDropDown,status,"Status Drop Down");
        Medium_Wait();
        actions.Click(by.linkText(customerName),customerName);
        Medium_Wait();
        return requirePage('customersPage');
    },
    verifyNameFieldEditable: function(nameFieldStatus){
       actions.VerifyTextFieldEnabled(customerNameTextField,"Testing",nameFieldStatus);
        Medium_Wait();
        return requirePage('customersPage');
    },
    verifyAccountsOfCustomer: function(customerName,accountName){
        Medium_Wait();
        actions.AssertText(customerDetailsPageHeading,0,'Customer Details for: '+customerName);
        actions.SetText(searchCustomerOrAccountNameTextField,accountName,"Account Name");
        Medium_Wait();
        actions.VerifyElementPresent(by.linkText(accountName),true);
        Medium_Wait();
        return requirePage('customersPage');
    }
};




