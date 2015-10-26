// A short script that gives me credit lol.
function credit(){
    var openingHtml = '<div class="text-muted text-center">';
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
        "Fed to ducks",
    ];
    var credit = credits[Math.floor(Math.random()*credits.length)];
    return openingHtml + credit + closingHtml;
}
var credit = credit();
document.write(credit);
