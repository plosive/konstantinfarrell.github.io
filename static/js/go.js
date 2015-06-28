function pickNum(array, number){
    var result = [];
    var length = array.length;
    // pick the random values
    if(number < length){
        for(i = 0; i < number; i++){
            var index = Math.floor(Math.random() * (length -1));
            result.push(array[index]);
            if(index > -1){
                array.splice(index,1);
            }
            length = array.length;
        }
        return result;
    }
    else {
        return array;
    }
}


$(document).ready(function(){
    var interval = 2000; // 2 seconds for each word.
    var numWords = 3; // 3 words seems like a decent amount.
    var words; // End choices.
    var text; // All nice sounding adjectives.
    var images; // All logos for stuff I can use.
    var current = 0; // Initialize the list.
    // Get the raw JSON dump.
    var raw = $.getJSON("../../words.json", function(e){
        text = e.words.text;
        images = e.words.images;
        words = pickNum(text, numWords);
        words = words.concat(pickNum(images, numWords));
        words.push(e.words.close);
    });

    setInterval(function swapWords(){
        var length = words.length - 1;
        if(current < length){
            $("#slogan").fadeOut(function(){
                $("#slogan").html(words[current]);
            });
            current++;
            $("#slogan").fadeIn();
        }
    }, interval);
});


