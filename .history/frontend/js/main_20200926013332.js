$(document).ready(function() {

    slidify();
    $('.btn-confirm').hide();
    $('.choice-list-group-item').mouseenter(function(){
       // getSortValue();
    })
    $('.choice-list-group-item').mouseout(function(){
        getSortValue();
        $('.btn-confirm').show();
    })
   
    $('.btn-confirm').click(function(){
        $(this).hide();
    })
    

    $('.btn-next').click(function() {
        $('form.form-group').addClass("slideRight");
        setTimeout(function(){ 
            $('form.form-group').removeClass("slideRight");
         }, 2000);
       
        
    });
    
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}


    
});


function getSortValue(){
    str = $( ".choice-list span" ).text();
   // let thevalue = parseFloat(str);
    $( ".choice-input" ).val( str );
    
}

function getSortValue2(){
    str = $( ".choice-list span" ).addClass('coefficient');
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