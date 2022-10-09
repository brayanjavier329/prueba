/*const personajes=fetch("https://rickandmortyapi.com/api/character");
personajes.then(response => response.json())
console.log(personajes) */
/*function getCharacters(done){
    const results=fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        })
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article=document.createRange().createContextualFragment(`
        <div class="row mx-5">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${personaje.image}">
                    <div class="card-body">
                        <h1>${personaje.name}</h1>
                        <p>${personaje.status}</p>
                        <a href="infoProject.html" class="btn btn-primary">Info del project</a>
                    </div>
                </div>
    
            </div>
            
        </div>
            `)
        const main=document.querySelector("main")

        main.append(article)
    });
    console.log(data)
})*/




console.log(proyecto)

function dibujarTarjetas(){
    for (let i = 0; i < Object.keys(prueba.json).length; i++) {
        const tarjeta=document.createRange().createContextualFragment(`
    <div class="row mx-5">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${proyecto.img}>
                <div class="card-body">
                    <h1>${(prueba.json).titulo}</h1>
                    <p>${proyecto.descripcion}
                    </p>
                    <a href="infoProject.html" class="btn btn-primary">Info del project</a>
                </div>
            </div>

        </div>
        
    </div>
        `);

        const main=document.querySelector("main");
        main.append(tarjeta)
      }
}
dibujarTarjetas()