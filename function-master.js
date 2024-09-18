//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //declare output as an empty array
    var output = [];
    //use for in loop to iterate through input object's values
    for (let keys in object){
        //push input object's values into the output array
        output.push(object[keys]);
    } //return output
    return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//declare output as an empty array
var output = [];
//use for in loop to iterate through input object
for (let keys in object){
    //push input object's keys into output
    output.push(keys);
} //return output array's values joined into a string separated by a space
 return output.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declare output as an empty array
    var output = [];
    //use a for in loop to iterate through input object
    for (let keys in object){
        //use if statement to check if current object value is a string
        if (typeof object[keys] === "string"){
            //if value is a string, push it into the output array
            output.push(object[keys]);
        }
    } //return output array's values joined into a string separated by a space
    return output.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //use if statement to check if collection is an array
    if (Array.isArray(collection) === true){
        //return "array" if true
        return "array"
        //else return "object"
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return the result of setting the first character of string to uppercase and adding it to the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split the string into an array
    let words = string.split(" ");

    //use a for loop to iterate through the words array
    for (let i = 0; i < words.length; i++){
        //set the current index of words equal to the result of setting the first character to uppercase and adding it to the rest of the string
       words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    }
    //return words joined back into a string separated by a space
    return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//return "Welcome " + object.name + " !" while setting up the first character in the name property to be capitalized
return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//return object.name with the first letter capitalized + " is a " + object.species with the first letter capitalize
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//use if statement to see if input object has a noises array with a length greater than 0
if (Array.isArray(object["noises"]) && object["noises"].length > 0){
    //if true, join the noises array into a string separated by a space
return object["noises"].join(" ");
} //else return "there are no noises"
 else {
    return "there are no noises";
 }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//use an if statement to see if input word is included in input string
if (string.includes(word)){
    //if string includes word, return true
    return true;
} else {
    //otherwise return false
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  //add input name to the end of the input object's friends array  
object["friends"].push(name);
//return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//use if statement to see if name exists in object
if(object["friends"] && object["friends"].includes(name)){
    //if name exists, return true
    return true;
} else {
    //if name doesn't exist, return false
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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