//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
    //declare output array
    var output = [];
    //for every key in object, push object[keys] into output array
    for (let keys in object) {
        output.push(object[keys]);
    } return output; //return output
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //declare output array
   var output = [] 
   //for every keys in object, push keys into output array
 for (let keys in object) {
    output.push(keys);
 } return output.join(" "); //return output.join to join the array into a string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declare output array
   var output = [];
   //for every keys in object, push object[keys] into output if typeof object[keys] equals "string"
   for (let keys in object) {
    if (typeof object[keys] === "string") {
        output.push(object[keys]);
    }
    //return output.join to join the array into a string
   } return output.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //if Array.isArray(collection), return "array"
    if (Array.isArray(collection)) {
        return "array";
    }
    //if typeof collection equals "object", return "object"
    if (typeof collection === "object") {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return string.charAt(0).toUpperCase() + string.slice(1) to capitalize the first letter and concat it together  
  return string.charAt(0).toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //const words equals string.split(" ")
  const words = string.split(" ");
  //for loop to iterate through words array
   for (let i = 0; i < words.length; i++) {
    //words[i] equals words[i][0].toUpperCase() + words[i].slice(1) in order to separate the first letter and capatilize it and then return it back to the rest of the string
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    //return words.join in order to join the array into a string
   } return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //declare name variable that equals object.name[0].toUpperCase() + object.name.slice(1);
    var name = object.name[0].toUpperCase() + object.name.slice(1);
 //return "Welcome " + name + "!"
 return "Welcome " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//declare name variable that capitalizes the first letter of the object.name string
var name = object.name[0].toUpperCase() + object.name.slice(1);
//declare species variable that capitalizes the first letter of the object.species string
var species = object.species[0].toUpperCase() + object.species.slice(1);
//return name + " is a " + species
return  name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

//if object.noises is an array and object.noises.length is greater than 0, return object.noises.join(" ")
if (Array.isArray(object.noises) && object.noises.length > 0) {
    return object.noises.join(" ");
    //else return "there are no noises"
} else {
    return "there are no noises";
}
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //if string includes word, return word
if (string.includes(word)) {
    return true;
    //else return false
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //push name into object.friends array
 object.friends.push(name);
 //return object
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //if object has property "friends" and includes name return true
if (object.hasOwnProperty("friends") && object.friends.includes(name)) {
    return true;
    //else return false
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //declare output as an empty array
 var output = [];
 //for loop to iterate through array
for (let i = 0; i < array.length; i++) {
    //declare friends variable that equals array[i].friends
 var friends = array[i].friends;
 //declare isFriends variable that equals false
 var isFriends = false;
 //if array[i].name doesn't equal name, loop through friends
 if (array[i].name !== name) {
 for (let j = 0; j < friends.length; j++) {
    //if friends[j] equals name
    if (friends[j] === name) {
        //make isFriends true
        isFriends = true;
    }
 } //if isFriends is not true, push array[i].name into output
 if (!isFriends) {
    output.push(array[i].name)
 }  
 } //return output
 } return output;

 }



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
I: function takes an object, key, and value
O: Update key property on object, create key if it does not exist
C:N/A
E: N/A
*/
function updateObject(object, key, value) {
    const output = {};
    for (let keys in object) {
        if (keys === key) {
            output[keys] = value;
        } else {
            output[keys] = object[keys];
        }
    }
    if (!output[key]) {
        output[key] = value;
    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I:Function takes in object and an array of strings
O: remove any object properties listed in array
C:N/A
E:N/A
*/
function removeProperties(object, array) {
 //for loop to iterate through array
 for (let i = 0; i < array.length; i++) {
    //delete object property listed in array
    delete object[array[i]];
 }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //return array.filter that creates a shallow copy of the array without the duplicates
return array.filter((item, index) => array.indexOf(item) === index);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}