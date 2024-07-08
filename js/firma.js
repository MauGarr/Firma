document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('signature-pad');
    const signaturePad = new SignaturePad(canvas);

    // Botón para limpiar la firma
    document.getElementById('clear').addEventListener('click', function () {
        signaturePad.clear();
    });

    // Botón para guardar la firma
    document.getElementById('save').addEventListener('click', function () {
        if (signaturePad.isEmpty()) {
            alert("¡Ingresa una firma para poder guardar!");
        } else {
            const dataURL = signaturePad.toDataURL();
            console.log(dataURL); //aquí se puede agregar algo más
          
            // Crear un enlace para descargar la imagen
            const downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = 'firma.png';
            downloadLink.click();
         
            // Por ejemplo, enviar la imagen al backend
            // fetch('/your-endpoint', {
            //     method: 'POST',
            //     body: JSON.stringify({ signature: dataURL }),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });
        }
    });
});
