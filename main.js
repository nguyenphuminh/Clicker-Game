var a = document.querySelector(".money");
var scorepoint = localStorage.getItem("scorep");
scorepoint = parseInt(scorepoint);
var mce1 = localStorage.getItem("mc1");
var mce2 = localStorage.getItem("mc2");
var mce3 = localStorage.getItem("mc3");
var mce4 = localStorage.getItem("mc4");
var mce5 = localStorage.getItem("mc5");
var mce6 = localStorage.getItem("mc6");
a.innerHTML = localStorage.getItem("score");
a.innerHTML = parseInt(a.innerHTML);
if (a.innerHTML == undefined || a.innerHTML == "NaN"){
	a.innerHTML = 0;
}
if (scorepoint == 0 || isNaN(scorepoint)){
	scorepoint = 1;
}
if (mce1 == "d"){
	var mouse1 = document.querySelector(".mouse1");
	mouse1.setAttribute("disabled", "");
}

if (mce2 == "d"){
	var mouse2 = document.querySelector(".mouse2");
	mouse2.setAttribute("disabled", "");
}

if (mce3 == "d"){
	var mouse3 = document.querySelector(".mouse3");
	mouse3.setAttribute("disabled", "");
}

if (mce4 == "d"){
	var mouse4 = document.querySelector(".mouse4");
	mouse4.setAttribute("disabled", "");
}
if (mce5 == "d"){
	var mouse5 = document.querySelector(".mouse5");
	mouse5.setAttribute("disabled", "");
}
if (mce6 == "d"){
	var mouse6 = document.querySelector(".mouse6");
	mouse6.setAttribute("disabled", "");
	setInterval(function(){
			a.innerHTML++;
			localStorage.setItem("score", a.innerHTML);
		}, 5000);
}


function getScore(){
	for (i=0;i<scorepoint;i++){
		a.innerHTML++;
		localStorage.setItem("score", a.innerHTML);
	}
}

function stupidMouse(){
	if (a.innerHTML >= 10){
		scorepoint+=1;
		a.innerHTML-=10;
		var mouse1 = document.querySelector(".mouse1");
		mouse1.setAttribute("disabled", "");
		localStorage.setItem("scorep", scorepoint);
		localStorage.setItem("score", a.innerHTML);
		localStorage.setItem("mc1", "d");
	}
}

function goodMouse(){
	if (a.innerHTML >= 50){
		scorepoint+=3;
		a.innerHTML-=50;
		var mouse2 = document.querySelector(".mouse2");
		mouse2.setAttribute("disabled", "");
		localStorage.setItem("scorep", scorepoint);
		localStorage.setItem("score", a.innerHTML);
		localStorage.setItem("mc2", "d");
	}
}

function thiccMouse(){
	if (a.innerHTML >= 100){
		scorepoint+=5;
		a.innerHTML-=100;
		var mouse3 = document.querySelector(".mouse3");
		mouse3.setAttribute("disabled", "");
		localStorage.setItem("scorep", scorepoint);
		localStorage.setItem("score", a.innerHTML);
		localStorage.setItem("mc3", "d");
	}
}

function legendaryMouse(){
	if (a.innerHTML >= 300){
		scorepoint+=7;
		a.innerHTML-=300;
		var mouse4 = document.querySelector(".mouse4");
		mouse4.setAttribute("disabled", "");
		localStorage.setItem("scorep", scorepoint);
		localStorage.setItem("score", a.innerHTML);
		localStorage.setItem("mc4", "d");
	}
}

function godMouse(){
	if (a.innerHTML >= 2000){
		scorepoint*=2;
		a.innerHTML-=2000;
		var mouse5 = document.querySelector(".mouse5");
		mouse5.setAttribute("disabled", "");
		localStorage.setItem("scorep", scorepoint);
		localStorage.setItem("score", a.innerHTML);
		localStorage.setItem("mc5", "d");
	}
}

function autoClicker(){
	if (a.innerHTML >= 1000){
		a.innerHTML-=1000;
		var mouse6 = document.querySelector(".mouse6");
		mouse6.setAttribute("disabled", "");
		localStorage.setItem("mc6", "d");
		autoClick = setInterval(function(){
			a.innerHTML++;
			localStorage.setItem("score", a.innerHTML);
		}, 5000);
	}
}

function clearSave(){
	a.innerHTML = 0
	scorepoint = 1;
	localStorage.setItem("score", 0);
	localStorage.setItem("scorep", 0)
	localStorage.setItem("mc1", "")
	localStorage.setItem("mc2", "")
	localStorage.setItem("mc3", "")
	localStorage.setItem("mc4", "")
	localStorage.setItem("mc5", "")
	localStorage.setItem("mc6", "");

	var mouse1 = document.querySelector(".mouse1");
	mouse1.outerHTML = mouse1.outerHTML.replace("disabled", "");
	mouse1 = document.querySelector(".mouse2");
	mouse1.outerHTML = mouse1.outerHTML.replace("disabled", "");
	mouse1 = document.querySelector(".mouse3");
	mouse1.outerHTML = mouse1.outerHTML.replace("disabled", "");
	mouse1 = document.querySelector(".mouse4");
	mouse1.outerHTML = mouse1.outerHTML.replace("disabled", "");
	mouse1 = document.querySelector(".mouse5");
	mouse1.outerHTML = mouse1.outerHTML.replace("disabled", "");
	mouse1 = document.querySelector(".mouse6");
	mouse1.outerHTML = mouse1.outerHTML.replace("disabled", "");

	clearInterval(autoClick);
}