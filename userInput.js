var colPrompt1 = "What's your ";
var colPrompt2 = " favorite color? Options: Red, Blue, Green, Purple, Yellow, Orange, Blood Orange, and Pink.";

function usrFavColors() {
    colorPicker1();


    function colorPicker1() {
        var choice = prompt(colPrompt1 + "#1" + colPrompt2);
        var col1 = document.getElementById("color1");
        col1.innerHTML = choice;
        col1.setAttribute("class", colorSetter(choice));
        colorPicker2();
    }

    function colorPicker2() {
        var choice = prompt(colPrompt1 + "#2" + colPrompt2);
        var col2 = document.getElementById("color2");
        col2.innerHTML = choice;
        col2.setAttribute("class", colorSetter(choice));
        colorPicker3();
    }

    function colorPicker3() {
        var choice = prompt(colPrompt1 + "#3" + colPrompt2);
        var col3 = document.getElementById("color3");
        col3.innerHTML = choice;
        col3.setAttribute("class", colorSetter(choice));
    }

    function colorSetter(userColor) {
        if (userColor == "Red") {
            return "redtxt";
        } else if (userColor == "Blue") {
            return "blutxt";
        } else if (userColor == "Green") {
            return "grntxt";
        } else if (userColor == "Purple") {
            return "prptxt";
        } else if (userColor == "Yellow") {
            return "yllwtxt";
        } else if (userColor == "Orange") {
            return "orngtxt";
        } else if (userColor == "Blood Orange") {
            return "bldorngtxt";
        } else if (userColor == "Pink") {
            return "pnktxt";
        } else {
            alert("Try following directions next time.");
            return null;
        }
    }

}
window.onload = usrFavColors;