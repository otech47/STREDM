<?php

$con = mysqli_connect("localhost", "otech47_sc", "soundcloud1","otech47_soundcloud");

if (!$con)
{
	die('Could not connect: ' . mysql_error());
}

$event = $_POST['event'];
$artist = $_POST['artist'];

if($event == "")
{
	$eventArray = array("blankevent");
	$isEventEmpty = true;
}
else
{
	$eventSql = "SELECT url FROM sets WHERE event='$event'";
	$eventResult = mysqli_query($con, $eventSql);
	$i = 0;
	while($eventRow = mysqli_fetch_array($eventResult))
	{
		$eventArray[$i] = $eventRow[0];
		$i++;
	}
}

if($artist == "")
{
	$artistArray = array("blankartist");
	$isArtistEmpty = true;
}
else
{
	$artistSql = "SELECT url FROM sets WHERE artist='$artist'";
	$artistResult = mysqli_query($con, $artistSql);
	$i = 0;
	while($artistRow = mysqli_fetch_array($artistResult))
	{
		$artistArray[$i] = $artistRow[0];
		$i++;
	}
}

$resultArray = array();
$isResultEmpty = true;

foreach ($eventArray as $eventValue)
{
	foreach ($artistArray as $artistValue)
	{
		if($eventValue == $artistValue)
		{
			array_push($resultArray, $artistValue);
			$isResultEmpty = false;
		}
	}
}

if($isResultEmpty)
{
	if(!($isEventEmpty xor $isArtistEmpty))
	{
	}
	else if(!$isEventEmpty)
	{
		$resultArray = $eventArray;
	}
	else if(!$isArtistEmpty)
	{
		$resultArray = $artistArray;
	}
}

if(!empty($resultArray))
{
	$j = rand(0, count($resultArray)-1);
	$returnResult = "<p>test";
	echo json_encode($returnResult);
}
else
{
	$returnResult = "<p>No results found";
	echo json_encode($returnResult);
}

// if(!empty($resultArray))
// {
	// $j = rand(0, count($resultArray)-1);
	// $returnResult = "<iframe width='100%' height='100%' scrolling='no' frameborder='no' src=".$resultArray[$j]."&amp;auto_play=true&amp;show_user=false"."></iframe>";
	// echo json_encode($returnResult);
// }
// else
// {
	// $returnResult = "<p>No results found";
	// echo json_encode($returnResult);
// }

?>