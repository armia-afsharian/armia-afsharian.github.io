/*	var nam = document.getElementById('hunter')
var inpt = document.getElementsByClassName('enput')
nam.addEventListener("click", function () {
	nam.className = "nme";
});
inpt.addEventListener("keypress", function (event) {
if (event.which === 13) {
document.getElementsByTagName('span').innerHtml = this.value ;
	nam.className = "";}
});*/
var menu = document.getElementById('ham')
var navbar = document.getElementById('navb')
menu.addEventListener("click", function(){ if (navbar.className==="nav1") {
	navbar.className ="nav2";} else{navbar.className="nav1";}
});


