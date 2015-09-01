$(document).ready(switcher);

function switcher(){
	$("#rpm").click(sme);
	$("#rme").click(spm);
}

function sme(){
	$("aside .me").css("display","none");
	$("aside .pm").css("display","block");
}

function spm(){
	$("aside .pm").css("display","none");
	$("aside .me").css("display","block");
}
