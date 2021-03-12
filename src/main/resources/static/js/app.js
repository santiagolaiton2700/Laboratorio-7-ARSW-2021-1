
var app = (function(){

    var apiSelector;
    var nombre="";
    var bluePrint=[];
    var data="";



    function setAuthor(){
        //change from mock to client
        apiSelector=apiclient;

        nombre=$("#author").val()
        $(".userName").text(nombre+"'s Blueprints");
        
    }
    function getBlueprintsAuthor(){

        apiSelector.getBlueprintsByAuthor(nombre,blueprintsByAuthor);
    }
    function blueprintsByAuthor(bluePrint){
        var sumaPuntos=0;
        data = bluePrint.map((info) => {
            bluePrint=info.points;  
			
            return {       
                listpoint: info.points,              
                name: info.name,                     
                points: info.points.length                 
            }             
        })
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
        $(".printName").text("Current Blueprint: "+blueprintName);
        apiSelector.getBlueprintsByNameAndAuthor(nombre,blueprintName,pintar);

    }
    function pintar(bluePrint){
        var c = document.getElementById("canvas");
        var lapiz= c.getContext("2d");
        lapiz.clearRect(0,0,1000,1000);
        lapiz.beginPath();
        lapiz.moveTo(bluePrint.points[0].x,bluePrint.points[0].y);  
        for(let i=1;i<bluePrint.points.length;i++){ 
            lapiz.lineTo(bluePrint.points[i].x,bluePrint.points[i].y)
        }
        lapiz.stroke();
    }

    return{
        setAuthor : setAuthor,
        getBlueprintsAuthor:getBlueprintsAuthor,
        pintar : pintar,
        getPointBluePrint:getPointBluePrint

    }


})();