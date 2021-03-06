/*
    Part 1: Data
    "players" contains all the ranks for skule smash. How it is determined is not provided here.
    "players" is in JSON format.
        Flairs(melee):      Bowser,CaptainFalcon,DonkeyKong,DrMario,Falco,Fox,Ganondorf,IceClimbers,Jigglypuff,Kirby,Link,Luigi,Mario,Marth,Mewtwo,MrGameAndWatch,Ness,Peach,Pichu,Pikachu,Roy,Samus,Sheik,Yoshi,YoungLink,Zelda",
        Flairs(PM):         Bowser,CaptainFalcon,Charizard,DiddyKong,DonkeyKong,Falco,Fox,Ganondorf,IceClimbers,Ike,Ivysaur,Jigglypuff,KingDeDeDe,Kirby,Link,Lucario,Lucas,Luigi,Mario,Marth,MetaKnight,Mewtwo,MrGameAndWatch,Ness,Olimar,Peach,Pikachu,Pit,ROB,Roy,Samus,Sheik,Snake,Sonic,Squirtle,ToonLink,Wario,Wolf,Yoshi,Zelda,ZeroSuitSamus",
        Wins:               located in the /img/tourney folder"

    Part 2: Functions
    msort() finds top 5 melee players
    pmsort() finds top 5 pm players

    Part 3: Div writing
    open div
        h4
        h3 | h3
        melee top 5
        pm top 5
    close div
*/

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

// Part 2: Functions

function msort(){
    var r = [];
    for (c=1;c<=5;c++) {
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
    for (c=1;c<=5;c++) {
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

// Part 3: Document

document.write('<div class="dplow ranking"><h4><a href="/rankings">Power Rankings</a></h4>');
document.write('<h3 id="rme"><i class="game" href="#Melee"></i></h3>');
document.write('<h3 id="rpm"><i class="game" href="#ProjectM"></i></h3>');

    // Melee half
    divme = '<ul class="me">';
    for (i in melist) {
        var r = melist[i];
        divme += '<a href="/rankings#m' + players[r].merank + '">';
        divme += '<li><span>' + players[r].merank + '</span>' + players[r].name;
        for (m in players[r].melee) {
            divme += '<i class="flair" href="#Melee' + players[r].melee[m] + '" title="' + players[r].melee[m] + '"></i>';
        }
        divme += '</li></a>';
    }
    divme += '</ul>';
    document.write(divme);

    // PM half
    divpm = '<ul class="pm">';
    for (i in pmlist) {
        var r = pmlist[i];
        divpm += '<a href="/rankings#p' + players[r].pmrank + '">';
        divpm += '<li><span>' + players[r].pmrank + '</span>' + players[r].name;
        for (m in players[r].pm) {
            divpm += '<i class="flair" href="#Pm' + players[r].pm[m] + '" title="' + players[r].pm[m] + '"></i>';
        }
        divpm += '</li></a>';
    }
    divpm += '</ul>';
    document.write(divpm);

document.write('</div>');
