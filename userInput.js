function usrFavColors() {
    colorPicker1();

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

    function colorPicker1() {
        var choice = prompt("What's your #1 favorite color? Options: Red, Blue, Green, Purple, Yellow, Orange, Blood Orange, and Pink.");
        var col1 = document.getElementById("color1");
        col1.innerHTML = choice;
        col1.setAttribute("class", colorSetter(choice));
        colorPicker2();
    }

    function colorPicker2() {
        var choice = prompt("What's your #2 favorite color? Options: Red, Blue, Green, Purple, Yellow, Orange, Blood Orange, and Pink.");
        var col2 = document.getElementById("color2");
        col2.innerHTML = choice;
        col2.setAttribute("class", colorSetter(choice));
        colorPicker3();
    }

    function colorPicker3() {
        var choice = prompt("What's your #3 favorite color? Options: Red, Blue, Green, Purple, Yellow, Orange, Blood Orange, and Pink.");
        var col3 = document.getElementById("color3");
        col3.innerHTML = choice;
        col3.setAttribute("class", colorSetter(choice));
	}

}
window.onload = usrFavColors;