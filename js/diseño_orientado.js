document.addEventListener("DOMContentLoaded", function () {
    const griegoImg = document.querySelector(".griego1");

    function fadeInOnScroll() {
        const rect = griegoImg.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight * 0.75) { // Si entra en el 75% de la pantalla
            griegoImg.style.opacity = "0.4";
            griegoImg.style.transform = "translateX(0)";
            griegoImg.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
        }
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const griegoImg = document.querySelector(".griego2");

    function fadeInOnScroll() {
        const rect = griegoImg.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight * 0.75) { // Si entra en el 75% de la pantalla
            griegoImg.style.opacity = "0.3";
            griegoImg.style.transform = "translateX(0)";
            griegoImg.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
        }
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Llamamos a la función al cargar por si ya está en pantalla
});



document.addEventListener("DOMContentLoaded", function () {
    const enlaceProgramacion = document.querySelector('a[href="#diseño-opo"]');

    enlaceProgramacion.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const seccionProgramacion = document.getElementById("diseño-opo");
        seccionProgramacion.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".expandible");
    const modal = document.getElementById("modalImagen");
    const modalImg = document.getElementById("imgAmpliada");
    const cerrar = document.getElementById("cerrarModal");

    imagenes.forEach(function (img) {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    cerrar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const botonesPDF = document.querySelectorAll(".abrir-pdf");
    const modalPDF = document.getElementById("modalPDF");
    const visorPDF = document.getElementById("visorPDF");
    const cerrarPDF = document.getElementById("cerrarPDF");

    botonesPDF.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const archivoPDF = btn.getAttribute("data-pdf");
            visorPDF.src = archivoPDF;
            modalPDF.style.display = "flex";
        });
    });

    cerrarPDF.addEventListener("click", function () {
        modalPDF.style.display = "none";
        visorPDF.src = ""; // limpia para evitar que el PDF siga cargando
    });

    modalPDF.addEventListener("click", function (e) {
        if (e.target === modalPDF) {
            modalPDF.style.display = "none";
            visorPDF.src = "";
        }
    });
});




