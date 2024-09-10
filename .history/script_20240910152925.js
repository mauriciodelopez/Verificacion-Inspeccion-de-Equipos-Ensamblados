document.getElementById('inspectionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const verificador = document.getElementById('verificador').value;
    const cargo = document.getElementById('cargo').value;
    const cotizacion = document.getElementById('cotizacion').value;
    const fechaAntesPintura = document.getElementById('fechaAntesPintura').value;
    const fechaDespuesPintura = document.getElementById('fechaDespuesPintura').value;
    const tipoEnsamble = document.getElementById('tipoEnsamble').value;
    const firma = document.getElementById('firma').value;
    const cargoFirma = document.getElementById('cargoFirma').value;

    if (verificador && cargo && cotizacion && fechaAntesPintura && fechaDespuesPintura && tipoEnsamble && firma && cargoFirma) {
        alert('Formulario enviado correctamente');
        // Aquí puedes agregar la lógica para enviar los datos a un servidor
    } else {
        alert('Por favor, complete todos los campos');
    }
});