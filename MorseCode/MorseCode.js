// saving the letters, numbers and punctuation as consts.
const morseCode = {
  'a': '.- ',    'b': '-... ',  'c': '-.-. ',  'd': '-.. ',   'e': '. ',    
  'f': '..-. ',  'g': '--. ',   'h': '.... ',  'i': '.. ',    'j': '.--- ',
  'k': '-.- ',   'l': '.-.. ',  'm': '-- ',    'n': '-. ',    'o': '---',  
  'p': '.--. ',  'q': '--.- ',  'r': '.-. ',   's': '... ',   't': '- ',    
  'u': '..- ',   'v': '...- ',  'w': '.-- ',   'x': '-..- ',  'y': '-.-- ',
  'z': '--.. ',  '1': '.---- ', '2': '..--- ', '3': '...-- ', '4': '....- ',
  '5': '..... ', '6': '-.... ', '7': '--... ', '8': '---.. ', '9': '----. ',
  '0': '----- ', ' ': ' / ',   '.': '.-.-.- ', ',': '--..-- ', '?': '..--.. ',
  '!': '-.-.-- ', ':': '---... ', ';': '-.-.-. ', "'": '.----. ', '"': '.-..-. '
};

// creating the function that will convert.
function textToMorse (text) {
  return text.toLowerCase().split('').map(char => morseCode [char]|| char) . join('');
}

// saving the value that will be converted, changing it's style and showing it on the website.
let encryptedtxt = "";

function convertToMorse () {
  let plaintext = document.getElementById("morseplaintext").value;

  if (plaintext != "") {
    encryptedtxt = textToMorse(plaintext);

    document.getElementById("encryptedtext").innerText = encryptedtxt;
    document.getElementById("encryptedtext").style.color = "white";
  } else {
    document.getElementById("encryptedtext").innerText = "Você realmente precisa inserir algo na primeira caixa para obter um resultado.";
  }
}

let cpcooldown = false;

function saveToClipboard () {
    if(encryptedtxt != "" && !cpcooldown){
        cpcooldown = true;
        let img = document.getElementById("cptext");
        navigator.clipboard.writeText(encryptedtxt);
        
        img.src = './imgs/check.png';
        img.style.width = "1.5rem";

        setTimeout(() => {
            cpcooldown = false;
            img.src = '../Hash/imgs/cptext.svg';
            img.style.width = "1.4rem";
        }, 3000)
    }
}