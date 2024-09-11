document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;
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
        "c) Verificación de manómetros", 
        "d) Verificación de niveladores", 
        "e) Verificación de mangueras neumáticas, garantizar un  solo punto de conexión neumática general.", 
        "f) Verificación de corazas que no interfieran con funcionamiento ni izaje del equipo", 
        "g) Verificación placa de marcado equipo", 
        "h) Verificación de correcta aplicación de pintura",  

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

    // Asignar la función al evento onsubmit del formulario
    document.getElementById('inspectionForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        const doc = new jsPDF();

// Título del PDF
doc.setFontSize(18);
doc.text('Verificación Inspección de Equipos Ensamblados', 20, 20);

// Información del formulario
doc.setFontSize(12);
doc.text('Número interno del formulario: F-ADM-051', 20, 30);
doc.text('Versión: 01', 20, 40);
doc.text('FA: Jun - 2024', 20, 50);

// Información del verificador
doc.text('Verificación realizada por:', 20, 60);
doc.text('Nombre: ' + document.getElementById('verificador').value, 20, 70);
doc.text('Cargo: ' + document.getElementById('cargo').value, 20, 80);

// Información del cliente
doc.text('Información del Cliente:', 20, 90);
doc.text('Cliente: ' + document.getElementById('cliente').value, 20, 100);
doc.text('No. Cotización: ' + document.getElementById('cotizacion').value, 20, 110);
doc.text('Fecha antes de pintura: ' + document.getElementById('fechaAntesPintura').value, 20, 120);
doc.text('Fecha después de pintura: ' + document.getElementById('fechaDespuesPintura').value, 20, 130);
doc.text('Tipo de ensamble: ' + document.getElementById('tipoEnsamble').value, 20, 140);

// Firma del responsable de la inspección
doc.text('Firma Responsable de la inspección:', 20, 150);
doc.text('Firma: ' + document.getElementById('firma').value, 20, 160);
doc.text('Cargo: ' + document.getElementById('cargoFirma').value, 20, 170);

// Guardar el PDF
doc.save('verificacion_inspeccion.pdf');

alert('Formulario enviado correctamente');
    });
});