function extend(){
  var name = document.getElementsByClassName('btn btn-info btn-lg');
name.setAttribute("class", "down");
}
When page is loaded do the following function
$(document).ready(function() {
// when glyphicon is clicked, do the following function
	$(".glyphicon").click(function () {
		$(".menu").slideToggle(2000);

	})

})

a = 0;
function show(){
	a++;
	if (a % 2 == 1){
		document.getElementsByClassName('menu').style.display = "none";
	}
	else {
		document.getElementsByClassName('menu').style.display = "block";
	}
}
