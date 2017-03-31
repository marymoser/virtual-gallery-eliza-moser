/*
Areas for Image Maps
*/
var westMapSlices = {
	map: [
		{
			Coords: "600,168,718,270",
			Title: "November Still Life",
			HRef: "img/works/November_Still_Life.jpg"
		},
		{
			Coords: "602,272,658,328",
			Title: "Gold and Blue",
			HRef: "img/works/Gold_and_Blue_WIP.jpg"
		},
		{
			Coords: "663,272,721,328",
			Title: "Highlights",
			HRef: "img/works/Highlights.jpg"
		}]
}

var eastMapSlices = {
	map: [
		{

		}]
}

var stageMapSlices = {
	map: [
		{
			Coords: "488,49,603,137",
			Title: "Mel",
			HRef: "img/works/Mel.jpg"
		},
		{
      Coords: "724,128,806,265",
			Title: "Falco II",
			HRef: "img/works/Falco_II.jpg"
    },
		{
			Coords: "961,47,1032,132",
			Title: "Portrait of the Artist, Age 21",
			HRef: "img/works/Self_Portrait_Age_21.jpg"
		},
		{
			Coords: "945,139,1047,227",
			Title: "Terracotta and Green",
			HRef: "img/works/Terracotta_and_Green.jpg"
		},
		{
			Coords: "945,139,1047,227,",
			Title: "Terracotta and Green",
			HRef: "img/works/Terracotta_and_Green.jpg"
		},
		{
			Coords: "1170,149,1249,266",
			Title: "Resting Figure",
			HRef: "img/works/Resting_Figure.jpg"
		}]
}


function createMap() {
	console.log("Inside function");
	// Figure out which gallery view this is
	var mapTag = document.getElementsByTagName("map")[0];
	var mapName = mapTag.getAttribute("name");
	console.log("Name of image map is " + mapName);
	var slices;
	switch (mapName) {
		case "westmap":
			console.log("Build west gallery map");
			slices = westMapSlices;
			break;
		case "eastmap":
			console.log("Build east gallery map");
			slices = eastMapSlices;
			break;
		case "stagemap":
			console.log("Build stage map");
			slices = stageMapSlices;
			break;
		default:
			slices = {};
			console.log("ERROR: Invalid map");
			return;
	}

	// Create area tags from object
	var i;
	for (var i = 0; i < slices.map.length; i++) {
		console.log(i);
		var artwork = slices.map[i];
		console.log(artwork);
		var newArea = document.createElement("AREA");
		newArea.setAttribute("coords", artwork.Coords);
		newArea.setAttribute("shape", "rect");
		newArea.setAttribute("title", artwork.Title);
		newArea.setAttribute("href", artwork.HRef);
		newArea.setAttribute("target", "_blank");
		console.log(newArea);
		mapTag.appendChild(newArea);
	}
}
