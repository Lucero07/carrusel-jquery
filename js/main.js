$(document).ready(function () {

  $("#boton1").click(function () {
    $('.flores').css('display',"none");
    $("#flor1").css("display","inline-block");

  //     $("#flor1").css("display","inline-block");
  //     $("#flor2").css("display","none");
  //     $("#flor3").css("display","none");
  //     $("#flor4").css("display","none");
   });
   $("#boton2").click(function () {
     $('.flores').css('display',"none");
     $("#flor2").css("display","inline-block");

  //     $("#flor2").css("display","inline-block");
  //     $("#flor1").css("display","none");
  //     $("#flor3").css("display","none");
  //     $("#flor4").css("display","none");
   });
   $("#boton3").click(function () {
     $('.flores').css('display',"none");
     $("#flor3").css("display","inline-block");

  //     $("#flor3").css("display","inline-block");
  //     $("#flor1").css("display","none");
  //     $("#flor2").css("display","none");
  //     $("#flor4").css("display","none");
   });
   $("#boton4").click(function () {
     $('.flores').css('display',"none");
     $("#flor4").css("display","inline-block");
  //     $("#flor4").css("display","inline-block");
  //     $("#flor1").css("display","none");
  //     $("#flor2").css("display","none");
  //     $("#flor3").css("display","none");
  });

  //intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
  setInterval(avanzaSlide,2000);


});





 //array con las clases para las diferentes imagenes
 var arrayImagenes = new Array(".flor1",".flor2",".flor3",".flor4",".flor");

 //variable que nos permitirá saber qué imagen se está mostrando
var actual = 0, anterior = -1;

 //Muestre los elementos emparejados desvaneciéndolos a opaco.
 function mostrar(flor){
 // 	$(flor).ready(function(){
      // console.log(this);
   		$(flor).fadeIn(1000);
 // 	});
 }

 //hace un efecto fadeOut para ocultar una imagen
 //Ocultar los elementos coincidentes por desvanecimiento de ellos a transparente.
 function ocultar(flor){
 // 	$(flor).ready(function(){
   		$(flor).fadeOut();
 // 	});
 }

 //función principal
 function avanzaSlide(){
         //se oculta la imagen actual
 	ocultar(arrayImagenes[anterior]);
         //mostramos la nueva imagen
 	mostrar(arrayImagenes[actual]);
         //aumentamos el actual en una unidad
  anterior = actual;
 	actual = (actual +1) % 4;
 }
