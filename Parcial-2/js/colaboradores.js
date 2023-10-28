function crearColaboradores({imagenUrl,titulo,descripcion}){
    return`
        <div class="colaborador">
            <img class="img-colaborador"src=${imagenUrl}>
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}

const cola =[
    {imagenUrl:"Imagenes/creador.jpg", titulo:"Phil Knignht", descripcion: "Creador"},
    {imagenUrl:"Imagenes/accionista1.jpg",titulo:"John C. Bogle", descripcion: "Primer accionista mayoritario"},
    {imagenUrl:"Imagenes/Accionista2.jpg",titulo:"Larry Fink", descripcion: "Segundo accionista mayoritario"}
];

const contenedorColaboradores=document.querySelector('.contenedor-colaborador');

function mostrarColaboradores(){
    for(let colaborador of cola){
        const colaboradorHtml= crearColaboradores(colaborador);
        contenedorColaboradores.insertAdjacentHTML('beforeend',colaboradorHtml);
    };
};

export{mostrarColaboradores};