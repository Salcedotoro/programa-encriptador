function encriptar (){
    var textArea = document.querySelector("#input-texto").value;
    if(textArea==""){
        alert("Debe ingresar un texto para encriptar");
    } else {
        document.getElementById("texto").style.backgroundImage = "none";
        document.getElementById("encontrado").style.display = "none";
        document.getElementById('copiar-texto').style.display = "flex";
        const boton = document.getElementById("copiar-texto");
        boton.style.color = "white";
        boton.style.backgroundColor = "#303F9F";
        var texto = document.querySelector("#input-texto").value.toLowerCase().replace(/é/gi, "e").replace(/í/gi, "i").replace(/á/gi, "a").replace(/ó/gi, "o").replace(/ú/gi, "u");
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;
    }
}
    var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){
    var textArea = document.querySelector("#input-texto").value;
    if(textArea==""){
        alert("Debe ingresar un texto para desencriptar");
    } else {
        document.getElementById("texto").style.backgroundImage = "none";
        document.getElementById("encontrado").style.display = "none";
        document.getElementById('copiar-texto').style.display = "flex";
        const boton = document.getElementById("copiar-texto");
        boton.style.color = "white";
        boton.style.backgroundColor = "#303F9F";
        var texto = document.querySelector("#input-texto").value;
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;
    }
}
    var boton1 = document.querySelector("#btn-desencriptar"); boton1.onclick = desencriptar;

function copiarAlPortapapeles() {
    let content = document.querySelector('.text-input-salida').value;
    navigator.clipboard.writeText(content)
    const boton = document.getElementById("copiar-texto");
    boton.style.color = "white";
    boton.style.backgroundColor = "green";
    boton.textContent = "Copiado..."    
}
