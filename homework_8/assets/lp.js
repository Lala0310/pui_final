
//Changes certain page contents size according to screen size//

$(document).ready(function(){
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";
    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
});

//Adjusts navigation bar to be responsive //

function togglemenu() {
	const menuToggle = document.querySelector('.toggle');
	const sidemenu = document.querySelector('.sidemenu');
	menuToggle.classList.toggle('active');
	sidemenu.classList.toggle('active');

//Animates responsive navigation bar when clicked//

	sidemenu.classList.add('animate__animated', 'animate__fadeIn');
	sidemenu.style.setProperty('--animate-duration', '0.5s');
}
