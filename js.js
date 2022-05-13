let inputTexto = document.querySelector("textarea#entrada-texto");
let textoDecodificado = document.querySelector("#resultado");

let btnCriptografar = document.querySelector("button#criptografar");
btnCriptografar.onclick = criptografar;

let btnDescriptografar = document.querySelector("button#descriptografar");
btnDescriptografar.onclick = descriptografar;

let btnCopiar = document.querySelector("button#copiar");
btnCopiar.onclick = copiar;

function criptografar(){
    var regExp = /[^a-z- 0-9]/g;

    if(inputTexto.value.match (regExp)){
        alert ("Utilize apenas letras minúsculas e sem acento!")

        inputTexto.value = "";
        inputTexto.focus();

    }else{
        document.querySelector("#decodificador").innerHTML = "";

        var texto = inputTexto.value
        var txt =  texto.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('decodificador').innerHTML = `<textarea class="textoDecodificado" id="resultado">${txt}</textarea>`;

        document.getElementById('decodificador').innerHTML += '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';
    }
}



function descriptografar(){
    var regExp = /[^a-z- 0-9]/g;

    if(inputTexto.value.match (regExp)){
        alert ("Utilize apenas letras minúsculas e sem acento!")
    
        inputTexto.value = "";

    }else{
        document.getElementById("decodificador").innerHTML = "";
        

        var texto = inputTexto.value
        var txt =  texto.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');

        document.getElementById('decodificador').innerHTML = `<textarea class="textoDecodificado" id="resultado">${txt}</textarea>`;

        document.getElementById('decodificador').innerHTML += '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';

        

    }
    
}


function copiar(){
    document.querySelector("#resultado").select();
    alert("Texto Copiado!")
    document.execCommand('copy');
    resultado.value = "";
  


    
    
}

