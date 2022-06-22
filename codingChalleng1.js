//coding challenge 1
var johnMass = 92;
var jhonHeight=1.95;
var markMass=78;
var markheight =1.69;

var johnBmi=johnMass/jhonHeight**2;
var markBmi=markMass/(markheight*markheight);
console.log(johnBmi);
console.log(markBmi);

//coding challenge 2
var markHigherBmi= markBmi>johnBmi;
console.log(markHigherBmi);

if(markHigherBmi){
    console.log(`mark BMI is higher by ${markBmi-johnBmi} markBMI: ${markBmi} johnBMI: ${johnBmi}`)
}
else{
    console.log(`john's BMI is higher by ${johnBmi-markBmi} markBMI: ${markBmi} johnBMI: ${johnBmi}`)
}

//coding challenge 3

var ds1 = 97;
var ds2 = 112;
var ds3= 101;
var avgD = Number((ds1+ds2+ds3)/3);
console.log(avgD)

var ks1 =109;
var ks2 =95;
var ks3=106;
var avgK=Number((ks1+ks2+ks3)/3);
console.log(avgK)

if(avgD>=100 && avgK>=100){
    if(avgD>avgK){
        console.log(`team dolphins are winners with avg score of ${avgD} `);
    }
    else if(avgD<avgK){
        console.log(`team koalas are winners  with avg score of ${avgK}`);
    }
    else{
        console.log(`there is tie between both the teams as both have same avg score `);
    }
}
else{
    console.log('both team are loser ');
}
//coding challenge 4

var bill=Number(430);
var tip= bill>=50 && bill<=300 ? (bill*15)/100 : (bill*20)/100;
console.log(` your bill is ${bill} your tip is ${tip}  so the total bill is ${bill+Number(tip)}`);

