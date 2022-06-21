var country="India";
const continent ="ASIA"
var population=134000000
console.log(country)
console.log(continent)
console.log(population)
const isIsland = 0

var language="gujrati"
console.log(Boolean(isIsland))
console.log(language)
country="INDIA"
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
var avgPop=3300000
if(population<avgPop){
    console.log("yes")
}
else{
    console.log("no")
}
if(population>avgPop){
    console.log("india's population is above average")
}
else{
    console.log("india'population is" , population-avgPop,  "belopw avg")
    
}
var operation=5 + 6 + '4' + 9 - 4 - 2;
console.log(operation)

var numBorders=1;
if(numBorders==1){
    if(numBorders===1){
        console.log(`${country} has ${numBorders} neighbour`)
    }
    else{
        console.log(`${country} has only one  neighbour`)
    }
}
else{
    console.log(`${country} has 0 neighbour`)
}
let name1 = "sarah"
if(population<5000000 && language=='English' && isIsland!=0){
    console.log(`you should leave in ${country} :)`)
}
else{
    console.log(`${country} does not  meet your criteria :(`)
}