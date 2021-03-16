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
	guardar=function(bluePrint, callbackWipe, callbackShow){

		var enviar="http://127.0.0.1:8080/blueprints/"+bluePrint.author+"/"+bluePrint;
		var blueprintSaved= $.ajax({
			url:enviar,
			type:"PUT",
			data:JSON.stringify(bluePrint),
			contentType: "application/json",
		}
		).then (function(){

			callbackWipe();
			callbackShow();


		}).fail(()=>{
			
			var enviar = "http://127.0.0.1:8080/blueprints/";
			return $.ajax({
				url:enviar,
				type:"POST",
				data:JSON.stringify(bluePrint),
				contentType: "application/json",
			});			
		});
	};

	deleteBluePrint = function(author,name,callbackWipe, callbackShow,callbackWipeCanvas){
			var enviar="http://127.0.0.1:8080/blueprints/"+author+"/"+name;
			var deleteBlueprint = $.ajax({
				url:enviar,
				type:"DELETE",
				// data:JSON.stringify(bluePrint),
				contentType: "application/json",
			}).then (()=>{
				callbackWipe();
				callbackShow();				
				callbackWipeCanvas()
			}).fail(()=>{
				alert("No se pudo borrar el plano");
			});
	}



	return{
		getBlueprintsByAuthor:getBlueprintsByAuthor,
		getBlueprintsByNameAndAuthor:getBlueprintsByNameAndAuthor,
		guardar:guardar,
		deleteBluePrint:deleteBluePrint
	}

})();
