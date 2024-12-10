let op;
op = prompt("Ingrese el modo del progama (1. Convertir Texto a morse. 2. Convertir morse a Texto)");
let wordToMorse;
let morseToText;
const TablaMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '/': '-..-.',
    '-': '-....-',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    "'": '.----.',
    '=': '-...-',
    '+': '.-.-.',
    '@': '.--.-.'
};

switch (op) {
    case "1":
        wordToMorse = "";
        let morse = "";
        wordToMorse = prompt("Ingrese la palabra a pasar a codigo morse").toUpperCase();

        for (let i = 0; i < wordToMorse.length; i++){
            const letras = wordToMorse.split("")
            const Letra = letras[i];

            if (Letra == " "){
                morse += "/"
            }
            if (TablaMorse[Letra]){

                morse += (TablaMorse[Letra] + ' ')
                
            }
        }

        console.log(morse)
        break;
    case "2":
        morseToText= ""
        let text = ""
        morseToText = prompt("Ingrese el codigo morse a convertir a texto")
        let palabras = morseToText.split('/')
        console.log(palabras)

        for (let i = 0; i < palabras.length; i++){
            for (let x = 0; x< palabras[i].length; x++){
                let letras = palabras[i].split(' ')
                let letra = letras[x]

                for (let [key, value] of Object.entries(TablaMorse)){
                    if (letra == value){
                        text += key
                    }
                }

            }
            
            text += ' '
        }
        console.log(text)
        break;

    default:
        break;
}