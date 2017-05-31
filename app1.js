$(document).ready(function(){
    $(".submit").click(function(){          //Fire the click event when submit button is clicked
        $('#acadgild').text('My New Text'); 
        $('#acadgild').attr('href',"http://www.google.com")
    });
});