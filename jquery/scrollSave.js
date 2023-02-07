//Save the scroll position with the following
sessionStorage.scrollTop = document.getElementById("new-form").scrollTop;

//Moves the scroll wrapper to the saved scroll position 
$(document).ready(function() {
    if (sessionStorage.scrollTop != "undefined") {
        $("#idScrollableWrapper").scrollTop(sessionStorage.scrollTop);
        sessionStorage.scrollTop = 0;
    }
});