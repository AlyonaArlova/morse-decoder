const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const Splitter = /(?:[0-1\*]){10,10}/gi;
    const Validator=/^((?:[0-1]){10,10}|(?:\*){10,10})+?$/;
    //if (Validator.test(expr)) {throw {Message: "Invalid input format"}};
    const symbols =expr.match(Splitter);
    const mapping ={"10":".", "11":"-"};

    return expr.match(Splitter)
        .map(it => isNaN(temp = parseInt(it, 2)) ? it : temp.toString("2"))
        .map(it=> new String(it))
        .map(it => it.replace(/(?:10|11|\*+)/gi, (match) => mapping[match] || " ")).map(it=>MORSE_TABLE[it]||" ").join("");

}

module.exports = {
    decode
}