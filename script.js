const inputText = document.getElementById('input-text');
const encriptarButton = document.getElementById('encriptar');
const desencriptarButton = document.getElementById('desencriptar');
const resultDiv = document.getElementById('result');
const copiarButton = document.getElementById('copiar');

encriptarButton.addEventListener('click', encriptar);
desencriptarButton.addEventListener('click', desencriptar);
copiarButton.addEventListener('click', copiar);

function encriptar() {
    const texto = inputText.value.trim();
    if (texto !== '') {
        const encriptado = encriptarTexto(texto);
        resultDiv.innerHTML = `
        <h2 class="col-12" style="font-style: italic; color: #979797;">Mensaje encriptado:</h2>
        <p class="col-12" style="font-size: 2rem; font-weight: 500; color: #002361;">${encriptado}</p>
        `;
        mostrarBotonCopiar();
    } else {
        resultDiv.innerHTML = `
        <img src="NoEncontrado.png" alt="">
        <h2>Ningún mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        `;
        ocultarBotonCopiar();
    }
}

function desencriptar() {
    const texto = inputText.value.trim();
    if (texto !== '') {
        const desencriptado = desencriptarTexto(texto);
        resultDiv.innerHTML = `
        <h2 class="col-12" style="font-style: italic; color: #979797;">Mensaje desencriptado:</h2>
        <p class="col-12" style="font-size: 2rem; font-weight: 500; color: #002361;">${desencriptado}</p>
        `;
        mostrarBotonCopiar();
    } else {
        resultDiv.innerHTML = `
        <img src="NoEncontrado.png" alt="">
        <h2>Ningún mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        `;
        ocultarBotonCopiar();
    }
}

function copiar() {
    const resultado = resultDiv.textContent;
    navigator.clipboard.writeText(resultado);
    alert('Texto copiado al portapapeles');
}

function mostrarBotonCopiar() {
    copiarButton.style.display = 'inline-block';
}

function ocultarBotonCopiar() {
    copiarButton.style.display = 'none';
}

function encriptarTexto(texto) {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (letra.match(/[a-z]/i)) {
            encriptado += String.fromCharCode(letra.charCodeAt(0) + 3);
        } else {
            encriptado += letra;
        }
    }
    return encriptado;
}

function desencriptarTexto(texto) {
    let desencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (letra.match(/[a-z]/i)) {
            desencriptado += String.fromCharCode(letra.charCodeAt(0) - 3);
        } else {
            desencriptado += letra;
        }
    }
    return desencriptado;
}