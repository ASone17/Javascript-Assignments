document.getElementById('first').addEventListener("click", function () {
    let xt = document.getElementById("first").value;

    switch (xt) {
        case "India":
            document.getElementById("second").style.display = "block";
            document.getElementById("third").style.display = "none";
            document.getElementById("fourth").style.display = "none";
            document.getElementById("fifth").style.display = "none";

            break;

        case "Australia":

            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "block";
            document.getElementById("fourth").style.display = "none";
            document.getElementById("Fifth").style.display = "none";


            break;

        case "England":

            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "none";
            document.getElementById("fourth").style.display = "block";
            document.getElementById("fifth").style.display = "none";


            break;

        case "New Zealand":

            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "none";
            document.getElementById("fourth").style.display = "none";
            document.getElementById("fifth").style.display = "block";
            break;
    }
}
)