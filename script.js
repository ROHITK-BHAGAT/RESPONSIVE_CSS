
var menu = document.getElementById("menu");
function OpenNav() {
    document.getElementsByClassName("navbar2")[0].style.display = "flex";
    menu.classList.add("humberger");

}
function CloseNav() {
    document.getElementsByClassName("navbar2")[0].style.display = "none";
    menu.classList.remove("humberger");

}
