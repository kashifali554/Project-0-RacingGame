$(document).ready(function () {
	console.log("Document ready is working");


	moveRight();

	function countDown(){
		
	}

	function moveRight(){
		$( "body" ).keydown(function( event ) {
			event.preventDefault();
		if (event.which === 75 || event.which === 107) {
			$(".player1").animate({left: "+=20px"}, 0)
			}
		});

		$( "body" ).keydown(function( event ) {
			event.preventDefault();
		if (event.which === 83 || event.which === 115 ) {
		$(".player2").animate({left: "+=20px"}, 0)
			}
		});
	}
	// $('.playerOne').on('click', function(){
	// 	$('.playerOne').animate({right: "+=20px"}, 0)

	// })

	// $("body").animate({left: "+=50px"}, 0);

	// $('#playerOne').keydown(function(event) {
	//   if ( event.which === 83 || event.which === 115 ) {
	//      event.preventDefault();
	//      $('#playerOne').animate({
	//      	right: "+=50px"
	//      }, 0);
	//   }
	// });


	// var PlayerOne = $('img');
	// // var boxes = $(".col-md-1");


	// $("body").keypress(function(event) {
	//   if (event.which === 75 || event.which === 107) {
	//      event.preventDefault();
	//      console.log("Player One Key pressed");
	//     playerOne.animate({left: "+=50px"}, 0);
	//   }
	// });

	// $("body").keypress(function(event) {
	//   if (event.which === 83 || event.which === 115 ) {
	//      event.preventDefault();
	//      console.log("Player Two Key Pressed");
	//      $("#trackTwo")animate({left: "+=50px"}, 0);
	//   }
	// });

	// 	boxes.on("click", function handleClick(){
	//	boxes.append("This rocket is moving");
	// 	for (i = 0; i < boxes.length; i++) { 
	//	console.log(boxes[i]);
	// }

	// });

 });

