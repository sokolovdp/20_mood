function randomInt(range) {
	return Math.floor((Math.random() * (range - 1)));
}

function getJsonData(idName) {
	var jsonElement = document.getElementById(idName).innerHTML;
	return JSON.parse(jsonElement)
}

function replaceH1Text(zen) {
	var h1 = document.getElementById("h1");
	h1.innerHTML = zen;
}

function replaceBodyBackGroundImage(image) {
	var body = document.getElementById("body");
	body.setAttribute("background", image)
}

function makeZen() {
	var zenArray = getJsonData("zen_json");
	var zenOfDay = zenArray[randomInt(zenArray.length)].zen;
	var imageArray = getJsonData("zen_images");
	var imageOfDay = "./static/" + imageArray[randomInt(imageArray.length)];

	replaceH1Text(zenOfDay);
	replaceBodyBackGroundImage(imageOfDay);
}

window.onload = makeZen;
