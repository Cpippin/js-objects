// console.log("we're learning about objects")

// const car = {
//     make: "ford",
//     model: "mustang",
//     color: "red",
//     year: "2015"
// }

// let names = [ "kippers", "jack", "gypsy", "angus", "seymour bouts", "sharky" ]

// const amy = {
//     relation: "mother",
//     age: "40",
//     gender: "female"
// }

// const joey = {
//     relation: "father",
//     age: "42",
//     gender: "male"
// }

// const joanna = {
//     relation: "sister",
//     age: "19",
//     gender: "female"
// }

// const brant = {
//     relation: "brother",
//     age: "17",
//     gender: "male"
// }

// let familyMembers = [ amy, joey, joanna, brant ]

// console.log(car)
// console.log(names)
// console.log(familyMembers)
// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(
//     wardrobe.height, 
//     wardrobe.manufacturer, 
//     wardrobe.contents[0],
//     wardrobe.depth, 
//     wardrobe.width
// )

// wardrobe.material = "cedar"

// console.log(wardrobe)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The Empire State Building is ${empireStateBuilding.height}ft tall, ${empireStateBuilding.eastWestLength}ft by ${empireStateBuilding.northSouthLength}ft base area, has ${empireStateBuilding.squareFeet} usable square feet, and is ${empireStateBuilding.stories} stories tall.`)
var place = "address"
var yearMade = "constructionDate"
var dollars = "cost"
var madeBy = "architect"
var ownedBy = "owner"

console.log(`The Empire State building is at ${empireStateBuilding[place]}.
It was built in ${empireStateBuilding[yearMade]}.
It cost ${empireStateBuilding[dollars]} to build.
The architect that built it was called ${empireStateBuilding[madeBy]}.
It is owned by ${empireStateBuilding[ownedBy]}.`)