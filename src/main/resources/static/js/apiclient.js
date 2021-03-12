var apiclient = (function(){
	getBlueprintsByAuthor = function (author, callback){
		var getVariable = $.getJSON("http://127.0.0.1:8080/blueprints/" + author, function() {
		  response=getVariable.responseText;

		}).done(function(){

			callback(JSON.parse(getVariable.responseText))})
		.fail(()=>{
			alert("No se logro encontrar el autor del plano solicitado")
		});
		
	}

	getBlueprintsByNameAndAuthor = function (author, name, callback){
		var getVariable = $.getJSON("http://127.0.0.1:8080/blueprints/" + author + "/" + name, function() {

			response=JSON.parse(getVariable.responseText);
			
		}).done(()=>{
			callback(response)

		})
		.fail(()=>{
			alert("No se logro encontrar el plano solicitado")
		});		
	}


	return{
		getBlueprintsByAuthor:getBlueprintsByAuthor,
		getBlueprintsByNameAndAuthor:getBlueprintsByNameAndAuthor

	}

})();
