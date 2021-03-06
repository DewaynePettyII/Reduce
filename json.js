//What is a JSON
//JSON is a text-based data format follow JavaScript item syntax, which was popularised by Douglas Crockford.
//Even though it closely resembles JavaScript object literal syntax, it can be used independantly from JavaScript, -
// - and in many programing environments, feature the ability to read (parse) and generate json. 
// JSON exists as a string, useful when you want to transmit data across a network. 
//It needs to be converted to a native JavaScript object when you want to access the JavaScript data. 
//This is not a big issue, JavaScript provides a global json object that has methods available for converting between -
// - the two.
//Note, converting a string to a native object is called "Deserialization", while converting a native object -
// - to a string so it can be transmitted across the network is called "Serialization".
//JSON Structure
//As described above, json is a string who's format very much resembles JavaScript object literal format.
//You can include the same basic datatypes inside json so you can standard JavaScript object: strings / numbers / arrays / booleans / literals
//This allows you to construct data hierarchy.

const superHeroes = {
    "squadName": "super computer squad",
    "hometown": "metro city",
    "form": 2016,
    "active": true,
    "members": [
        {
            "name": "MoleculeMan",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation Resistance",
                "Size Manipulation",
                "Radiation Blast"
            ]
        }
    ]
}


console.log(superHeroes.hometown)
console.log(superHeroes['active'])
console.log(superHeroes['members'][0]['age'])