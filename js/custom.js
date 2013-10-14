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
		"Armin Van Buuren",
		"Art Department",
		"Arty",
		"ATB",
		"Avicii",
		"Axwell",
		"Benny Benassi",
		"Big Gigantic",
		"Bingo Players",
		"Botnek",
		"Bro Safari",
		"Calvin Harris",
		"Carl Cox",
		"Carnage",
		"Cazzette",
		"Cedric Gervais",
		"Clockwork",
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
		"Madeon",
		"Major Lazer",
		"Markus Schulz",
		"Martin Solveig",
		"Mat Zo",
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
		"Showtek",
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
		"W&W",
		"Wolfgang Gartner",
		"Zedd",
		"Zeds Dead"
		];
		$( "#artists" ).autocomplete({
			source: artistTags
		});
	});
	$("button.stredm-panel-button").click(function(){
		var eventSelection = $("input[id='events']").val();
		var artistSelection = $("input[id='artists']").val();
		var postdata = {
			event:eventSelection,
			artist:artistSelection
			};
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