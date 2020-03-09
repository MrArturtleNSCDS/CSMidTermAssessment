$('.color1, .color2').click(
    function(){
        var myColor = $(this).css('background-color');
        $('#display').css('background-color', myColor);
    }
)

$('.color3').click(
    function(){
        var myColor = $(this).css('background-color');
        $('#display').css('background-color', myColor);
        $('#display').css('color', $(this).css('color'));
        $('#display').text($(this).text());
    }
);

$('#box5').click(
    function(){
        var myColor = $(this).css('background-color');
        $('#display').css('background-color', myColor);
        var randNum = Math.floor(Math.random()*20)+10;
        $('#box6').text(randNum);
        $('#display').text($(this).text());
    }
);

$('#box6').click(
    function(){
        var myColor = $(this).css('background-color');
        $('#display').css('background-color', myColor);
        $('#display').css('color', $(this).css('color'));
    }
);


for(var r=0; r<12; r++){
    for(var c=0; c<12; c++){
        $('#wrapperBox').append("<div class='pixel'></div>");
    }
}

$('.pixel').click(
    function(){
        $(this).css('background-color', 'darkgreen');
    }
);