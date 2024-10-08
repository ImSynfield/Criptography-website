// salvar as constantes de (letras, números e pontuação)

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




//Conversor de texto para código Morse

function textToMorse (text) {
    return text.toLowerCase().split('').map(char => morseCode [char]
    || char) . join('');
   
}

//Input do Texto


const texto = prompt("Digite o texto a ser convertido ");
const morse = textToMorse(texto);
console.log(morse);