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
    const enlaceProgramacion = document.querySelector('a[href="#programacion-movil"]');

    enlaceProgramacion.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const seccionProgramacion = document.getElementById("programacion-movil");
        seccionProgramacion.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const enlaceProgramacion = document.querySelector('a[href="#diseño-opo"]');

    enlaceProgramacion.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const seccionProgramacion = document.getElementById("diseño-opo");
        seccionProgramacion.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
    });
});

document.getElementById("scrollButton").addEventListener("click", function() {
    document.getElementById("Curriculum").scrollIntoView({ behavior: "smooth" });
});

