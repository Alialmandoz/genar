function getIntegrantes(user_id) {
    console.info('cargado getIntegrantes');

    var header = {
        type: 'GET',
        url: 'http://127.0.0.1:8000/integrantes/'
    };

    fetch(header.url, header)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log('​getIntegrantes -> myJson', myJson);
            console.table(myJson);

            let counter = 0;

            myJson.forEach(element => {
                counter++;

                let ouput =
                    `
                <div class="span3">
                    <img src="${element.imagen}" alt="${counter}" class="img-polaroid" />
                    <div class="roles">
                      <h5><strong>${element.nombre}</strong></h5>
                      <p>
                        ${element.email}
                      </p>
                      <ul class="social-profile">
                        <li><a href="#"><i class="icon-facebook icon-32 icon-circled"></i></a></li>
                        <li><a href="#"><i class="icon-twitter icon-32 icon-circled"></i></a></li>
                        <li><a href="#"><i class="icon-linkedin icon-32 icon-circled"></i></a></li>
                      </ul>
                    </div>
                </div>
                `;

                document.getElementById('integrantes').insertAdjacentHTML('beforeEnd', ouput);

            });

        });
}

function getArticulos(articulo_id) {
    console.info('cargado getArticulos');

    var header = {
        type: 'GET',
        url: 'http://127.0.0.1:8000/articulos/'
    };

    fetch(header.url, header)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log('​getArticulos -> myJson', myJson);
            console.table(myJson);

            let counter = 0;

            myJson.forEach(element => {
                counter++;

                if (element.tipo === "P") {
                    let ouput =
                        `

                
                <div class="span3">
                  <div class="thumbnail">
                    <div class="image-wrapp">
                      <img src="${element.imagen}"/>
                      <article class="da-animate da-slideFromRight" style="display: block;">
                      <h5><a href="${element.archivo}"><strong>${element.titulo}</strong></a></h5>
                      </article>
                    </div>
                  </div>
                </div>

                `;

                    document.getElementById('listadetrabajos').insertAdjacentHTML('beforeEnd', ouput);

                } else {
                    let ouput =
                    `
                
                    <div class="span3">
                      <div class="thumbnail">
                        <div class="image-wrapp">
                          <img src="${element.imagen}"/>
                          <article class="da-animate da-slideFromRight" style="display: block;">
                            <h5><a href="${element.archivo}"><strong>${element.titulo}</strong></a></h5>
                            
                          </article>
                        </div>
                      </div>
                    </div>
                  
                    `;

                    document.getElementById('listadetrabajos').insertAdjacentHTML('beforeEnd', ouput);
                }



            });

        });
}

getIntegrantes();
getArticulos();

