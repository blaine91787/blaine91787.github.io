var index = 0;

var getNextSource = function(index) {
    var sourcedisplay = document.getElementById("sourcedisplay");
    ind = Math.abs(index);
    if (ind % 5 == 0) {
        createVideoSource(ind);
    } else if (ind % 5 == 1) {
        createImageSource(ind);
    } else if (ind % 5 == 2) {
        createImageSource(ind);
    } else if (ind % 5 == 3) {
        createImageSource(ind);
    } else if (ind % 5 == 4) {
        createImageSource(ind);
    }
}

var deleteSourceDisplayChild = function(parent) {
    if (sourcedisplay.childNodes.length > 0) {
        parent.removeChild(parent.childNodes[0]);
    }
}
var createVideoSource = function(vidNum) {
    deleteSourceDisplayChild(sourcedisplay);
    var video = document.createElement("video");
    video.autoplay = true;
    video.controls = true;
    video.setAttribute("height", "380");
    video.setAttribute("width", "100%")
    video.style.borderRadius = "35px";
    var source = document.createElement("source");
    source.setAttribute("src", "lib/vid/0.webm");
    source.setAttribute("type", "video/webm");
    video.appendChild(source);
    sourcedisplay.appendChild(video);
}

var createImageSource = function(imgNum) {
    deleteSourceDisplayChild(sourcedisplay);
    var img = document.createElement("img");
    img.setAttribute("src", "lib/img/" + imgNum % 5 + ".gif");
    img.setAttribute("type", "img/gif");
    img.setAttribute("height", "380");
    img.setAttribute("width", "100%");
    img.style.borderRadius = "35px";
    sourcedisplay.appendChild(img);
}

getNextSource(index);

document.getElementById("previous").addEventListener("click", function(event) {
    event.preventDefault();
    index = index - 1;
    getNextSource(index);
});

document.getElementById("next").addEventListener("click", function(event) {
    event.preventDefault();
    index = index + 1;
    getNextSource(index);
});
