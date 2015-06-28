$(document).ready(function(){
    var interval = 2500; // 3 seconds for each word
    var words;
    var raw = $.getJSON("../../words.json", function(e){
        words = e.words;
    });
    var current = 0;
    setInterval(function swapWords(){
        var length = words.length - 1;
        if(current < length){
            $("#slogan").fadeOut(function(){
                $("#slogan").html(words[current]);
            });
            $("#slogan").fadeIn();
            current++;
        }
        else {
            //current = 0;
        }
        //current = current % length;
    }, interval);
});
