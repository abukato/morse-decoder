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
    let regexp = /.{1,10}/g;
    let arr = expr.match(regexp);
    let result = '';
  
    for (let i = 0; i < arr.length; i++) {
      let char = '';
      for (let j = 0; j < arr[i].length; j += 2) {
        if (arr[i][j]+arr[i][j+1] === '10') {
          char += '.' 
        } else if (arr[i][j]+arr[i][j+1] === '11') {
          char += '-';
        } else if (arr[i][j]+arr[i][j+1] === '**') {
          char += '';
        }
      }  
      if (char === '') {
        result += ' ';
      } else {
        result += MORSE_TABLE[char]
      }
    }
    return result;
}

module.exports = {
    decode
}

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));