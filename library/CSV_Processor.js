'use strict';
const fs = require('fs');
var csv = require("fast-csv");

var CSV_Processor = function() {
	this.data;
	this.fileName;
	this.testCaseName;
};

CSV_Processor.prototype.initialize = function (fileName,testCaseName) {
	this.fileName = fileName ;
	this.testCaseName = testCaseName;
};

CSV_Processor.prototype.initData = function (data) {
	this.data = data ;	
	this.showData();	
};

CSV_Processor.prototype.showData = function () {
	console.log("fileName : "+this.fileName+" :: testCaseName"+ this.testCaseName);
};

CSV_Processor.prototype.readDatafromFile = function (callback) {
	var stream = fs.createReadStream(this.fileName);	
	var streamObject = csv.fromStream(stream, {headers : true});
	var completeData = [];
	streamObject.on("data", function(data){
		completeData.push(data);
		//console.log('#currentData::::',data);
	})
	.on("end", function(){
		this.data = completeData ;
		callback(completeData);
	});
};

CSV_Processor.prototype.filterData = function (columnName) {
	var testCaseName = this.testCaseName;
	var result;
	if(this.data){
		result = this.data.filter(function(row){
			return row.TestName === testCaseName ;
		})[0][columnName];
	}
	return result;
};

module.exports = CSV_Processor;