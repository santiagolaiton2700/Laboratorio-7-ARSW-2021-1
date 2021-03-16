
var app = (function(){

    var apiSelector;
    var nombre="";
    var currentAuthorOpened;
    var bluePrint=[];
    var data="";
    var nombreBlue="";
    var nueva;
    var bluePrintSelect;



    function setAuthor(){
        //change from mock to client
        apiSelector=apiclient;
        
        if ($("#author").val()!=""){
            
            nombre=$("#author").val()
            $(".userName").text(nombre+"'s Blueprints");
            getBlueprintsAuthor()
        }
        else{
            alert("Ingrese un nombre de autor para poder ver los planos");
        }
        
        
        
    }
    function getBlueprintsAuthor(){

        if (currentAuthorOpened!=nombre){

            currentAuthorOpened=nombre;
            apiSelector.getBlueprintsByAuthor(nombre,blueprintsByAuthor);
        }
    }
    function blueprintsByAuthor(bluePrint){
        
        data = bluePrint.map((info) => {
            
            bluePrint=info.points;  
			
            return {       
                listpoint: info.points,              
                name: info.name,                     
                points: info.points.length                 
            }             
        })
        wipeTable();
        showInTable(data);

    }

    function wipeTable(){
        var table = document.getElementById("BluePrintTable");
        table.getElementsByTagName("tbody")[0].innerHTML = table.rows[0].innerHTML;
    }

    function wipeCanvas(){
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function showInTable(data){
        var sumaPuntos=0;
        data.map((info)=>{
            sumaPuntos+=info.points
            $("#BluePrintTable > tbody").append(
                `<tr>
                    <td>${info.name}</td>
                    <td>${info.points}</td>
                    <td><button type="button" onclick="app.getPointBluePrint('${info.name}')">Open</td>
                </tr>`
            );
        })

        $("#Points").text("Total User Points : "+sumaPuntos);
    }
   
    function getPointBluePrint(blueprintName){
        nombreBlue=blueprintName;
        $(".printName").text("Current Blueprint: "+blueprintName);

        apiSelector.getBlueprintsByNameAndAuthor(nombre,blueprintName,pintar);

    }
    function pintar(bluePrint){
        bluePrintSelect=bluePrint;
        var c = document.getElementById("canvas");
        var lapiz= c.getContext("2d");
        lapiz.clearRect(0,0,1000,1000);
        lapiz.beginPath();
        lapiz.moveTo(bluePrint.points[0].x,bluePrint.points[0].y);  
        for(let i=1;i<bluePrint.points.length;i++){ 
            lapiz.lineTo(bluePrint.points[i].x,bluePrint.points[i].y)
        }
        lapiz.stroke();
        nueva=bluePrint.points;

    };
    function puntoNuevo(a,b){
        if(nueva!=null){
            nueva.push({x:a,y:b})
            var c = document.getElementById("canvas");
            var lapiz= c.getContext("2d");
            lapiz.clearRect(0,0,1000,1000);
            lapiz.beginPath();
            lapiz.moveTo(nueva[0].x,nueva[0].y); 
            for(let i=1;i<nueva.length;i++){ 
                lapiz.lineTo(nueva[i].x,nueva[i].y)
            }
            lapiz.stroke();
        }
    };

    function guardar(){
        currentAuthorOpened="";
        apiSelector.guardar(bluePrintSelect, wipeTable, getBlueprintsAuthor);

    }

    function deleteBlueprint(){
        if (nombreBlue!=""){
            currentAuthorOpened=""; 
            apiSelector.deleteBluePrint(nombre,nombreBlue,wipeTable, getBlueprintsAuthor, wipeCanvas)
        }
        else{
            alert("No hay blueprint seleccionado!")
        }
    }

    function createNewBlueprint(){
        wipeCanvas();
        nombreBlue=$("#newBlueprintName").val()
        nueva=[]
        if($("#newBlueprintName").val()!=""){
            bluePrintSelect = 
            {
                author:nombre,
                name:$("#newBlueprintName").val(),
                points: nueva,                                      

            };         
        }
        else{
            alert("No se puede crear un plano nuevo sin asignarle un nombre");
        }

        
        


        
    }


    return{
        setAuthor : setAuthor,
        getBlueprintsAuthor:getBlueprintsAuthor,
        pintar : pintar,
        getPointBluePrint:getPointBluePrint,
        puntoNuevo:puntoNuevo,
        guardar:guardar,
        createNewBlueprint:createNewBlueprint,
        showInTable:showInTable,
        wipeTable:wipeTable,
        deleteBlueprint:deleteBlueprint
    }


})();