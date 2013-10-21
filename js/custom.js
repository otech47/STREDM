$(document).ready( function() {
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
	$("input[type='text']").autocomplete({
		minLength: 0
	}).focus(function() {
		$(this).autocomplete("search", "");
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