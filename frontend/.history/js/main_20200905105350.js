(function(){
    var rating = $('.rating');
    var handle = $('#toggle-rating');
    handle.onchange = function(event) {
        rating.classList.toggle('rating', handle.checked);
    };
}());