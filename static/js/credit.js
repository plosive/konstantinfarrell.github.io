// A short script that gives me credit lol.
function credit(){
    var openingHtml = '<div id="credit" class="text-muted text-center"><a id="refresh-credit" href="#"><span class="glyphicon glyphicon-refresh"></span></a> ';
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


var script = "<script>" +
             "$('#refresh-credit').click(function(e){ " +
              "$('#credit').html(); " +
              "$('#script').html(\&quot\;<script type='text/javascript' src='http://konstantinfarrell.github.io/static/js/credit.js'></script>\&quot\;)\;" +
              "})\;" +
              "</script>";

var credit;
credit = credit();
document.write(credit);
document.write(script);
