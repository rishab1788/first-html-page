var myapp=angular
                 .module("mymodule",[])
                 .controller("mycontroller",function($scope){
			var employees=[
			{name :"kartik",dob:new date("november 23,1980"),gender:"m",salery:3401},
			{name :"kartik",dob:new date("november 23,1980"),gender:"m",salery:2101},
			{name :"kartik",dob:new date("november 23,1980"),gender:"m",salery:20301},
			{name :"kartik",dob:new date("november 23,1980"),gender:"m",salery:20101},
			
			];
			$scope.employees=employees;
		
			
			});

