// var lenght= 16;
// var lastName="Johnson"

// var cars=["Saab", "Volvo", "Opel"]

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     adress: {
//         street: "ul. Preslav",
//         number: 21,
//     },
//     pets: ["cat", "dog", "fish"],
// }

// function getPersonPets(person){
//     for (var i=0; i<person.pets.length; i++){
//         string = string +" "+ person.pets[i]
//     }

//     person.pets.forEach(function(pet) {
//         console.log(person.pets[i]);
//     })

// }

// function checkPersonForDog(person){
//     var hasDog = false;
//     if (person.pets.indexOf("dog")!==-1){
//         hasDog = true;
//     }
//     return hasDog;
// }

// var forCheckTimeout=setTimeout(function(){
//     var hasDog = checkPersonForDog();
//     console.log('hasDog', hasDog);
// },3000);

// clearTimeout(forCheckTimeout);

const person = "Ivan"
const person2 ="Petar"
console.log(`${person} and ${person2} are friends`);

const sumTwoNumbers = (a,b =3) => a + b ;
const result = sumTwoNumbers(4);
console.log(result);

const testFunction = param => {
    console.log(param);
}

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const newArray = [...arr1, ...arr2];
const personMap = {
    1: "Georgi",
    2: "Ivan",
    3: "Stefan",
    4: "Stamat",
}


const namesArray = arr1.map(id => personMap[id]);

const fileredNames = namesArray.filter(name => name!=="Stamat");

const namesObject = fileredNames.reduce((acc,current)=>{
    const newRecord = {
        [current]:[1,2,3,4]
    }
    return {...acc, ...newRecord};
}, {})



console.log(namesObject)