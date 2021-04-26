// Write a function that takes an object with a key of “stateCode”, 
// a US state abbreviation and converts the abbreviation to the full State Name. 
// In cases where an invalid value is used, prompt the user to enter a valid US State abbreviation. 
// i.e. given company = {companyName: “Clearbit”, stateCode: “CA”} you’ll return “California”.

// Used this link for user-input: https://www.codecademy.com/articles/getting-user-input-in-node-js
const prompt = require('prompt-sync')();

// Create an object with all the state abbreviations and full names.
let stateObject = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "FL": "Florida",
  "GA": "Georgia",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PA": "Pennsylvania",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
};

// console.log(stateObject);

// Function to clean user input (remove special characters, change to uppercase, remove whitespace)
let stringCleaner = (str) => {
  let newString = str.replace(/[^a-zA-Z0-9.-]/g, "");
  newString = newString.toUpperCase().trim();
  return newString;
};

// Function to convert a string into an object: https://stackoverflow.com/questions/1086404/string-to-object-in-js
let stringToObject = (jsonStr) => {
  jsonStr.replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
    return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
  });
  jsonStr = JSON.parse(jsonStr); //converts to a regular object
  console.log(jsonStr);
  return jsonStr;
};



// userObject = JSON.parse(jsonStr); //converts to a regular object
// console.log(userObject);


// Function to take in userObject and check against json data for a match.
const dataMatch = (data) => {
  // Create a user input object
  let userObject = prompt('What is your object? ');
  console.log("Your object is " + userObject);
  userObject = stringToObject(userObject);
  console.log(userObject);
  // If the userObject does not have a stateCode, return invalid.
  if (!userObject.stateCode) {
    return "User Object is missing a state code. Please reenter.";
  };
  
  let abbreviation = stringCleaner(userObject.stateCode);
  console.log(abbreviation);

  // Results will be the fulle state name spelled out. 
  let results = false;
  // Iterate over the stateObject (data) to see if the userExample matches any key in the stateObject.
  for (let i in data) {
    // console. log(i);
    // Check to see if the abbreviation matches a key in any instance of a key in stateObject
    if (abbreviation === i) {
      const stateName = data[i];
      results = true;
      return "Your full state name is " + stateName; // fix to temporate literal
    }
  }
  // If the input does not match any state abbreviation, ask user to enter again. 
  return "Invalid state code given. Please run again with a valid state code."
}

// Use example for testing
// let example1 = { "companyName": "Clearbit", "stateCode": "CA" };
// let example2 = { "companyName": "Clearbit", "stateCode": "ma" };
// let example3 = { "companyName": "Clearbit", "stateCode": "ls" };


// console.log(exampleMatch(stateObject, example1));
console.log(dataMatch(stateObject));