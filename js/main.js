function verificarTerminos() {
    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
        alert("Por favor, acepta los términos y condiciones para continuar.");
        return false;
    }
    return true;
}

function continuarAnonimo() {
    if (verificarTerminos()) {
        // Redirección a la vista de reporte anónimo (si la tienes creada)
        console.log("Continuando de forma anónima...");
    }
}

function continuarCorreo() {
    if (verificarTerminos()) {
        // Redirige a la pantalla de login que acabamos de programar
        window.location.href = '/login';
    }
}