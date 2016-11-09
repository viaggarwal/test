'use strict';

var Locator = function() {
	
};

global.locatorCss = function (byCss) {
	return by.css(byCss);
};
global.locatorId = function (byId) {
	return by.id(byId);
};
global.locatorCssText = function (byclass, byCssText) {
	return by.cssContainingText(byclass, byCssText);
};
global.locatorXpath = function (byXpath) {
	return by.xpath(byXpath);
};
global.locatorName = function (byName) {
	return by.name(byName);
};
global.locatorModel = function (byModel) {
	return by.model(byModel);
};
global.locatorBinding = function (byBinding) {
	return by.binding(byBinding);
};
global.locatorLinkText = function (byLinkText) {
	return by.linkText(byLinkText);
};
global.locatorRepeater = function (byRepeater) {
	return by.repeater(byRepeater);
};
global.locatorbuttonText = function (byButtonText) {
	return by.buttonText(byButtonText);
};
module.exports = Locator;