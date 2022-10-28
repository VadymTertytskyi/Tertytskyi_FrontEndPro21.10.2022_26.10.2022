document.addEventListener ('DOMContentLoaded', () => {
    const firstName = prompt('Name');
    const secondName = prompt('Second Name');
    const gender = prompt('gender');
    let information = `${firstName} ${secondName} ${gender}`;
    alert (information);
    console.log (information);   
}
)

let PersonalNumber = 76438;
PersonalNumber = String(PersonalNumber);
let FirstNumber = PersonalNumber[0];
let SecondNumber = PersonalNumber[1];
let ThirdNumber = PersonalNumber[2];
let FourthNumber = PersonalNumber[3];
let FifthNumber = PersonalNumber[4];
let PrintNumber = `${FirstNumber} ${SecondNumber} ${ThirdNumber} ${FourthNumber} ${FifthNumber}`;
console.log(PrintNumber);
