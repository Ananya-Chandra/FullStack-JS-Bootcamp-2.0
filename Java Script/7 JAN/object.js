// const object = {
//     rocket: "agni",
//     home: "my home"
// }


// //Part 1 
// const obj1 = {
//     rocket: "agni",
//     fuel: 2,
//     config: {
//         name: "mars"
//     }
// }

// obj1.fuel = 200
// obj1["year"] = 2000

// console.log(obj1)


//Part 2 
// const obj2 = new Object() //constructor
// obj2.redbook = "red"
// // obj2.1bluebook = "blue"
// obj2.myvalue = "1 bluebook"

// console.log(obj2);


//part 3 (to inherit property)
// const powers ={
//     fly: true,
//     coordinate: Math.random() +2
// }

// const obj3 = Object.create(powers)
// console.log(obj3); //shows empty object
// console.log(obj3.fly); // shows result
// console.log(Object.getPrototypeOf(obj3));


//Part 4
// const obj4 = Object.create({})
// obj4.name = "hitesh"
// console.log(obj4);


// Object.defineProperties(obj4, 'book', {
//     // icon: 'blue'
//     get: ()=> 'blue',
//     enumerable: true

// })

// for(k in obj4){
//     //console.log("value is: ", k)
// }


//part 5
const obj5 = {
    comics: 'marvel',
    pen: '',
    printComic: function(){
        this.pen += 'blue'  //this refers to pen inside the object
        console.log(this)                    //in arrow fun this can't be used, so we  
                            //don't use arrow fun here
    },
}
console.log(obj5.printComic());