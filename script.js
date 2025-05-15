document.addEventListener("DOMContentLoaded", () => {
    const gris = document.getElementById("gris");
    const morado = document.getElementById("morado");
    const rosado = document.getElementById("rosado");
    const negro = document.getElementById("negro");
    const box1 = document.getElementById("box1");

    function cambiarColorFondo(color) {
        box1.style.backgroundColor = color;
    }

    gris.addEventListener("click", () => cambiarColorFondo("grey"));
    morado.addEventListener("click", () => cambiarColorFondo( "rgba(225, 57, 217, 0.885)"));
    rosado.addEventListener("click", () => cambiarColorFondo("pink"));
    negro.addEventListener("click", () => cambiarColorFondo("rgba(40, 132, 213, 0.744)"));
});

function buscarSeccion() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var sections = ["galaxias", "andromeda", "supernovas", "bigbang", "expansion"];
    var found = false;

    sections.forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        section.innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Restablecer el contenido original

        if (sectionId.toLowerCase().includes(input)) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            section.classList.add("highlight");
            var highlightedText = section.innerHTML.replace(new RegExp(input, 'gi'), function(matched) {
                return `<span class="highlight">${matched}</span>`;
            });
            section.innerHTML = highlightedText;

            setTimeout(() => {
                section.classList.remove("highlight");
                section.innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Restaurar el contenido original
            }, 2000);
            found = true;
        }
    });

    if (!found) {
        alert("No se encontró ninguna sección con ese nombre.");
    }
}


function buscarSeccion() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var sections = ["galaxias", "andromeda", "supernovas", "bigbang", "expansion"];
    var found = false;

    sections.forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        section.innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Restablecer el contenido original

        if (sectionId.toLowerCase().includes(input)) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            section.classList.add("highlight");

         
            var highlightedText = section.innerHTML.replace(new RegExp(input, 'gi'), function(matched) {
                return `<span class="highlight">${matched}</span>`;
            });
            section.innerHTML = highlightedText;

            
            setTimeout(() => {
                section.classList.remove("highlight");
                section.innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Restaurar el contenido original
            }, 2000);

            found = true;
        }
    });

    if (!found) {
        alert("No se encontró ninguna sección con ese nombre.");
    }

    
}
 function actualizarReloj() {
      const ahora = new Date(); // Obtener la fecha y hora actual
      const horas = String(ahora.getHours()).padStart(2, '0'); 
      const minutos = String(ahora.getMinutes()).padStart(2, '0');
      const segundos = String(ahora.getSeconds()).padStart(2, '0'); 
  
      const horaFormateada = `${horas}:${minutos}:${segundos}`;
  
      document.getElementById('reloj').textContent = horaFormateada;
  }
  
  
  setInterval(actualizarReloj, 1000);
  
  actualizarReloj();

// === CALCULADORA DE PESO SEGÚN EL PLANETA ===
const gravedades = {
    "mercurio": 0.38,
    "venus": 0.91,
    "tierra": 1.00,
    "marte": 0.38,
    "jupiter": 2.34,
    "saturno": 1.06,
    "urano": 0.92,
    "neptuno": 1.19
};

// Función ACCESIBLE
function calcularPeso() {
    console.log("Botón Calcular presionado"); //

    const pesoUsuario = parseFloat(document.getElementById("miPeso").value);
    const planeta = document.getElementById("planetaSelector").value;

    const resultadoMostrar = document.getElementById("resultado-mostrar");
    const nombrePlaneta = document.getElementById("nombrePlaneta");
    const resultadoTexto = document.getElementById("resultadoTexto");
    const gravedadTexto = document.getElementById("gravedadTexto");

    if (isNaN(pesoUsuario) || pesoUsuario <= 0) {
        nombrePlaneta.textContent = "Error";
        resultadoTexto.innerHTML = "<span style='color:red;'>⚠️ Ingresa un peso válido</span>";
        gravedadTexto.textContent = "";
        return;
    }

    const gravedad = gravedades[planeta];
    const pesoEnPlaneta = (pesoUsuario * gravedad).toFixed(2);

    // Emojis
    const emojis = {
        "mercurio": "🪐",
        "venus": "🪐",
        "tierra": "🌍",
        "marte": "🪐",
        "jupiter": "🪐",
        "saturno": "🪐",
        "urano": "🪐",
        "neptuno": "🪐"
    };
    const emoji = emojis[planeta] || "🪐";

    nombrePlaneta.textContent = `${emoji} ${planeta.charAt(0).toUpperCase() + planeta.slice(1)}`;
    resultadoTexto.textContent = `${parseFloat(pesoEnPlaneta).toFixed(2)} kg`;
    gravedadTexto.innerHTML = `<em>Gravedad: ${gravedad.toFixed(2)} × Tierra</em>`;
}

// === BÚSQUEDA POR VOZ ===
function iniciarBusquedaVoz() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert("⚠️ Tu navegador no soporta reconocimiento de voz.");
        return;
    }

    const recognition = ('webkitSpeechRecognition' in window)
        ? new webkitSpeechRecognition()
        : new SpeechRecognition();

    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        document.getElementById("searchInput").value = transcript;
        buscarSeccion(); // Llama a tu función de búsqueda normal
    };

    recognition.onerror = function(event) {
        console.error("Error en reconocimiento de voz:", event.error);
    };
}
