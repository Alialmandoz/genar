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
            console.table('​getIntegrantes -> myJson', myJson);

            let counter = 0;

            myJson.forEach(element => {
                counter++;

                let ouput =
                    `
                <figure class="container_integrante">
                    <img class="img-integrante" src="${element.imagen}" alt="${counter}"/>
                    <figcaption class="integrante_text">
                        <h3>${element.nombre}</h3>
                        <p>${element.email}</p>
                    </figcaption>
                </figure>

                `;

                document.getElementById('integrantes').insertAdjacentHTML('beforeEnd', ouput);

            });

        });
}

getIntegrantes();

