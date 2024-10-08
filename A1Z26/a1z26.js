let encryptedtxt = "";

function cifrarA1Z26(input) {
    input = input.toUpperCase();
    
    let result = [];
    
    for (let char of input) {
        if (char >= 'A' && char <= 'Z') {
            let number = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            result.push(number);
        } else {
            result.push(' ');
        }
    }
    return result.join(' ');
}

function convertToA1Z26 () {
    let plaintext = document.getElementById("a1plaintext").value;
    
    if (plaintext != "") {
        encryptedtxt = cifrarA1Z26(plaintext);
        
        document.getElementById("a1outputtext").innerText = encryptedtxt;
        document.getElementById("a1outputtext").style.color = "white";
    } else {
        document.getElementById("a1outputtext").innerText = "Você realmente precisa inserir algo na primeira caixa para obter um resultado.";
    }
}

let cpcooldown = false;
function saveToClipboard () {
    if(encryptedtxt != "" && !cpcooldown){
        cpcooldown = true;
        let img = document.getElementById("cptext");
        navigator.clipboard.writeText(encryptedtxt);
        
        img.src = '../Images/check.png';
        img.style.width = "1.5rem";

        setTimeout(() => {
            cpcooldown = false;
            img.src = '../Images/cptext.svg';
            img.style.width = "1.4rem";
        }, 3000)
    }
}