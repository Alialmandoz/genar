if(window.attachEvent) {
    window.attachEvent('onload', loadModal);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            yourFunctionName(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = loadModal;
    }
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
            console.table('​getArticulos -> myJson', myJson);

            let counter = 0;

            myJson.forEach(element => {
                counter++;

                if (element.tipo === "P") {
                    let ouput =
                        `
                <figure class="trabajo tipoP">
                    
                    <figcaption class="integrante_text ">
                        <h3>${element.titulo}</h3>
                        <button id="myBtn">Open Modal</button>
                    </figcaption>
                </figure>

                `;

                    document.getElementById('listadetrabajos').insertAdjacentHTML('beforeEnd', ouput);

                } else {
                    let ouput =
                        `
                <figure class="trabajo tipoT">
                    
                    <figcaption class="integrante_text ">
                        <h3>${element.titulo}</h3>
                        <a href="${element.archivo}">abrir</a>
                    </figcaption>
                </figure>

                `;

                    document.getElementById('listadetrabajos').insertAdjacentHTML('beforeEnd', ouput);
                }



            });

        });
}

  
function loadModal(){
  // Get the modal
    var modal = document.getElementById('myModal');

    var modalContent = document.getElementById('modal-content');
   /* var ouput = `
                <object data="${hola}" type="application/pdf">
                    <embed src="your_url_to_pdf" type="application/pdf" />
                </object>
    `;
    modalContent.insertAdjacentHTML('beforeEnd', ouput);*/

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    console.log('​document.onload -> btn', btn);
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}