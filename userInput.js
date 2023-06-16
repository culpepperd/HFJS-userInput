function usrFavColors() {
	prompt("What's your favorite color?");

    function colorPicker(userColor) {
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
window.onload = usrFavColors;