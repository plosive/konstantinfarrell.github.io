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

function preload(imageArray){
    $(imageArray).each(function(){
        var html = $.parseHTML(this);
        $(html).css('opacity', '0');
        var src = $(html).attr('src');
        $.preloadImages(src);
    });
}

var interval = 2000; // 2 seconds for each word.
var numWords = 3; // 3 words seems like a decent amount.
var words; // End choices.
var text; // All nice sounding adjectives.
var images; // All logos for stuff I can use.
var finalImages; // All final images.
var current = 0; // Initialize the list.

// Get the raw JSON dump.
var raw = $.getJSON("../../words.json", function(e){
    // get all the text and images on inventory
    text = e.words.text;
    images = e.words.images;
    divs = e.words.divs;
    // preload the images
    preload(images);

    // pick <numWords> random ones from each
    words = pickNum(text, numWords);

    finalImages = pickNum(images, numWords);
    words = words.concat(finalImages);

    // add the final text
    words.push(e.words.close);
});

$(window).load(function(){
    setInterval(function swapWords(){
        var length = words.length - 1;
        if(current < length){
            $("#slogan").fadeOut(function(){
                $("#slogan").html(words[current]);
                $("#slogan").fadeIn();
            });
            current++;
        }
    }, interval);
});


