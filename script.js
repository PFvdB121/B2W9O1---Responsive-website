if (screen.width<992){
	document.getElementById("button1").onclick=function(){
		showmenu();
	}
	for (var i = 2; i <=3 ; i++) {
		var buttons = document.getElementById("button" + i);
		buttons.onclick=function(){
			showsubmenu(this);
		}
	}
}
var rijArray=["instructeur.jpg", "lesAuto.jpg", "school.jpg"];
var navi = document.getElementById("navi");
var NB = document.querySelectorAll(".iButton button")
var FI = document.getElementById("frontImage");
function showmenu() {
	if (navi.className == "menu") {
		navi.setAttribute("class", "");
	}
	else{
		navi.setAttribute("class", "menu");
	}
}
function showsubmenu(menu){
	if (menu.className == "menu") {
		menu.setAttribute("class", "");
	}
	else{
		menu.setAttribute("class", "menu");
	}
}
function image(INRA, TB){
	for (var i = 0; i < NB.length; i++) {
		NB[i].style.backgroundColor="rgba(197, 197, 197, 0.5)";
	}
	TB.style.backgroundColor="rgba(255, 255, 255, 0.5)";
	FI.style.backgroundImage='url("images/'+rijArray[INRA]+'")';
}
