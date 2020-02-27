'use strict';

// YOU KNOW WHAT TO DO //
/**
* identity: Designed to take an input value and return it unchanged. 
* 
* @param {Any Datatype} value: Can be a value of any datatype
* 
* @return {Any Datatype}: Will be the same value as the input value 
*
*/

function identity(value) {
    return value;
}

module.exports.identity = identity;


/**
 * typeOf: Designed to take any input value and return its datatype as a string.
 * 
 * @param {Any Datatype} value: Can be a value of any datatype. 
 * 
 * @return {String}: A string stating the value's datatype will be returned.
 * 
*/

function typeOf(value) {
    if (typeof value === undefined){
        return "undefined";
    } else if (value === null) {
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to take an input array and an input number and return an array 
 * containing the first number of elements of the array removed using the slice method; 
 * if the input array is not an array, an array literal is returned; if the input 
 * value given for number is not a number, the first element of the array is returned.
 * 
 * @param {Array} array: This is an array containing elements of any datatype.  
 * 
 * @param {Number} number: This is a number indicating the number of elements 
 * to be taken from the beginning of the array and places into newArray. 
 * 
 * @return {Array} newArray: This array contains the number amount of elements 
 * that were removed from the beginning of the array using the slice method.
 * 
 * @return {Array} []: If the array value datatype is not an array or if the input 
 * number is less than 0, an empty array will be returned. 
 * 
 * @return {Any Datatype} array[0]: If the datatype of number is not "number" or 
 * if the input number is null, the first element of the array will be returned.
 * 
 */
 
function first(array, number){
    if (Array.isArray(array) === false || number < 0){
        return [];
    } else if (typeof number !== "number" || number === null){
         return array[0];
    } else {
        return array.slice(0, number);
    }
}
 
module.exports.first = first;

/**
 * last: Takes an input array and an input number and returns an array containing
 * the last number amount of elements removed from the array using the slice method; 
 * if the array input is not and array or if the number is less than 0, return an 
 * array literal; if the datatype of the input number is not "number" or if the 
 * input number is null, return the last element in the array.
 * 
 * @param {Array} array: This is an array containing elements of any datatype.
 * 
 * @param {Number} number: This is a number indicating how many elements to be 
 * removed from the end of the array and returned as an array.
 * 
 * @return {Array} array.slice(-number, array.length): The resulting returned array 
 * contains the number amount of elements removed from the end of the array using 
 * the slice method. 
 * 
 * @return {Array} []: An array literal will be returned if the input array is not an
 * array or if the input number is less than 0.
 * 
 * @return {Any Datatype} array[array.length - 1]: The last element in the array
 * will be returned if the datatype of the input number does not equal "number" or if 
 * the input number is null.
 * 
 */
 
function last(array, number) {
    if (Array.isArray(array) === false || number < 0){
        return [];
    } else if (typeof number !== "number" || number === null){
        return array[array.length - 1];
    } else {
        return array.slice(-number, array.length);
    }
}
 
module.exports.last = last;
 
 /**
  * indexOf: Designed to take an array and a value and return the index value 
  * of the first instance of the value in the array; if the value is not present
  * in the array, the function will return -1.
  * 
  * @param {Array} array: This is an array containing elements of any datatype that
  * will be iterated over using a for loop.
  * 
  * @param {Any Datatype} value: This is a value of any datatype that the function
  * will return the index of the first instance of if it exists within the array.
  * 
  * @return {Number} i: During iteration, when the element in the array (array[i]) 
  * is strictly equal to the input value, the numeric value of i (the element's
  * index) will be returned.
  * 
  * @return {Number} -1: If the value is not present in the array, -1 will be returned. 
  */
  
function indexOf(array, value) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to test whether a given array contains a given value. 
 * 
 * @param {Array} array: This is an array containing values of any datatype.
 * 
 * @param {Any Datatype} value: This is a value of any datatype that the function 
 * tests to see if the array contains using the includes method.  
 * 
 * @return {Boolean} true: If the array includes the input value, true will be returned.
 * 
 * @return {Boolean} false: If the array does not include the input value, false will
 * be returned.
 * 
 */
 
 function contains(array, value) {
    return (array.includes(value) ? true : false);
}

module.exports.contains = contains;

/**
 * each: Designed to loop over a collection (Array or Object) and apply the action 
 * Function to each value in the collection.
 * 
 * @param {Array or Object} collection: This collection is iterated over using the 
 * collection-appropriate loop.
 * 
 * @param {Function} test: This function is invoked for each of the items in the collection,
 * taking the parameters element, index, and collection. 
 * 
 * @return There is nothing returned in this function, as it serves only to iterate 
 * over a collection and perform a function on each item in the collection.  
 * 
 */

function each(collection, test) {
    if (Array.isArray(collection)) {
       for (let i = 0; i <= collection.length - 1; i++) {
           test(collection[i], i, collection);
       }
    } else if (typeof collection === "object") {
        for (let key in collection) {
            test(collection[key], key, collection);
        }
   }
}

module.exports.each = each;

/** 
 * unique: Designed to take a input array an return a new array containing
 * only unique items in the array.
 * 
 * @param {Array} array: This is the array containing elements of any datatype that 
 * is iterated over using a for loop.
 * 
 * @return {Array} uniqueArray: This array literal is created before the implementation 
 * of the for loop. For each iteration of the for loop, an element of the input array 
 * is pushed into uniqueArray if the element is not already contained in uniqueArray. 
 * uniqueArray is then returned.
 * 
 */

function unique(array){
    let uniqueArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

module.exports.unique = unique;

/** 
 * filter: Designed to create an array filled with all array elements that return a 
 * boolean true when passed as arguments through an input function.
 * 
 * @param {Array} array: This array contains elements of any datatype and is 
 * iterated over via the implementation of the each function.
 * 
 * @param {Function} test: This function takes the parameters of element, index,
 * and array. If the result of the function invoked upon the element is a boolean
 * true, the element will be pushed to resultArray.
 * 
 * @return {Array} resultArray: This array contains the elements of the array for which
 * invocation of the test function resulted in boolean true.
 * 
 */

function filter(array, test) {
    var resultArray = [];
    each(array, function(element, index, array) {
        if (test(element, index, array)) {
            resultArray.push(element);
        }
    })
    return resultArray;
} 
module.exports.filter = filter;
 
 /** 
 * reject: This function is designed to create an array filled with all array 
 * elements that do not return a boolean true when the test function is invoked on
 * them. The filter function implements the each function in order to iterate over 
 * the array.
 * 
 * @param {Array} array: This array contains elements of any datatype and is 
 * iterated over via the implementation of the each function.
 * 
 * @param {Function} test: This function takes the parameters of element, index,
 * and array and if the result of the function invoked on the element of the array
 * is a boolean false, the element is added to resultArray.
 * 
 * @return {Array} resultArray: This array contains the elements of the array for 
 * which the invocation of the test function produced a boolean false.
 */
  
function reject(array, test) {
    var resultArray = [];
    each(array, function(element, index, array) {
        if (test(element, index, array) === false) {
            resultArray.push(element);
        }
    })
    return resultArray;
}

module.exports.reject = reject;

/**
 * partition: This function is designed to take an array of objects and a test function 
 * (with parameters element, key, and array) and return an array comprised of 2 subarrays: 
 * one containing elements for which the result of the function run on the element 
 * is truthy and one containing elements for which the result of the function run on the
 * element is falsy.
 * 
 * @param {Array} array: This is an array containing elements that are objects, which
 * will be iterated over using a for loop in this function.
 * 
 * @return {Array} all: This array is returned and it contains two subarrays: one containing
 * all of the array elements for which the result of the function run on the element is 
 * truthy and one containing all elements for which the result of the function run on 
 * the element is falsy.
 * 
 */
 
function partition(array, test) {
    let all = [];
    let truthies = [];
    let falsies = [];
    for(let i = 0; i <= array.length - 1; i++) {
        if (test(array[i], array[i]["key"], array)) {
            truthies.push(array[i]);
        } else {
            falsies.push(array[i]);
        }
    }
    all.push(truthies, falsies);
    return all;
} 

module.exports.partition = partition;

/**
 * map: This function is designed to take a collection(an object or an array) and a function, 
 * and push the result of the function acting upon each element or key-value pair
 * of the collection to a new array and return the resulting array.
 * 
 * @param {Object or Array} collection: This is the collection that is iterated
 * over using a for or a for-in loop. 
 * 
 * @param {Function} test: This function acts upon each element or key-value pair 
 * in the collection.
 * 
 * @return {Array} result: This array contains the results of the input function
 * acting upon the input collection. 
 * 
 */

function map(collection, test){
    let result = [];
    if(Array.isArray(collection)){
        for (let i = 0; i <= collection.length - 1; i++){
            result.push(test(collection[i], i, collection));
        }
    } else {
        for (let key in collection){
            result.push(test(collection[key], key, collection));
        }
    }
    return result;
}

module.exports.map = map;

/**
 * pluck: This function is designed to take an input array of objects and an input 
 * string indicating an object key and return an array containing the value of the 
 * property for every element in the array. 
 * 
 * @param {Array} array: This array contains element that are objects and is iterated
 * over using the map function.
 * 
 * @param {String} key: This parameter is a string indicating an object key
 * 
 * @return {Array}: The array that is returned contains all of the values of the specified
 * property key for each element in the input array.
 * 
 */

function pluck(array, key){
   return map(array, function(element, index, collection){
       return element[key];
    });
}

module.exports.pluck = pluck;

/**
 * every: This function is designed to iterate over a collection and return a boolean
 * value that is the result of a function(test) run on every item in the collection. If the 
 * function returns true for every item in the collection, true will be returned.
 * 
 * @param {Array or Object} collection: The somefunction determines whether the collection
 * is an array or an object and uses the appropriate for or for-in loop to iterate
 * over items in the collection.
 * 
 * @param {Function} test: This function acts upon every item of the collection. If 
 * the collection is an array, the function takes the parameters element, index, and collection.
 * If the collection is an object, the function takes the parameters value, key, and collection.
 * 
 * @return {Boolean}: If the result of running the input function on every item in the input
 * collection is true, return true; if even one item returns false, return false. If there
 * is no input function provided, return true for every truthy item and return false for every
 * falsy item.
 * 
 */
 
function every(collection, test) {
     if (Array.isArray(collection)) {
       for (let i = 0; i <= collection.length - 1; i++) {
           if (test === undefined && collection[i]) {
               return true;
           } else if (test === undefined && !collection[i]) {
               return false;
           } else if(!test(collection[i], i, collection)) {
               return false;
           }
       } return true;
    } else if (typeof collection === "object") {
        for (let key in collection) {
            if(test === undefined && collection[key]) {
                return true;    
            } else if (test === undefined && !collection[key]) {
                return false;    
            } else if (!test(collection[key], key, collection)) {
                return false;
            }
        }
        return true;
   }   
}

module.exports.every = every;

/**
 * some: This function is designed to iterate over a collection and run a function(test) on 
 * every item in the collection. If the result of running the function on at least
 * one item in the collection is true, the boolean true will be returned. If testing all items 
 * results in a boolean false, false will be returned.
 * 
 * @param {Array or Object} collection: The some function determines whether the collection
 * is an array or an object and uses the appropriate for or for-in loop to iterate
 * over items in the collection.
 * 
 * @param {Function} test: This function acts upon every item of the collection. If 
 * the collection is an array, the function takes the parameters element, index, and collection.
 * If the collection is an object, the function takes the parameters value, key, and collection.
 * 
 * @return {Boolean}: If the result of running the input function on at least one 
 * item in the input collection is true, return true. If the result of running the input 
 * function on all of the items in the input collection is false, return false. 
 * If there is no input function provided, return true for every truthy item and 
 * return false for every falsy item.
 * 
 */

function some(collection, test) {
     if (Array.isArray(collection)) {
       for (let i = 0; i <= collection.length - 1; i++) {
           if (test === undefined && collection[i]) {
               return true;
           } else if (test === undefined && !collection[i]) {
               return false;
           } else if(test(collection[i], i, collection)) {
               return true;
           }
       } return false;
    } else if (typeof collection === "object") {
        for (let key in collection) {
            if(test === undefined && collection[key]) {
                return true;    
            } else if (test === undefined && !collection[key]) {
                return false;    
            } else if (test(collection[key], key, collection)) {
                return true;
            }
        }
        return false;
   }      
}

module.exports.some = some;

/**
 * reduce: This function is designed to take three arguments: an array, a function(test), 
 * and a seed; the array is iterated over and the final single value of the defined variable
 * previousResult is returned.
 * 
 * @param {Array} array: This array is iterated over using a for loop.  
 * 
 * @param {Function} test: This function takes the parameters previousResult, element, 
 * and index; the function acts upon each element in the array.
 * 
 * @param {Any DataType} seed: In the reduce function, the variable previousResult is 
 * immediately set equal to seed. If the seed is not given, the first element of the 
 * input array is used as the seed. previousResult is set equal to the value of the 
 * input function acting on each element of the array. 
 * 
 * @return {Any Datatype} previousResult: The single final value of previousResult is 
 * returned after the last iteration of the loop. 
 * 
 */

function reduce(array, test, seed) {
    let previousResult = seed;
    if (seed === undefined) {
        previousResult = array[0];
    for(let i = 1; i <= array.length - 1; i++) {
        previousResult = test(previousResult, array[i], i);
    } 
    } else {
      for(let i = 0; i <= array.length - 1; i++) {
        previousResult = test(previousResult, array[i], i);
        }   
    }
    return previousResult;
}

module.exports.reduce = reduce;

/**
 * extend: This function is designed to take an object and an indefinite amount
 * of other objects and return the first object with the properties of the other 
 * objects added to it. 
 * 
 * @param {Object} object1: This is the object to which all of the other properties
 * of all of the other subsequent objects will be added. 
 * 
 * @param {Array of Objects} ...arrOfObjects: This array of objects is iterated over
 * using a for loop and each object in the array is looped over using a for-in loop.
 * Each key-value pair is added to object 1.
 * 
 * @return {Object} object1: object1 is return, now containing the properties of 
 * all of the other objects. 
 * 
 */

function extend(object1, ...arrOfObjects){
   for(let i = 0; i <= arrOfObjects.length - 1; i++) {
       for(let key in arrOfObjects[i]) {
           object1[key] = arrOfObjects[i][key];
       }
   } 
   return object1;
}

module.exports.extend = extend;
