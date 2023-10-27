function openFullscreen() {
    var imgSrc = "./Har.jpg"; // Replace with the URL or path to your image
    var imgElement = document.getElementById("fullscreen-img");
    imgElement.src = imgSrc;

    var fullscreenDiv = document.getElementById("fullscreen");
    fullscreenDiv.style.display = "block";
}

function closeFullscreen() {
    var fullscreenDiv = document.getElementById("fullscreen");
    fullscreenDiv.style.display = "none";
}


