const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let number = 0;
    let res = "";
    for (let i = 0; i < (expr.length / 10); i++) {
        letter = expr.slice(number, number + 10);
        number +=10;
        if (letter == "**********") {
            res += " ";
            continue;
        }
        let str = "";
        for (let j = 0; j < 11; j +=2) {
            switch(letter.slice(j, j+2)) {
                case "10" : str += "."; break;
                case "11" : str += "-"; break;
                default: break;
            }
        }

        res += MORSE_TABLE[ str.split("").join("")];
    }
  
        return res;
        //coment
    }

    module.exports = {
        decode
    }