//http://stackoverflow.com/questions/3387427/remove-element-by-id
Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    //http://stackoverflow.com/questions/3387427/remove-element-by-id
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

var getPassword = function() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var resultsdiv = document.getElementById("resultsdiv");
    if (pass1.length > 7) {
        if (pass1 === pass2) {
            if (resultsdiv.childNodes.length > 0) {
                resultsdiv.removeChild(resultsdiv.childNodes[0]);
            }
            createResultsView("Congratulations, passwords are valid and match.");
        } else {
            if (resultsdiv.childNodes.length > 0) {
                resultsdiv.removeChild(resultsdiv.childNodes[0]);
            }
            createResultsView("Passwords do not match.");
        }
    } else {
        if (resultsdiv.childNodes.length > 0) {
            console.log(resultsdiv.childNodes.length.toString())
            resultsdiv.removeChild(resultsdiv.childNodes[0]);
        }
        console.log(resultsdiv.childNodes.length.toString())
        createResultsView("Please enter a password that is at least 8 characters.");
    }
}


var createResultsView = function(str) {
    var resultsdiv = document.getElementById("resultsdiv");
    var label = document.createElement("label");
    label.className = "validatorResultsLabel";
    label.innerHTML = "Results:";
    label.htmlfor = "validatorResults";
    var textArea = document.createElement("textArea");
    textArea.className = "form-control";
    textArea.rows = "4";
    textArea.style = "font-family:monospace";
    textArea.innerHTML = str;
    label.appendChild(textArea);
    resultsdiv.appendChild(label);
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    getPassword();
});

document.getElementById("pass1").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});

document.getElementById("pass2").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});
