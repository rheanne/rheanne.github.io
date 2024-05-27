
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
    if(document.getElementById('pass1').value != password) {
        alert("Wow...you don't know our anniversary :c")
        return false;
    }

    if(document.getElementById('pass1').value == password) {
        alert("YAY GOOD JOB MY LOVE! Click Ok to CONTINUE")
    }
}