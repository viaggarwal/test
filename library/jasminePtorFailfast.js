'use strict';

var jasminePtorFailfast = function(){		
	this.FailedSpecName="";
	this.currentSuiteName="";
};

jasminePtorFailfast.prototype.launch = function() {
	var self = this;
	var specRefs = getSpecReferences();

	return {
		jasmineStarted: function jasmineStarted(suiteInfo) {
			console.log('#SuiteInfo --->  '+ suiteInfo.totalSpecsDefined);
		},		
		suiteStarted: function suiteStarted(suiteStart) {
			self.currentSuiteName = suiteStart.fullName;
			console.log('<-------  #SuiteStarted  -------> ');
			console.log('#Current Suite Description --->  ',suiteStart.description);
			console.log('#Current Suite Name --->  ',self.currentSuiteName);
		},
		specStarted: function specStarted(specStart) {
			console.log('<-------  #SpecStarted  -------> ');
			console.log('#Current Spec Name --->  ',specStart.fullName);
			console.log('#Current Spec Name --->  ',specStart.description);
		},
		specDone: function specDone(specEnd) {	
			console.log('<-------  #SpecDone  -------> ');
			console.log('#Current Spec Name --->  ',specEnd.fullName);
			console.log('#Current Spec Result --->  ',specEnd.status);
			var message;
			var description;
			if(specEnd.status == 'failed'){
				disableSpec(self.currentSuiteName,specRefs.specs);
				message = specEnd.failedExpectations[0].message;
				description = specEnd.failedExpectations[0].stack ;
			}
		},
		suiteDone: function suiteDone(suiteEnd) {
			console.log('<-------  #SuiteDone  -------> ');
			console.log('#Current Suite Name --->  ',suiteEnd.fullName);
			console.log('#Current Suite Name --->  ',suiteEnd.status);
		},
		jasmineDone: function jasmineDone() {
			console.log('<-------  #JasmineDone  -------> ');
		}
	};
};
function getSpecReferences() {
	var specs = [];
	jasmine.getEnv().specFilter = function (spec) {
		specs.push(spec);
		return true;
	};
	return{
		specs : specs
	}
}
function disableSpec(suiteName,specs) {	
	specs.forEach(function(item){
		if(item.description.indexOf(suiteName) > -1){
			item.disable();
		}
	});
}

module.exports  = jasminePtorFailfast;