document.addEventListener('DOMContentLoaded', function() {
    const descriptions = [
        "Línea suministro de vapor",
        "Verificación dimensional con plano ( antes de pintura) =",
        "Distancias según plano de fabricación respetando las tolerancias establecidas en el plano.",
        "b Verificación de paralelismo  y perpendicularidad en todas las tuberías del equipo:",
        "Línea suministro de vapor",
        "Línea drenaje de separador", 
        "Línea agua bomba a intercambiador", 
        "Línea agua entrada a bomba", 
        "Línea reposición de agua", 
        "Línea venteo de aire en agua", 
        "Línea vapor motriz", 
        "Línea venteo de trampa bomba", 
        "Tanque colector de trampa bomba", 
        "Tanque Pulmón de agua", 
        "c) Verificación orientación agujeros de bridas", 
        "d) Verificación estructura dimensional", 
        "e) Verificación de componentes del ensamble y direcciones de flujo", 
        "f) Verificación de soportes, cantidad nivel , paralelismo y escuadra", 
        "g) Verificación de tapones", 
        "h) Verificación de palancas que no tengan interferencia", 
        "2. Pruebas o inspecciones de uniones soldadas: Prueba de estanqueidad", 
        "b) Inspección visual de soldaduras", 
        "c) Inspección por líquidos penetrantes", 
        "d) Otra:", 
        "3. Verificación después de pintura: a) Verificación de calibración o correcto funcionamiento (válvula actuada o válvula de control)", 
        "b) Verificación instalación tablero eléctrico y pruebas simuladas", 
        "c) Verificación de manómetros", "d) Verificación de niveladores", 
        "e) Verificación de mangueras neumáticas, garantizar un  solo punto de conexión neumática general.", 
        "f) Verificación de corazas que no interfieran con funcionamiento ni izaje del equipo", 
        "g) Verificación placa de marcado equipo", 
        "h) Verificación de correcta aplicación de pintura", 
        "Verificación dimensional con plano ( antes de pintura) = Distancias según plano de fabricación respetando las tolerancias establecidas en el plano.", 
        "b) Verificación de paralelismo  y perpendicularidad en todas las tuberías del equipo: Línea suministro de vapor", 
        "Línea drenaje de separador", 
        "Línea agua bomba a intercambiador", 
        "Línea agua entrada a bomba", 
        "Línea reposición de agua", 
        "Línea venteo de aire en agua", 
        "Línea vapor motriz",
        "Línea venteo de trampa bomba", 
        "Tanque colector de trampa bomba", 
        "Tanque Pulmón de agua", 
        "c) Verificación orientación agujeros de bridas", 
        "d) Verificación estructura dimensional", 
        "e) Verificación de componentes del ensamble y direcciones de flujo", "f) Verificación de soportes, cantidad nivel , paralelismo y escuadra", "g) Verificación de tapones", "h) Verificación de palancas que no tengan interferencia", "2. Pruebas o inspecciones de uniones soldadas: Prueba de estanqueidad", "b) Inspección visual de soldaduras", "c) Inspección por líquidos penetrantes", "d) Otra:", "3. Verificación después de pintura: a) Verificación de calibración o correcto funcionamiento (válvula actuada o válvula de control)", "b) Verificación instalación tablero eléctrico y pruebas simuladas", "c) Verificación de manómetros", "d) Verificación de niveladores", "e) Verificación de mangueras neumáticas, garantizar un  solo punto de conexión neumática general.", "f) Verificación de corazas que no interfieran con funcionamiento ni izaje del equipo", "g) Verificación placa de marcado equipo", "h) Verificación de correcta aplicación de pintura"  

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