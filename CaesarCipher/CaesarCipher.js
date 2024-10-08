
let deslocamento = 0;
let encryptedtxt = "";

function modificarDeslocamento(action) {
    if(action == 1 && deslocamento >= 0 && deslocamento < 25){
        deslocamento++;
    }else if(action == 2 && deslocamento > 0){
        deslocamento--
    }
    document.getElementById("desloc_output").innerText = deslocamento;
}

function cifraDeCesar(texto, desloc) {
    return texto.split('').map((caractere) => {
        if (caractere.match(/[a-z]/i)) {
            const codigoCaractere = caractere.charCodeAt(0);
            const base = codigoCaractere >= 65 && codigoCaractere <= 90 ? 65 : 97; 
            return String.fromCharCode(((codigoCaractere - base + desloc) % 26) + base);
        }
        return caractere;
    }).join('');
}

function atualizarCifra() {
    encryptedtxt = cifraDeCesar(document.getElementById("cipherplaintext").value, deslocamento);
    document.getElementById("cipheroutputtext").innerText = encryptedtxt;
    document.getElementById("cipheroutputtext").style.color = "white";
}

let cpcooldown = false;
function saveToClipboard () {
    if(encryptedtxt != "" && !cpcooldown){
        cpcooldown = true;
        let img = document.getElementById("cptext");
        navigator.clipboard.writeText(encryptedtxt);
        
        img.src = '../MorseCode/imgs/check.png';
        img.style.width = "1.5rem";

        setTimeout(() => {
            cpcooldown = false;
            img.src = '../Hash/imgs/cptext.svg';
            img.style.width = "1.4rem";
        }, 3000)
    }
}