/*global document, window, alert, console, require, browser,jasmine,
 requirePage, requireData, requireConfig, requireLibrary,
 describe, it, beforeEach, forEach, by, includes, expect, titlePromise, includes , element, $, then, $locatorRepeater, calenderInputData*/
/* The Page Object Representation of the Alarm Type Page.
 */
'use strict';
//********** Require Pages*************//
//**************************** Required web data*************************************//
var  genericData = requireData('genericData'),
//**************************** Page Objects *************************************//
    customerCreationSuccessMessageSection = locatorXpath('//span[@ng-bind-html="content"]'),
    customerCreationSuccessMessageHeading = locatorCss('.alert-heading'),
    customerCreationErrorMessageSection = locatorCss('.validation-error'),
    customerNameTextField = locatorModel('details.customer.Name'),
    saveButton = locatorCss('.btn.btn-primary');

module.exports = {
    fillNewCustomerDetails: function (name){
        actions.SetText(customerNameTextField,name,"Customer Name");
        Long_Wait();
        return requirePage('newCustomerPage');
    },
    clickSaveButton: function (){
        actions.Click(saveButton,"SaveButton");
        Medium_Wait();
        return requirePage('newCustomerPage');
    },
    verifyNewCustomerSuccessMessage: function (){
        actions.AssertText(customerCreationSuccessMessageHeading,0,'Customer Saved');
        actions.AssertText(customerCreationSuccessMessageSection,0,'The Customer was saved successfully');
        expect(element(customerCreationSuccessMessageHeading).getText()).toEqual('Customer Saved');
        expect(element(customerCreationSuccessMessageSection).getText()).toEqual('The Customer was saved successfully');
        return requirePage('newCustomerPage');
    },
    verifyNewCustomerErrorMessage: function (){
        actions.AssertText(customerCreationErrorMessageSection,0,'Customer name is not unique');
        expect(element(customerCreationErrorMessageSection).getText()).toEqual('Customer name is not unique');
        return requirePage('newCustomerPage');
    }
};




