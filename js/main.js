$(document).ready(function () {
  $("#boton1").click(function () {
      $("#flor1").css("display","inline-block");
      $("#flor2").css("display","none");
      $("#flor3").css("display","none");
      $("#flor4").css("display","none");
  });
  $("#boton2").click(function () {
      $("#flor2").css("display","inline-block");
      $("#flor1").css("display","none");
      $("#flor3").css("display","none");
      $("#flor4").css("display","none");
  });
  $("#boton3").click(function () {
      $("#flor3").css("display","inline-block");
      $("#flor1").css("display","none");
      $("#flor2").css("display","none");
      $("#flor4").css("display","none");
  });
  $("#boton4").click(function () {
      $("#flor4").css("display","inline-block");
      $("#flor1").css("display","none");
      $("#flor2").css("display","none");
      $("#flor3").css("display","none");
  });



});




//intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
 setInterval('avanzaSlide()',5000);

 //array con las clases para las diferentes imagenes
 var arrayImagenes = new Array(".flor1",".flor2",".flor3","flor4",".flor");

 //variable que nos permitirá saber qué imagen se está mostrando
 var contador = 0;

 //Muestre los elementos emparejados desvaneciéndolos a opaco.
 function mostrar(flor){
 	$(flor).ready(function(){
   		$(arrayImagenes[contador]).fadeIn(1000);
 	});
 }

 //hace un efecto fadeOut para ocultar una imagen
 //Ocultar los elementos coincidentes por desvanecimiento de ellos a transparente.
 function ocultar(flor){
 	$(flor).ready(function(){
   		$(arrayImagenes[contador]).fadeOut(1000);
 	});
 }

 //función principal
 function avanzaSlide(){
         //se oculta la imagen actual
 	ocultar(arrayImagenes[contador]);
         //aumentamos el contador en una unidad
 	contador = (contador +1) % 4;
         //mostramos la nueva imagen
 	mostrar(arrayImagenes[contador]);
 }
