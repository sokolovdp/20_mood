
function randomInt(range) {
	return Math.floor((Math.random() * range));
}

function getJsonData(idName) {
	var jsonData = document.getElementById(idName).innerHTML;
 
	return JSON.parse(jsonData)
}

function replacePhrase(text) {
	var header = document.querySelector(".phrase");
	header.textContent = text;
}

function replaceDayTitle(text) {
	var header = document.querySelector(".day");
	header.textContent = text;
}

function replaceBodyBackGroundImage(image) {
	var body = document.querySelector(".main-body");
	body.setAttribute("background", image)
}

function replaceTitle(text) {
    var title = document.querySelector("head title");
    title.textContent = text;
}

function makeMainPage() {
    
	var contentArray = getJsonData("contentJson");
    var textIndex = randomInt(contentArray.length);
	var phraseOfDay = contentArray[textIndex].msg;
	var imageOfDay = "static/" + contentArray[textIndex].pic;
	
    replaceTitle("Котики");
    replaceDayTitle("Котик дня:");
    replacePhrase(phraseOfDay);
	replaceBodyBackGroundImage(imageOfDay);
}

makeMainPage();
