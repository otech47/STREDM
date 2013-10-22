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
				$("input[id='events']").autocomplete({
					source: autocompleteData
				});
			}
		});
	};
	
	var getArtistTags = function() {
		var eventSelection = $("input[id='events']").val();
		var postdata = { event:eventSelection };
		jQuery.ajax({
			type: "POST",
			url: '../scripts/artistTags.php',
			data: postdata,
			success: function(data) 
			{
				var autocompleteData = JSON.parse(data);
				$("input[id='artists']").autocomplete({
					source: autocompleteData
				});
			}
		});
	};
	getEventTags();
	$("input[id='events']").blur(function(){
		getEventTags();
		getArtistTags();
	});
	getArtistTags();
	$("input[id='artists']").blur(function(){
		getArtistTags();
		getEventTags();
	});
	$("input[id='artists']").on("autocompleteselect", function(){
		getArtistTags();
		getEventTags();
	});
	$("input[id='events']").on("autocompleteselect", function(){
		getArtistTags();
		getEventTags();
	});
	$("input[type='text']").autocomplete({
		minLength: 0
	}).focus(function() {
		getArtistTags();
		getEventTags();
		$(this).select();
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