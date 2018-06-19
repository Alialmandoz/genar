function UploadOnDrop() {

    var upload = function (file) {
        
        var data = new FormData();
        
        data.append('imagen', file);
        console.log('​upload -> data', data);
        
        fetch('http://127.0.0.1:8000/integrantes/upload/', {
            method: 'POST',
            body: data
        });

    };

    var dropzone = document.getElementById("image");

    dropzone.ondragover = function (e) {
        e.preventDefault();
        dropzone.classList.add("dragover");
    };

    dropzone.ondragleave = function (e) {
        e.preventDefault();
        dropzone.classList.remove("dragover");
    };

    dropzone.ondrop = function (e) {
        e.stopPropagation();
        e.preventDefault();
        dropzone.classList.remove("dragover");
        //console.log('​dropzone.ondrop -> e', e.dataTransfer.files);
        upload(e.dataTransfer.files);
    };

}

UploadOnDrop();