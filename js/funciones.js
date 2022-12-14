/******************************************************************/
/* Web del romanticismo - funciones js para la web                 */
/* Autor : Alonso Sánchez Moreno de Vega                          */
/* Versión 1.0 - 1/12/2022                                       */
/******************************************************************/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const $btnUp = document.getElementById("arriba");

//Hace aparecer el botón a 300px
window.addEventListener(
	"scroll",
	function (event) {
		var x = document.getElementById("arriba");
		var top = this.scrollY;
		if (top > 300) x.style.display = "block";
		else x.style.display = "none";
	},
	false
);

//Para que haga un scroll up el botón
window.addEventListener("scroll", (e)=>{
	let y = document.documentElement.scrollTop;
	if(y === 0){
		$btnUp.classList.add("hide");
		$btnUp.classList.add("active");
	} else if(y>=300){
		$btnUp.classList.add("active");
		$btnUp.classList.add("hide");
	}
})
window.addEventListener("click", (e)=>{
	if(e.target === $btnUp || e.target.matches("fa fa-angle-up")){
		window.scrollTo({
			behavior:"smooth",
			top:0
		})
	}
})
