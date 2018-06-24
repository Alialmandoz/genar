function getIntegrantes(user_id) {

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

            let counter = 0;

            myJson.forEach(element => {
                counter++;

                let ouput =
                    `
                <figure class="container_integrante">
                    <img class="img-integrante" src="genarBackend/integrantes${element.imagen}" alt="${counter}"/>  
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


function crearIntegrante(data) {
    // Default options are marked with *
    return fetch('http://127.0.0.1:8000/integrantes/', {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()); // parses response to JSON
}

function toJSONString(form) {
    var obj = {};
    var elements = form.querySelectorAll("input");
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if (name) {
            obj[name] = value;
        }
    }
    console.log('​toJSONString -> obj', obj);
    return JSON.stringify(obj);
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("crear_integrante_form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var resp = toJSONString(this);
        var obj = JSON.parse(resp);
        console.log('​json', obj);

        crearIntegrante(obj);

    }, false);

});

getIntegrantes();
