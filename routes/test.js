/**
 * New node file
 */
var soap = require('soap');
var baseURL = "http://localhost:8080/CalculatorWebService/services";
exports.calculate = function(req,res)
{
	var option = {
			ignoredNamespaces : true	
		};
	 var url = baseURL+"/Calculate?wsdl";
	var list="";
	var json_responses;
	var value="";
	var output="";
	var args = {list: req.param('list')};
	  soap.createClient(url,option, function(err, client) {
	      client.calculate(args, function(err, result) {
	    	  if(result.calculateReturn){
	    		  console.log(result.calculateReturn);
	    		  json_responses = {"statusCode" : 200,"output" : result.calculateReturn.$value};
	    		  res.send(json_responses);
	    	  }
	    	  else{
	    		  json_responses = { "statusCode" : 302};
	    		  res.send(json_responses);
	    	  }
	      });
	  });
};
