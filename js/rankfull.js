var players = [
    {
	    "name":"N0z1ck",
	    "merank":1,
	    "melee":["Sheik"],
	    "pm":["Sheik"],
	    "wins":["melee","melee","melee","melee","pm","pm","pm","pm"],
		"pmrank":1
    },
    {
	    "name":"Silent Zebra",
	    "merank":2,
        "melee":["Ganondorf"],
        "wins":["melee"],
    },
    {
	    "name":"Milk",
	    "merank":5,
        "melee":["Peach"],
        "wins":["melee"],
    },
    {
	    "name":"tysonz",
	    "merank":6,
	    "melee":["CaptainFalcon"],
    },
    {
	    "name":"Johnny",
	    "merank":3,
	    "melee":["CaptainFalcon","Sheik","Ganondorf"],
    },
    {
	    "name":"Destiknee",
	    "merank":7,
	    "melee":["Falco", "Bowser"],
	    "pm":["Bowser","Falco"],
		"pmrank":3
    },
    {
	    "name":"DesTony",
        "melee":["CaptainFalcon"]
    },
    {
	    "name":"DI Guy",
        "melee":["CaptainFalcon"]
    },
    {
	    "name":"Squeakie",
	    "merank":8,
 	    "melee":["Jigglypuff","IceClimbers"],
    },
    {
	    "name":"Snice",
	    "pm":["Charizard"],        
        "wins":["pm"],
		"pmrank":4
    },
    {
	    "name":"Jewtwo",
	    "melee":["Zelda"],
	    "pm":["Zelda"],
		"pmrank":7
    },
    {
	    "name":"Dances with Pidgeons",
	    "melee":["Falco"],
        "merank":4,
	    "pm":["Falco"],
        "wins":["melee"],
    },
    {
	    "name":"Mr. Potato Bread",
	    "pm":["Wolf"],
        "pmrank":5
    },
    {
	    "name":"NGNL",
	    "melee":["Luigi"],
        "pmrank":6,
	    "pm":["ROB","Ike"]
    },
    {
	    "name":"Tiggz",
	    "melee":["Falco"],
	    "pm":["Ivysaur","Sonic"],
        "pmrank":2,
        "wins":["pm"]
    },
    {
	    "name":"Koon",
	    "pm":["ROB"]
     
    },
    {
	    "name":"NegativeX",
	    "pm":["Kirby"],
        
    },
    {
	    "name":"Kwan",
	    "pm":["Sheik"],
        "pmrank":8
    },
    {
	    "name":"AKBiggs",
	    "melee":["Marth"],
        "merank":9,
    },
    {
	    "name":"Alex",
	    "melee":["Fox"],
        "merank":10,
    }
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
            divme += '<img src="../img/tourney/' + players[r].wins[m] + '.png" title="' + players[r].wins[m] + '"/>';
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
        divpm += '<a id="p' + players[r].pmrank + '" class="anchor"></a>';
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
        if (players[r].description) { divpm += '<p>' + players[r].description + '</p>'; };
        divpm += '</td></tr><tr><td colspan=2>Placements: ';
        for (m in players[r].wins) {
            divpm += '<img src="../img/tourney/' + players[r].wins[m] + '.png" title="' + players[r].wins[m] + '"/>';
        }
        divpm += '</td></tr></table></div>';   
    }
    divpm += '</div>';
    document.write(divpm);


document.write('</div>');
