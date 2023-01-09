function encriptar (){
    document.getElementById("ocultarimagen").style.display = "none";
    document.getElementById("mostrarMensaje").style.display = "flex";
    var texto = document.querySelector("#input-texto").value.toLowerCase().replace(/é/gi, "e").replace(/í/gi, "i").replace(/á/gi, "a").replace(/ó/gi, "o").replace(/ú/gi, "u");
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
    var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){
    document.getElementById("ocultarimagen").style.display = "none";
    document.getElementById("mostrarMensaje").style.display = "flex";
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
    var boton1 = document.querySelector("#btn-desencriptar"); boton1.onclick = desencriptar;

function copiarAlPortapapeles() {
    let texto = document.getElementById('texto');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
}   
