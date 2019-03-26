'use strict';

let app = {
    init: function() {
        let dropArea = document.getElementById('upload-area');

        dropArea.addEventListener('dragenter', this.handleUpload, false);
        dropArea.addEventListener('dragleave', this.handleUpload, false);
        dropArea.addEventListener('dragover', this.handleUpload, false);
        dropArea.addEventListener('drop', this.handleDrop, false);
    
        document.getElementById('clear').addEventListener('click', function() {
            document.getElementById('preview').innerHTML = '';
            document.getElementById('file-link').value = '';
        });
    
        document.getElementById('file-show').addEventListener('click', function() {
            document.getElementById('preview').innerHTML = '';
            let link = document.getElementById('file-link').value;
            if(!link)  return true;
            let image = document.createElement('img');
            image.src = link;
            document.getElementById('preview').appendChild(image);
        });
    
    },
    handleUpload: function(e) {
        e.preventDefault();
        e.stopPropagation();
    },
    handleDrop: function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('preview').innerHTML = '';
        let dt = e.dataTransfer;
        let files = dt.files;
        var reader = new FileReader();
        reader.onload = function(e) {
            let image = document.createElement('img');
            image.src = e.target.result;
            document.getElementById('preview').appendChild(image);
        }
        reader.readAsDataURL(files[0]);
    }
};

(function() {
    app.init();
})(app);
