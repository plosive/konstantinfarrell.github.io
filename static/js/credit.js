// A short script that gives me credit lol.
function credit(){
    var openingHtml = '<div class="text-muted text-center"><a id="refresh-credit" href="#"><span class="glyphicon glyphicon-refresh"></span></a> ';
    var closingHtml = ' by <a href="http://konstantinfarrell.github.io">Konstantin Farrell</a></div>';

    var credits = [
        "Made lazily",
        "Quickly whipped up",
        "Crafted from cheap Mithril",
        "Randomly generated",
        "Grok'd",
        "Stolen from sleeping bandits",
        "Forged in the depths of Mordor",
        "Dropped from a plane",
        "Written in hex",
        "Freshly squeezed",
        "Fed to ducks",
    ];
    var credit = credits[Math.floor(Math.random()*credits.length)];
    return openingHtml + credit + closingHtml;
}

var credit;

$('#refresh-credit').click(function(e){
    e.preventDefault();
    credit = credit();
    document.write(credit);
});

credit = credit();
document.write(credit);
