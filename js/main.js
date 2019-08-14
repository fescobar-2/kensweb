$(document).ready(function(){

  //Lleva a div quienes somos 
  $(".boton-quienes-somos").click(function(){
  	$('html,body').animate({
  		scrollTop:$("#div-encastre-quienes-somos").offset().top
  	},750);
  })
    //Llevar al div de contacto
  $(".boton-contacto").click(function(){
  	$('html,body').animate({
  		scrollTop:$(".encastre-contactos").offset().top
  	},2000);
  })
    //Lleva a div de remeras 
  $(".bloguno").click(function(){
  	$('html,body').animate({
  		scrollTop:$("#encastre-remeras").offset().top
  	},750);
  })
    //Lleva a div de talleres 
  $(".blogdos").click(function(){
  	$('html,body').animate({
  		scrollTop:$("#encastre-talleres").offset().top
  	},1500);
  })
  	  //Llevar al div de Serigrafia en Vivo
  $(".blogtres").click(function(){
  	$('html,body').animate({
  		scrollTop:$(".encastre-en-vivo").offset().top
  	},2000);
  })   
});



