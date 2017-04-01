/*
Areas for Image Maps
*/
var stageMapSlices = {
	map: [
		{
			Coords: "531,51,610,144",
			Title: "Mel",
			HRef: "img/works/Mel.jpg"
		},
		{
			Coords: "526,148,613,257",
			Title: "Cast of Michaelangelo",
			HRef: "img/works/Michaelangelo.jpg"
		},
		{
      Coords: "757,133,844,278",
			Title: "Falco II (figure study)",
			HRef: "img/works/Falco_2.jpg"
    },
		{
			Coords: "1005,49,1080,139",
			Title: "Portrait of the Artist, Age 21",
			HRef: "img/works/Self_Portrait_Age_21.jpg"
		},
		{
			Coords: "989,144,1096,238",
			Title: "Terracotta and Green",
			HRef: "img/works/Terracotta_and_Green.jpg"
		},
		{
			Coords: "1224,155,1307,279",
			Title: "Resting Figure",
			HRef: "img/works/Resting_Figure.jpg"
		},
		{
			Coords: "1447,40,1534,148",
			Title: "Cast of Saint Theresa",
			HRef: "img/works/Saint_Theresa.jpg"
		},
		{
			Coords: "1451,151,1530,254",
			Title: "Portrait of Jothi",
			HRef: "img/works/Jothi.jpg"
		}]
}

var eastMapSlices = {
	map: [
		// Left standing easels
		{
			Coords: "118,195,216,392",
			Title: "Shy Figure",
			HRef: "img/works/Shy_Figure.jpg"
		},
		{
			Coords: "263,203,346,298",
			Title: "Portrait of an Italian Girl",
			HRef: "img/works/Italian_Girl.jpg"
		},
		// Left red panel
		{
			Coords: "507,120,582,217",
			Title: "The Muse",
			HRef: "img/works/Muse.jpg"
		},
		{
			Coords: "503,221,585,340",
			Title: "Falco (figure study)",
			HRef: "img/works/Falco_1.jpg"
		},
		// Dawn
		{
			Coords: "698,178,837,330",
			Title: "Dawn",
			HRef: "img/works/Dawn.jpg"
		},
		// Right red panel
		{
			Coords: "965,120,1030,203",
			Title: "Portrait of Elena",
			HRef: "img/works/Elena.jpg"
		},
		{
			Coords: "960,206,1037,306",
			Title: "Alessio",
			HRef: "img/works/Alessio.jpg"
		},
		// Right standing easel
		{
			Coords: "1103,186,1212,383",
			Title: "Seated Figure",
			HRef: "img/works/Seated_Figure.jpg"
		},
		// Right Small Round Table
		{
			Coords: "1258,224,1333,340",
			Title: "Echo (work-in-progress)",
			HRef: "img/works/Echo_WIP.jpg"
		},
		// Right Large Table
		{
			Coords: "1523,199,1614,325",
			Title: "Djole, or Portrait of Montenegrin Boy",
			HRef: "img/works/Djole.jpg"
		},
		{
			Coords: "1617,278,1686,378",
			Title: "Olive Tree",
			HRef: "img/works/Olive_Tree_Pencil.jpg"
		},
		{
			Coords: "1730,206,1809,320",
			Title: "Untitled (figure study)",
			HRef: "img/works/Figure_Study_1.jpg"
		},
		{
			Coords: "1816,254,1897,352",
			Title: "Untitled (figure study)",
			HRef: "img/works/Figure_Study_2.jpg"
		}]
}

var westMapSlices = {
	map: [
		// Left red panel
		{
			Coords: "166,124,308,302",
			Title: "Grandpa",
			HRef: "img/works/Grandpa.jpg"
		},
		// Left table
		{
			Coords: "364,213,448,315",
			Title: "Cinderella",
			HRef: "img/works/Cinderella.jpg"
		},
		// Gray panel, left side
		{
			Coords: "498,178,592,304",
			Title: "Portrait of Marco",
			HRef: "img/works/Marco.jpg"
		},
		// Gray panel, middle
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
		},
		// Gray panel, right side
		{
			Coords: "727,156,794,349",
			Title: "Standing Figure",
			HRef: "img/works/Standing_Figure.jpg"
		},
		// Right table
		{
			Coords: "830,205,915,317",
			Title: "The Artist's Boot",
			HRef: "img/works/Artist_Boot.jpg"
		}
	]
}

/* Generate area tags for map */
function createMap() {
	console.log("Inside function");
	// Figure out which gallery view this is
	var mapTag = document.getElementsByTagName("map")[0];
	var mapName = mapTag.getAttribute("name");
	console.log("Name of image map is " + mapName);
	var slices;
	switch (mapName) {
		case "stagemap":
			console.log("Build stage map");
			slices = stageMapSlices;
			break;
		case "eastmap":
			console.log("Build east gallery map");
			slices = eastMapSlices;
			break;
		case "westmap":
			console.log("Build west gallery map");
			slices = westMapSlices;
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
