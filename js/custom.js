$(document).ready( function() {
	function getEventTags()
	{
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
				$("#events").select();
				$("#events").autocomplete("search", "");
			}
		});
	}
	function getArtistTags()
	{
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
				$("#artists").select();
				$("#artists").autocomplete("search", "");
			}
		});
	}
	$("#artists").autocomplete({
		minLength: 0
	}).click(function() {
		getArtistTags();
	});
	$("#events").autocomplete({
		minLength: 0
	}).click(function() {
		getEventTags();
	});
	$("#events").keyup(function(event){
		if(event.keyCode == 13) 
		{
			$("button.stredm-panel-button").click();
		}
	});
	$("#artists").keyup(function(event){
		if(event.keyCode == 13) 
		{
			$("button.stredm-panel-button").click();
		}
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
	var SCwidget = SC.Widget(iframe#current-result);
});