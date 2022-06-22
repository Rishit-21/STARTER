//lecture: (values and vaiables) ,(data type),(let const and var)
var country="India";
const continent ="ASIA"
var population=134000000
console.log(country)
console.log(continent)
console.log(population)
isIsland = 0
var language="Chinese"
console.log(Boolean(isIsland))
console.log(language)
country="INDIA";
console.log(typeof(isIsland),typeof(population), typeof(country),typeof(language))

//lecture basic operators
console.log(population/2)
console.log(population+1)
var finlandPop=60000000

if(population>finlandPop){
    console.log("yes")
}
else
{
    console.log("no")
}
//taking decision if/else statements
var avgPop=3300000
var isAvg=population<avgPop
    console.log(isAvg)

if(population>avgPop){
    console.log("india's population is above average")
}
else{
    console.log("india'population is" , population-avgPop,  "belopw avg")
    
}
// type conversin and coercioin
var operation=5 + 6 + '4' + 9 - 4 - 2;
console.log(operation)

//equality operators
var numBorders=1;
if(Number(numBorders) ===1){
    console.log("only one neighbour");
}
else if(numBorders>1){
    console.log("more than one neighbours");
}
else{
    console.log("your country has 0 neighbour");
}
//logical operators
let name1 = "sarah"
if(population<5000000 && language=='English' && isIsland){
    console.log(`you should leave in ${country} :)`)
}
else{
    console.log(`${country} does not  meet your criteria :(`)
}
//string and template literals
var description=`${country} is in  ${continent} and its ${population} people speak ${language}`
console.log(description)

//the switch statement 
switch(language){
    case 'Chinese':
    case 'Mandarin':
        console.log("Most number of native speaker!");
        break;
    case 'Spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'English':
        console.log("3rd place");
        break;
    case 'Hindi':
        console.log("number  Four");
        break;
    case 'Arabic':
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great langauge to");
}
// condition ternary operators  on hand 
 const age =23;
 age >=18 ? console.log("I like to dirnk wine 🍷"):
 console.log("I like to dirnk water");
 const drink = age >=18 ? 'wine 🍷' : 'water 🌊';
 console.log(drink);
  
 console.log(`I like to drink ${age >=18 ? 'wine' : "water"}`)

 //lecture the conditional(ternary) operator
 console.log(`${country}'s ${ population>avgPop ?  'population is above avg':  'populaiton is below avg'}`)