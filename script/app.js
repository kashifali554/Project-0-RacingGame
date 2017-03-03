console.log("Sanity Check");

$(document).ready(function () {
	console.log("Document ready is working");

	var boxes = $(".col-md-1");


	$("#trackOne").keypress(function(event) {
	  if (event.which === 75 || event.which === 107) {
	     event.preventDefault();
	     console.log("Player One Key Pressed");
	  }
	});

	$("body").keypress(function(event) {
	  if (event.which === 83 || event.which === 115 ) {
	     event.preventDefault();
	     console.log("Player Two Key Pressed");
	  }
	});

	// box.on("keypress.75", function handleClick(){
	// 	box.append("This rocket is moving");

	
	//  });
 	
 });

