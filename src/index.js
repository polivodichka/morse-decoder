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
  let array = [];
  let answer = '';
  for (let i = 0; i<expr.length; i+=10){
    array.push(expr.slice(i, i+10));
  }
  
  for (let i = 0; i<array.length; i++){
    answer += Morse(array[i])===' '? Morse(array[i]):MORSE_TABLE[Morse(array[i])];
  }
  return answer;
}

function Morse(str){
  let answer = '';
  for (let i = 0; i<str.length; i+=2){
    +str.slice(i, i+2)===0?i+=2:0;
    +str.slice(i, i+2)===10?answer += '.':0;
    +str.slice(i, i+2)===11?answer += '-':0;
    if (str.slice(i, i+2)==='**') return ' '
  }
  
  return answer;
}
module.exports = {
    decode
}