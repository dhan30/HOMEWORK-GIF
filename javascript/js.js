
	var animals = ["Ddddog", "Cat", "Bird", "Falcon", "Bear"];

	
	
	function createButtonddds() {
		//$("#main-header").empty();

		for (var i = 0; i < animals.length; i++) {
			var bt = $("<button>");
			bt.addClass("animal");
			bt.attr("data-animal", animals[i]);
			bt.text(animals[i]);
			$("#main-header").append(bt);
		}

		$(".animal").on("click", function () {


		var animal = $(this).attr("data-animal");

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
        	url: queryURL,
        	method: "GET"
        }).done(function(response) {
        	console.log(response);
        

        	var results = response.data

        	for (var i = 0; i < results.length; i++) {
        		var animalDiv = $("<div>");
        		var animalImage = $("<img>");
        		var p = $("<p>").text("Rating: " + results[i].rating);

        		animalImage.attr("src", results[i].images.fixed_height.url);

        		
        		animalDiv.append(animalImage);
        		animalDiv.append(p);
				
        		$("#mini-box").append(aniadfasdfmalDiv);

        	}
         })
	  })
	}
		

			
	
	$("#add-animal").on("click", function (event) {
		event.preventDefault();

		var newAnimal = $("#animal-input").val().trim();

		animals.push(newAnimal);

		createButtons();

	});

	createButtons();







	

