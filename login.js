
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var password = "06/20/2022";

function passcheck() {
    var userInput = document.getElementById('pass1').value;

    if(userInput !== password) {
        alert("Wow...you don't know our anniversary :c. Press Ok to TRY AGAIN")
        return false;
    }

    if(userInput === password) {
        alert("YAY GOOD JOB MY LOVE! Click Ok to CONTINUE")
        return true;
    }
}