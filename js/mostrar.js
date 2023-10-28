document.getElementById('verMas').addEventListener('click', function () {
    if (confirm('¿Deseas continuar?')) {
        document.getElementById('seccion2').style.display = 'flex';
        document.getElementById('section3').style.display = 'flex';
        
        // Mostrar los enlaces ocultos
        document.querySelectorAll('.servicios-link, .colaboradores-link').forEach(link => {
            link.style.display = 'inline'; // o 'block', dependiendo del tipo de display deseado
        });
        document.querySelectorAll('.vermas-link').forEach(link => {
            link.style.display = 'none'; // o 'block', dependiendo del tipo de display deseado
        });
    }//si no oprime continuar no hara nada
});
const modal=document.querySelector(".modal")
const botonAbrir=document.getElementById("abrirModal")
const botonCerrar=document.getElementById("cerrarModal")
botonAbrir.document.addEventListener("click",abrirModal)

function abrirModal(){
    modal.classList.add("revelar");
}
function cerrarModal(){
    modal.classList.remove("revelar")
}