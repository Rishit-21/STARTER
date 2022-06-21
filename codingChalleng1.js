var johnMass = 92;
var jhonHeight=1.95;
var markMass=78;
var markheight =1.69;

var johnBmi=johnMass/jhonHeight**2;
var markBmi=markMass/(markheight*markheight);
console.log(johnBmi);
console.log(markBmi);
var markHigherBmi= markBmi>johnBmi;
console.log(markHigherBmi);

if(markHigherBmi){
    console.log(`mark BMI is higher by ${markBmi-johnBmi} markBMI: ${markBmi} johnBMI: ${johnBmi}`)
}
else{
    console.log(`john's BMI is higher by ${johnBmi-markBmi} markBMI: ${markBmi} johnBMI: ${johnBmi}`)
}
