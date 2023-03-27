$(function() {
    $('#btn_check').click(function() { resetRating(); });
});


function resetRating() {
    document.cookie = "rating=; expires="+ new Date(0).toUTCString();
}


