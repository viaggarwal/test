'use strict';
const fs = require('fs');
var csv = require("fast-csv");

var CSV_Processor = function() {
	this.data;
	this.fileName;
};

CSV_Processor.prototype.initialize = function (fileName) {
	this.fileName = fileName ;
};

CSV_Processor.prototype.initData = function (data) {
	this.data = data ;	

};

CSV_Processor.prototype.showData = function () {
	//console.log("fileName : "+this.fileName+"::data : "+this.data);
};

CSV_Processor.prototype.readDatafromFile = function (callback) {
	var stream = fs.createReadStream(this.fileName);	
	var streamObject = csv.fromStream(stream, {headers : true});
	var completeData = [];
	streamObject.on("data", function(data){
		completeData.push(data);
	})
	.on("end", function(){
		this.data = completeData ;
		callback(completeData);
	});
};

CSV_Processor.prototype.filterData = function (testCaseName,columnName) {
	var result;
	if(this.data){
		result = this.data.filter(function(row){
			return row.TestName === testCaseName ;
		})[0][columnName];
	}
	return result;
};

CSV_Processor.prototype.completeData = function (testName) {
	var result;
	var file = this.fileName;
	if(this.data){
		result = this.data.filter(function(row){
			return row.TestName === testName ;
		});
	}
	return result;
};

module.exports = CSV_Processor;