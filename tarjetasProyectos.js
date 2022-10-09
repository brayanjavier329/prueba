function dibujarTarjetas(){
    for (let i = 0; i < 5; i++) {
        const article=document.createRange().createContextualFragment(`
    <div class="row mx-5">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="imgprueba.jpeg" alt="Imagen de proyecto">
                <div class="card-body">
                    <h1>Project title</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Ea, dolorem! Quas, ratione. Sunt optio ad suscipit! 
                        Ex deleniti repudiandae, distinctio voluptatem voluptas,
                        rem possimus iste adipisci nisi aperiam quam esse?
                    </p>
                    <a href="infoProject.html" class="btn btn-primary">Info del project</a>
                </div>
            </div>

        </div>
        
    </div>
        `);

        const main=document.querySelector("main");
        main.append(article)
      }
}
dibujarTarjetas()