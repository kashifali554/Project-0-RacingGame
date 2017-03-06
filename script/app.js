$(document).ready(function () {

	//Animation and sort of sanity check
	$(".player1").fadeOut(000).delay(300).show(500);
	$(".player2").fadeOut(000).delay(300).show(500);

	// Grab current screen width
	var screenWidth = ($(window).width()-200);
  	console.log('screenWidth '+screenWidth);

	moveRight();
	winConditions();
	reset();

	//Moving right function with animition and key press.

	function moveRight(){
		$( "body" ).keydown(function( event ) {
			event.preventDefault();
		if (event.which === 75 || event.which === 107) {
			$(".player1").animate({left: "+=20px"}, 200);
			winConditions();
			console.log('p1 position: '+ $('.player1').position().left);
			}
		});
		$( "body" ).keydown(function( event ) {
			event.preventDefault();
		if (event.which === 83 || event.which === 115 ){
			$(".player2").animate({left: "+=20px"}, 200);
			winConditions();
			console.log('p2 position: '+ $('.player2').position().left);
			}
		});
	}
	//Win conditions function to announce the winner.

	function winConditions(){
	if (($(".player1").position().left >= screenWidth) && 
		($(".player2").position().left >= screenWidth)){
		alert('It is a tie!');
		window.location.reload('true');
	} else if($(".player1").position().left >= screenWidth){
		alert("Player One Wins!");
		window.location.reload('true');
	} else if ($(".player2").position().left >= screenWidth) {
		alert("Player Two Wins!");
		window.location.reload('true');
		}
	};

	//Reseat button function.
	function reset(){
	$(".btn").on("click", function(){
	location.reload();
	});
	}

 });

