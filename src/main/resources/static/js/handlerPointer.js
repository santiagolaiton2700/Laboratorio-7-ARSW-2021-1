var apps = handlerPointer;

var handlerPointer=(function(){

    var init =function(){
        var canvas=document.getElementById("canvas");

        if(window.PointerEvent){
            canvas.addEventListener("pointerdown",Dibujar,false);
        }else{
            canvas.addEventListener("mousedown",Dibujar,false);
        }
    };
    var Dibujar=function(event){
        var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
        var offset= _getOffset(canvas);
        app.puntoNuevo(event.pageX - offset.left ,event.pageY -  offset.top)
    };
    var _getOffset = function (obj) {
        var lateral = 0;
        var vertical = 0;
        do {
          if (!isNaN(obj.offsetLeft)) {
            lateral += obj.offsetLeft;
          }
          if (!isNaN(obj.offsetTop)) {
            vertical += obj.offsetTop;
          }
        } while ((obj = obj.offsetParent));
        return { left: lateral, top: vertical };
      };
   
    return{

        init:init
    };
})();