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
    accountNameTextField = locatorModel('account.Name'),
    accountCreationCustomerNameTextField = locatorModel('typeaheadVM.value'),
    accountCreationNominationGroupDropDown = locatorModel('account.NomGroupId'),
    accountCreationSalesRepDropDown = locatorModel('rep.salesRepId'),
    accountCreationLDCAccountNumTextField = locatorModel('account.UtilityAccountId'),
    accountCreationLDCMeterNumTextField = locatorModel('account.Meters[0].UtilityMeterId'),
    accountCreationSuccessMessageSection = locatorCss('.alert.top.am-fade.alert-success'),
    postAccountCreationTrackingNumberLink = locatorXpath('//*[@tracking-id="ediRequest.TrackingId"]/button'),
    accountCreationSuccessMessageTitle = locatorXpath('//*[@ng-bind="title"]'),
    accountPostCreationMetersSection = locatorLinkText('Meters'),
    accountPostCreationEDIHistorySection = locatorLinkText('EDI History'),
    accountPostCreationAddMeterButton = locatorCss('.btn.btn-primary.btn-sm'),
    saveButton = locatorCss('.btn.btn-primary'),
    accountPostCreationEDIHistorySectionExportToExcelButton = locatorXpath('//button[@filename="ediHistoryGrid.fileName"]');

module.exports = {
    fillNewAccountDetails: function(name,customer, nomGroup, salesRep, ldcAccount, lcdMeter){
        actions.SetText(accountNameTextField,name,"Account Name");
        actions.SetText(accountCreationCustomerNameTextField,customer,"accountCreationCustomerNameTextField");
        Long_Wait();
        actions.Click(by.linkText(customer), 'Autopopulated '+customer+' Link');
        Short_Wait();
        actions.selectByPartialText(accountCreationNominationGroupDropDown,nomGroup,"accountCreationNominationGroupDropDown");
        actions.selectByPartialText(accountCreationSalesRepDropDown,salesRep,"accountCreationSalesRepDropDown");
        actions.SetText(accountCreationLDCAccountNumTextField,ldcAccount,"accountCreationLDCAccountNumTextField");
        actions.SetText(accountCreationLDCMeterNumTextField,lcdMeter,"accountCreationLDCMeterNumTextField");
        Long_Wait();
        return requirePage('newAccountPage');
    },
    verifyCreateAccountNonEDISuccessMessage: function (accountName){
        actions.AssertText(accountCreationSuccessMessageSection,2,'Account Saved \nThe account named '+accountName+' was saved successfully.');
        actions.AssertText(accountCreationSuccessMessageTitle,0,'Account Saved');
        return requirePage('newAccountPage');
    },
    verifyCreateAccountEDISuccessMessage: function (accountName) {
        element(postAccountCreationTrackingNumberLink).getText().then(function(text){
            actions.AssertText(accountCreationSuccessMessageSection,2,'Account Saved and Historic Usage requested\nThe account named ' + accountName + ' was saved successfully.\nAn EDI Historic Usage (HU) request made for the account. ' + text);
            actions.AssertText(accountCreationSuccessMessageTitle,0,'Account Saved and Historic Usage requested');
        });
        return requirePage('newAccountPage');
    },
    verifyPostAccountCreationDetails: function(){
        Medium_Wait();
        actions.VerifyElementPresent(accountPostCreationMetersSection,true);
        Wait(1);
        actions.VerifyElementPresent(accountPostCreationEDIHistorySection,true);
        Wait(1);
        actions.VerifyElementPresent(accountPostCreationAddMeterButton,true);
        return requirePage('newAccountPage');
    },
    verifyNonEDIAccountDetails: function(){
        browser.executeScript('window.scrollTo(40,40);').then(function () {
            element(accountPostCreationEDIHistorySection).click().then(function(){
                Medium_Wait();
                actions.VerifyElementPresent(accountPostCreationEDIHistorySectionExportToExcelButton,true);
            });
        })
        return requirePage('newAccountPage');
    },
    verifyEDIAccountDetails: function(customerName){
        browser.executeScript('window.scrollTo(40,40);').then(function () {
            element(accountPostCreationEDIHistorySection).click().then(function(){
                Short_Wait();
                actions.VerifyElementPresent(by.linkText(customerName),true);
                actions.Click(by.linkText(customerName),customerName+" Link in accounts EDI History Section");
            });
        })
        return requirePage('customersPage');
    },
    clickSaveButton: function (){
        actions.Click(saveButton,"SaveButton");
        Long_Wait();
        return requirePage('newAccountPage');
    }
};




