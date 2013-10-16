$(document).ready( function() {
	$( function() {
		var eventTags = [
		"Beyond Wonderland 2013",
		"EDC Las Vegas 2013",
		"Electric Zoo 2013",
		"Essential Mix",
		"Tomorrowland 2013",
		"Ultra Music Festival 2013",
		"Tomorrow World 2013"
		];
		$( "#events" ).autocomplete({
			source: eventTags
		});
	});
	$( function() {
		var artistTags = [
		"12th Planet",
		"A-Trak",
		"Aarab Muzik",
		"Above & Beyond",
		"Adventure Club",
		"Afrojack",
		"Alesso",
		"Alex Metric",
		"Armin Van Buuren",
		"Art Department",
		"Arty",
		"ATB",
		"Avicii",
		"Axwell",
		"Bassnectar",
		"Benny Benassi",
		"Big Gigantic",
		"Bingo Players",
		"Borgore",
		"Botnek",
		"Bro Safari",
		"Calvin Harris",
		"Carl Cox",
		"Carnage",
		"Cazzette",
		"Cedric Gervais",
		"Clockwork",
		"Cosmic Gate",
		"Dada Life",
		"Dash Berlin",
		"David Guetta",
		"Deadmau5",
		"Dillon Francis",
		"Diplo",
		"Disclosure",
		"Dirty South",
		"Dimitri Vegas and Like Mike",
		"Dj Snake",
		"Dog Blood",
		"DVBBS",
		"Dyro",
		"Eric Prydz",
		"Fat Boy Slim",
		"Feed Me",
		"Fedde Le Grand",
		"Ferry Corsten",
		"Flosstradamus",
		"Flux Pavilion",
		"Gareth Emery",
		"Hardwell",
		"Headhunterz",
		"John Dahlback",
		"Kaskade",
		"Knife Party",
		"Krewella",
		"Laidback Luke",
		"Loco Dice",
		"Luciano",
		"Luminox",
		"Madeon",
		"Major Lazer",
		"Mark Knight",
		"Markus Schulz",
		"Martin Solveig",
		"Mat Zo",
		"Morgan Page",
		"Nero",
		"Nervo",
		"Nicky Romero",
		"Paul Van Dyk",
		"Pete Tong",
		"Porter Robinson",
		"Pretty Lights",
		"Quintino",
		"R3hab",
		"Rebecca and Fiona",
		"Richie Hawtin",
		"R.L Grime",
		"Rusko",
		"Sander Van Doorn",
		"Seven Lions",
		"Showtek",
		"Sidney Samson",
		"Simon Patterson",
		"Solar Stone",
		"Steve Angello",
		"Steve Aoki",
		"Swedish House Mafia",
		"Sebastian Ingrosso",
		"Thomas Gold",
		"Tiesto",
		"Tommy Trash",
		"Tritonal",
		"Umek",
		"UZ",
		"W&W",
		"Wolfgang Gartner",
		"Zedd",
		"Zeds Dead"
		];
		$( "#artists" ).autocomplete({
			source: artistTags
		});
	var getEventTags = function() {
		var artistSelection = $("input[id='artists']").val();
		var postdata = { artist:artistSelection };
		jQuery.ajax({
			type: "POST",
			url: '../scripts/eventTags.php',
			data: postdata,
			success: function(data) 
			{
				var autocompleteData = JSON.parse(data);
				$("#events").autocomplete({
					source: autocompleteData
				});
			}
		});
	};
	getEventTags();
	$("input[id='events']").blur(function(){
		getEventTags();
	});
<<<<<<< HEAD
=======
	var getEventTags = function() {
		var artistSelection = $("input[id='artists']").val();
		var postdata = { artist:artistSelection };
		jQuery.ajax({
			type: "POST",
			url: '../scripts/eventTags.php',
			data: postdata,
			success: function(data) 
			{
				var autocompleteData = JSON.parse(data);
				$("#events").autocomplete({
					source: autocompleteData
				});
				$( "#events-xs" ).autocomplete({
					source: autocompleteData
				});
			}
		});
	};
	getEventTags();
	$("input[id='events']").blur(function(){
		getEventTags();
	});
	var getEventTags = function() {
		var artistSelection = $("input[id='artists']").val();
		var postdata = { artist:artistSelection };
		jQuery.ajax({
			type: "POST",
			url: '../scripts/eventTags.php',
			data: postdata,
			success: function(data) 
			{
				var autocompleteData = JSON.parse(data);
				$("#events").autocomplete({
					source: autocompleteData
				});
				$( "#events-xs" ).autocomplete({
					source: autocompleteData
				});
			}
		});
	};
	getEventTags();
	$("input[id='events']").blur(function(){
		getEventTags();
	});
>>>>>>> 526e4ad49fca75e3f5dc3a18ea767751db513d95
	var getArtistTags = function() {
		var eventSelection = $("#artists").val();
		var postdata = { event:eventSelection };
		jQuery.ajax({
			type: "POST",
			url: '../scripts/artistTags.php',
			data: postdata,
			success: function(data) 
			{
				var autocompleteData = JSON.parse(data);
				$("#artists").autocomplete({
					source: autocompleteData
				});
			}
		});
	};
	getArtistTags();
	$("input[id='events']").blur(function(){
		getArtistTags();
	});
	$("button.stredm-panel-button").click(function(){
		var eventSelection = $("input[id='events']").val();
		var artistSelection = $("input[id='artists']").val();
		var postdata = {
			event:eventSelection,
			artist:artistSelection
			};
		$("div.stredming-container").css("display","block");
		$("div.stredming").slideDown(100);
		$("div.stredming-results").empty();
		jQuery.ajax({
			type: "POST",
			url: '../scripts/request.php',
			data: postdata,
			success: function(data) 
			{
				var result = data;
				jQuery("div.stredming-results").append("<div class='result'>"+result+"</div>");
			}
		});
	});
});