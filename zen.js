function randomInt(range) {
    return Math.floor((Math.random() * (range - 1)));
}

function getElement(idName) {
    var manifest = document.getElementById(idName).innerHTML;
    return JSON.parse(manifest)
}

function replaceH1Text(zen) {
    var h1 = document.getElementById("H1");
    h1.innerHTML = zen;
}

function replaceBodyBackGroundImage(image) {
    var body = document.getElementById("Body");
    body.setAttribute("background", image)
}

function makeZen(){
    var zenArray = getElement("zen_json");
    var zenOfDay = zenArray[randomInt(zenArray.length)]["zen"];
    var imageArray = getElement("zen_images");
    var imageOfDay = "./static/" + imageArray[randomInt(imageArray.length)];

    console.log(zenOfDay + " -> " + imageOfDay);

    replaceH1Text(zenOfDay);
    replaceBodyBackGroundImage(imageOfDay);
}

window.onload = makeZen; 
