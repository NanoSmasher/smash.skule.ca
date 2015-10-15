var players = [
    {
	    "name":"n0z1ck",
	    "merank":1,
	    "melee":["Sheik"],
        "pmrank":4,
	    "pm":["Sheik"],
	    "description":"",
	    "wins":["badge"]
    },
    {
	    "name":"Silent Zebra",
	    "merank":2,
        "melee":["Ganondorf"],
    },
    {
	    "name":"Milk",
	    "merank":3,
        "melee":["Peach"],
    },
    {
	    "name":"tysonZ",
	    "merank":4,
	    "melee":["CaptainFalcon"],
    },
    {
	    "name":"Destiknee",
	    "merank":5,
	    "melee":["Bowser"],
	    "pmrank":2,
	    "pm":["Bowser"],
    },
    {
	    "name":"Alex",
	    "merank":6,
    },
    {
	    "name":"Rumble",
	    "merank":7,
    },
    {
	    "name":"Squeaky",
	    "merank":8,
 	    "melee":["Jigglypuff"]
    },
    {
	    "name":"Snice",
        "pmrank":1,
	    "pm":["Charizard"]
    },
    {
	    "name":"Jewtwo",
	    "melee":["Zelda"],
        "pmrank":3,
	    "pm":["Zelda"]
    },
    {
	    "name":"Dances with Pidgeons",
	    "melee":["Falco"],
        "pmrank":5,
	    "pm":["Falco"]
    },
    {
	    "name":"Mr. Potato Bread",
        "pmrank":6,
	    "pm":["Wolf"]
    },
    {
	    "name":"NGNL",
	    "melee":["Luigi"],
        "pmrank":7,
	    "pm":["ROB","Ike"]
    },
    {
	    "name":"Pinto",
	    "melee":["Marth"],
        "pmrank":8,
	    "pm":["Sonic"]
    },
];


function msort(){
    var r = [];
    for (c=1;c<=8;c++) {
        var end = true;
       	for (p=0;p<=players.length;p++) {
            if (players[p].merank == c) { r.push(p); end = false; break; }
        }
        if (end) { break; }
    }
	return r;
}

function pmsort(){
    var r = [];
    for (c=1;c<=8;c++) {
        var end = true;
       	for (p=0;p<=players.length;p++) {
            if (players[p].pmrank == c) { r.push(p); end = false; break; }
        }
        if (end) { break; }
    }
	return r;
}

var melist = msort();
var pmlist = pmsort();


document.write('<div class="row">');

    divme = '<div class="col-md-4 col-md-offset-1">';
    divme += '<article class="dpmid"><h3 class="text-center"><i class="game" href="#Melee"></i></h3></article>';
    for (i in melist) {
        var r = melist[i];
        divme += '<div class="col-md-12 dplow rank">';
        divme += '<a id="m' + players[r].merank + '" class="anchor"></a>';
        divme += '<table border=0><tr><td><b>' + players[r].merank + '</b></td>';
        divme += '<td><h5>' + players[r].name + '</h5></td></tr>';
        divme += '<tr><td colspan=2>Melee Mains: ';
        for (m in players[r].melee) {
            divme += '<i class="flair" href="#Melee' + players[r].melee[m] + '" title="' + players[r].melee[m] + '"></i>';
        }
        divme += '</td></tr><tr><td colspan=2>PM Mains: ';
        for (m in players[r].pm) {
            divme += '<i class="flair" href="#Pm' + players[r].pm[m] + '" title="' + players[r].pm[m] + '"></i>';
        }
        divme += '</td></tr><tr><td colspan=2>';
        if (players[r].description) { divme += '<p>' + players[r].description + '</p>'; };
        divme += '</td></tr><tr><td colspan=2>Placements: ';
        for (m in players[r].wins) {
            divme += '<img src="../img/tourney/' + players[r].wins[m] + '.png" alt="' + players[r].wins[m] + '"';
        }
        divme += '</td></tr></table></div>';   
    }
    divme += '</div>';
    document.write(divme);


    divpm = '<div class="col-md-4 col-md-offset-2">';
    divpm += '<article class="dpmid"><h3 class="text-center"><i class="game" href="#ProjectM"></i></h3></article>';
    for (i in pmlist) {
        var r = pmlist[i];
        divpm += '<div class="col-md-12 dplow rank pm">';
        divpm += '<a id="m' + players[r].pmrank + '" class="anchor"></a>';
        divpm += '<table border=0><tr><td><b>' + players[r].pmrank + '</b></td>';
        divpm += '<td><h5>' + players[r].name + '</h5></td></tr>';
        divpm += '<tr><td colspan=2>PM Mains: ';
        for (m in players[r].pm) {
            divpm += '<i class="flair" href="#Pm' + players[r].pm[m] + '" title="' + players[r].pm[m] + '"></i>';
        }
        divpm += '</td></tr><tr><td colspan=2>Melee Mains: ';
        for (m in players[r].melee) {
            divpm += '<i class="flair" href="#Melee' + players[r].melee[m] + '" title="' + players[r].melee[m] + '"></i>';
        }
        divpm += '</td></tr><tr><td colspan=2>';
        if (players[r].description) { divme += '<p>' + players[r].description + '</p>'; };
        divpm += '</td></tr><tr><td colspan=2>Placements: ';
        for (m in players[r].wins) {
            divpm += '<img src="../img/tourney/' + players[r].wins[m] + '.png" alt="' + players[r].wins[m] + '"';
        }
        divpm += '</td></tr></table></div>';   
    }
    divpm += '</div>';
    document.write(divpm);


document.write('</div>');
