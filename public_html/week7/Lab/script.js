
$('#nav li a').mouseover(function() {
    $(this).css('background-color', 'red').css('color', 'white')
        .animate({"margin-top": "-10px"}, 200 );
}).mouseout(function(){
    $(this).css('background-color', 'white').css('color', 'black')
        .animate({"margin-top": "0px"}, 200 );
});