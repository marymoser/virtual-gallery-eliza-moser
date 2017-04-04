var currentPage = {};

/*
Areas for Image Maps
*/
var stageElements = {
	pageTitle: "Stage",

	map: [
		{
			Coords: "531,51,610,144",
			Title: "Mel",
			ImgLink: "img/works/Mel.jpg"
		},
		{
			Coords: "526,148,613,257",
			Title: "Cast of Michaelangelo",
			ImgLink: "img/works/Michaelangelo.jpg"
		},
		{
      Coords: "757,133,844,278",
			Title: "Falco II (figure study)",
			ImgLink: "img/works/Falco_2.jpg"
    },
		{
			Coords: "1005,49,1080,139",
			Title: "Portrait of the Artist, Age 21",
			ImgLink: "img/works/Self_Portrait_Age_21.jpg"
		},
		{
			Coords: "989,144,1096,238",
			Title: "Terracotta and Green",
			ImgLink: "img/works/Terracotta_and_Green.jpg"
		},
		{
			Coords: "1224,155,1307,279",
			Title: "Resting Figure",
			ImgLink: "img/works/Resting_Figure.jpg"
		},
		{
			Coords: "1447,40,1534,148",
			Title: "Cast of Saint Theresa",
			ImgLink: "img/works/Saint_Theresa.jpg"
		},
		{
			Coords: "1451,151,1530,254",
			Title: "Portrait of Jothi",
			ImgLink: "img/works/Jothi.jpg"
		}]
}

var eastElements = {
	pageTitle: "East Gallery",

	map: [
		// Left standing easels
		{
			Coords: "118,195,216,392",
			Title: "Shy Figure",
			ImgLink: "img/works/Shy_Figure.jpg"
		},
		{
			Coords: "263,203,346,298",
			Title: "Portrait of an Italian Girl",
			ImgLink: "img/works/Italian_Girl.jpg"
		},
		// Left red panel
		{
			Coords: "507,120,582,217",
			Title: "The Muse",
			ImgLink: "img/works/Muse.jpg"
		},
		{
			Coords: "503,221,585,340",
			Title: "Falco (figure study)",
			ImgLink: "img/works/Falco_1.jpg"
		},
		// Dawn
		{
			Coords: "698,178,837,330",
			Title: "Dawn",
			ImgLink: "img/works/Dawn.jpg"
		},
		// Right red panel
		{
			Coords: "965,120,1030,203",
			Title: "Portrait of Elena",
			ImgLink: "img/works/Elena.jpg"
		},
		{
			Coords: "960,206,1037,306",
			Title: "Alessio",
			ImgLink: "img/works/Alessio.jpg"
		},
		// Right standing easel
		{
			Coords: "1103,186,1212,383",
			Title: "Seated Figure",
			ImgLink: "img/works/Seated_Figure.jpg"
		},
		// Right Small Round Table
		{
			Coords: "1258,224,1333,340",
			Title: "Echo (work-in-progress)",
			ImgLink: "img/works/Echo_WIP.jpg"
		},
		// Right Large Table
		{
			Coords: "1523,199,1614,325",
			Title: "Djole, or Portrait of Montenegrin Boy",
			ImgLink: "img/works/Djole.jpg"
		},
		{
			Coords: "1617,278,1686,378",
			Title: "Olive Tree",
			ImgLink: "img/works/Olive_Tree_Pencil.jpg"
		},
		{
			Coords: "1730,206,1809,320",
			Title: "Untitled (figure study)",
			ImgLink: "img/works/Figure_Study_1.jpg"
		},
		{
			Coords: "1816,254,1897,352",
			Title: "Untitled (figure study)",
			ImgLink: "img/works/Figure_Study_2.jpg"
		}]
}

var westElements = {
	pageTitle: "West Gallery",

	map: [
		// Left red panel
		{
			Coords: "166,124,308,302",
			Title: "Grandpa",
			ImgLink: "img/works/Grandpa.jpg"
		},
		// Left table
		{
			Coords: "364,213,448,315",
			Title: "Cinderella",
			ImgLink: "img/works/Cinderella.jpg"
		},
		// Gray panel, left side
		{
			Coords: "498,178,592,304",
			Title: "Portrait of Marco",
			ImgLink: "img/works/Marco.jpg"
		},
		// Gray panel, middle
		{
			Coords: "600,168,718,270",
			Title: "November Still Life",
			ImgLink: "img/works/November_Still_Life.jpg"
		},
		{
			Coords: "602,272,658,328",
			Title: "Gold and Blue",
			ImgLink: "img/works/Gold_and_Blue_WIP.jpg"
		},
		{
			Coords: "663,272,721,328",
			Title: "Highlights",
			ImgLink: "img/works/Highlights.jpg"
		},
		// Gray panel, right side
		{
			Coords: "727,156,794,349",
			Title: "Standing Figure",
			ImgLink: "img/works/Standing_Figure.jpg"
		},
		// Right table
		{
			Coords: "830,205,915,317",
			Title: "The Artist's Boot",
			ImgLink: "img/works/Artist_Boot.jpg"
		}
	]
}

/* Initialize page */
function initPage() {
	// Identify page by image map
	setPageByMap();
	// Change title
	setTitle(currentPage.pageTitle);
	// Change page name heading
	setPageName();
	// Populate image map
	createMap();
}

/* Identify page by map tag */
function setPageByMap() {
	// Figure out which gallery view this is
	var mapName = document.getElementsByTagName("map")[0].getAttribute("name");
	console.log("Identified image map " + mapName);
	var slices;
	switch (mapName) {
		case "stagemap":
			//console.log("Build stage map");
			currentPage = stageElements;
			break;
		case "eastmap":
			//console.log("Build east gallery map");
			currentPage = eastElements;
			break;
		case "westmap":
			//console.log("Build west gallery map");
			currentPage = westElements;
			break;
		default:
			console.log("ERROR: Invalid map");
			currentPage = {};
			return;
	}
	console.log("Current map set");
}

/* Set title page of page */
function setTitle(newTitle) {
	document.getElementsByTagName('title')[0].innerHTML = newTitle + " | Eliza Moser's Virtual Gallery";
}

function setPageName() {
	var title = currentPage.pageTitle;
	document.getElementById("pagename").innerHTML = title.toUpperCase();
}

/* Generate area tags for map */
function createMap() {
	console.log("Creating image map...");

	// Create area tags from object
	var i;
	var currentMap = currentPage.map;
	for (var i = 0; i < currentMap.length; i++) {
		var artwork = currentMap[i];
		var newArea = document.createElement("AREA");

		// Set attributes
		newArea.setAttribute("shape", "rect");
		newArea.setAttribute("coords", artwork.Coords);
		newArea.setAttribute("title", artwork.Title);

		// Add event listeners
		if (newArea.addEventListener) { // For all major browsers, except IE 8 and earlier
    	newArea.addEventListener("click", function() { showModal(this) });
		} else if (newArea.attachEvent) { // For IE 8 and earlier versions
			newArea.attachEvent("onclick", function() { showModal(this) });
		}

		// Add new area tag into map
		console.log("Create new area: " + newArea);
		document.getElementsByTagName("map")[0].appendChild(newArea);
	}
}

/* Click event for image area */
function showModal(areaElement) {
	console.log("Clicked on area");
	console.log(areaElement);

	// Identify image
	var i;
	var artwork = {};
	var currentMap = currentPage.map;
	for(i = 0; i < currentMap.length; i++) {
		if(currentMap[i].Coords === areaElement.getAttribute("coords")) {
			console.log("Found artwork");
			console.log(currentMap[i]);
			artwork = currentMap[i];
			break;
		}
	}

	// Set modal image
	var imgTag = document.getElementById("art-modal-img");
	imgTag.setAttribute("src", artwork.ImgLink);
	imgTag.setAttribute("alt", artwork.Title);
	imgTag.setAttribute("title", artwork.Title);

	// Set modal text
	document.getElementById("art-modal-text").innerHTML = artwork.Title;

	// Display modal
	document.getElementById('art-modal').style.display='block';
}
