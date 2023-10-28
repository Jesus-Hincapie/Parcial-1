function crearservicios({titulo,descripcion}){
    return`
        <div class="servicios">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>

    `;

}
const data =[
    {titulo:"Bolsos", descripcion: "Gran variedad"},
    {titulo:"Maletines", descripcion: "Excelente calidad"},
    {titulo:"Calcetines", descripcion: "Muy buenos precios"},
    {titulo:"Balones deportivos", descripcion: "Resistentes"},
    {titulo:"Tennis", descripcion: "Camina a tu estilo"},
    {titulo:"Sudaderas y chaquetas", descripcion: "Viste con la mejor marca"}
];
const contenedor=document.querySelector('.contenedor-servicioss');
function mostrarservicio(){
    for(let servicios of data){
        const serviciosHtml= crearservicios(servicios);
        contenedor.insertAdjacentHTML('beforeend',serviciosHtml);
    };
}

export{mostrarservicio};