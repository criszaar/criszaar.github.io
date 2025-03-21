document.addEventListener("DOMContentLoaded", () => {
    const gris = document.getElementById("gris");
    const morado = document.getElementById("morado");
    const rosado = document.getElementById("rosado");
    const negro = document.getElementById("negro");
    const box1 = document.getElementById("box1");
  
    function cambiarColorFondo(color) {
      box1.style.backgroundColor = color;
    }
  
    gris.addEventListener("click", () => cambiarColorFondo("#d5d0d582"));
    morado.addEventListener("click", () => cambiarColorFondo("#80008085"));
    rosado.addEventListener("click", () => cambiarColorFondo("#ffc0cbbd"));
    negro.addEventListener("click", () => cambiarColorFondo("#333"));
  });
  
  function buscarSeccion() {
      var input = document.getElementById("searchInput").value.toLowerCase();
      var sections = [
          "galaxias",
          "andromeda",
          "expandiendose",
  
      ];
      var found = false;
  
      sections.forEach(function (sectionId) {
          var section = document.getElementById(sectionId.replace(/ /g, "_")); 
          if (section) { // Esto va a verificar si el elemento existe o no
              section.innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Restablecer el contenido original
              if (sectionId.toLowerCase().includes(input)) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                  section.classList.add("highlight");
                  var highlightedText = section.innerHTML.replace(
                      new RegExp(input, "gi"),
                      function (matched) {
                          return `<span class="highlight">${matched}</span>`;
                      }
                  );
                  section.innerHTML = highlightedText;
                  setTimeout(() => {
                      section.classList.remove("highlight");
                      section.innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Restaurar el contenido original
                  }, 2000);
                  found = true;
              }
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