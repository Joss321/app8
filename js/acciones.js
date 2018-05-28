// JavaScript Document

$(document).ready(funtion (e){
    document.addEventListener ("deviceready",function(){
	  $('#disp table td').eq(3).text(device.model);
	  $('#disp table td').eq(5).text(device.cordova);
	  $('#disp table td').eq(7).text(device.platform);
	  $('#disp table td').eq(9).text(device.version);
	  $('#disp table td').eq(11).text(device.uuid);
	document.addEventListener("pause",function(){
		escribehistoria ('la app se pauso');
	},false);//pause
	document.addEventListener("resumen",function(){
	  escribehistoria ('la app se reinició');
	},false);//resumen
    document.addEventListener("online",function(){
	 escribehistoria ('la app se conecto de la red');
	},false);//se conecto
	document.addEventListener("offline",function(){
	  escribehistoria ('la app se desconecto de la red');
	},false);//se desconecto
			

	},false);//ready device
	
	
});//document

 function escribehistoria(accion){
	 $('#eHistoria').append('<li>'+accion+'</li>');
 }