const sentence = 'i will be a developer';

let reverse = '';
for (const letter of sentence) {
    // console.log(letter)
    reverse = letter + reverse; // jei man asbe seta pore na boshe age bose jabe
    // console.log(reverse)
}

// try this using for loop;
let reversed = '';
for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    reversed = letter + reversed;
}
// console.log(reversed)
const rev = sentence.split('').reverse().join('');
console.log(rev)