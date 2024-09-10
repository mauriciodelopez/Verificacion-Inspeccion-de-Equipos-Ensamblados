document.addEventListener('DOMContentLoaded', function() {
    const descriptions = [
        "Línea suministro de vapor",
        "Verificación dimensional con plano ( antes de pintura) =",
        "Distancias según plano de fabricación respetando las tolerancias establecidas en el plano.",
        "b Verificación de paralelismo  y perpendicularidad en todas las tuberías del equipo:",
        "Línea suministro de vapor",  

        // Agrega más descripciones según sea necesario
    ];

    const tableBody = document.getElementById('inspectionTableBody');

    descriptions.forEach(description => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${description}</td>
            <td><input type="checkbox" name="${description.replace(/\s+/g, '')}Conforme"></td>
            <td><input type="checkbox" name="${description.replace(/\s+/g, '')}NoConforme"></td>
            <td><input type="checkbox" name="${description.replace(/\s+/g, '')}NoAplica"></td>
            <td><input type="text" name="${description.replace(/\s+/g, '')}Observaciones"></td>
        `;

        tableBody.appendChild(row);
    });
});

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