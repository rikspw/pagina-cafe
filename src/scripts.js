const modal = document.querySelector (".modal")
const mascara = document.querySelector(".mascara-modal")


function mostramodal(){
modal.style.left = "50%"
mascara.style.visibility = "visible"
}
function escondermodal(){

modal.style.left = "-50%"
mascara.style.visibility = "hidden"

}