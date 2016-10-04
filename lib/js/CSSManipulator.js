


var chameleon = function() {
    var para = document.getElementById("para");
    var borderred = document.getElementById("border-red").value;
    var bordergreen = document.getElementById("border-green").value;
    var borderblue = document.getElementById("border-blue").value;
    var borderwidth = document.getElementById("border-width").value;
    var backgroundred = document.getElementById("background-red").value;
    var backgroundgreen = document.getElementById("background-green").value;
    var backgroundblue = document.getElementById("background-blue").value;
    console.log(backgroundred.toString(), backgroundgreen.toString(), backgroundblue.toString())
    para.style.borderWidth = borderwidth;
    para.style.borderColor = "rgb(" + borderred + "," + bordergreen + "," + borderblue + ")";
    para.style.backgroundColor = "rgb(" + backgroundred + "," + backgroundgreen + "," + backgroundblue + ")";
    console.log(para)
    return 0;
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    chameleon();
});
