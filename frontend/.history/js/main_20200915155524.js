$(document).ready(function() {
    		
    slidify();

});

function getSortValue(){
    str = $( ".choice-list" ).first().text();
    $( ".choice-input" ).html( str );
}


$('html').click(function(){
    slidify();
});
function slidify(){
    $(".slider-item").slider({
        ticks: [0, 1, 2, 3, 4],
        ticks_labels: ['0', '1', '2', '3', '4'],
        ticks_snap_bounds: 30,
        value: 0
    });
}