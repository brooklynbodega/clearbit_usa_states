// Write a function that takes an object with a key of “stateCode”, 
// a US state abbreviation and converts the abbreviation to the full State Name. 
// In cases where an invalid value is used, prompt the user to enter a valid US State abbreviation. 
// i.e. given company = {companyName: “Clearbit”, stateCode: “CA”} you’ll return “California”.

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

// Write the function that takes an user-created object with a key of “stateCode”, 
// a US state abbreviation and converts the abbreviation to the value, the full State Name. 
let example = {
  "companyName": "Clearbit",
  "stateCode": "ak    !"
}; 

// Function to clean user input (remove special characters, change to uppercase, remove whitespace)
let stringCleaner = (str) => {
  let newString = str.replace(/[^a-zA-Z0-9.-]/g, "");
  newString = newString.toUpperCase().trim();
  return newString;
}

// 
const stateConvert = (data, userExample) => {
  // console.log('stateName', stateName);
  // console.log('stateObject', data);
  let abbreviation = stringCleaner(userExample.stateCode);
  console.log(abbreviation);
  // Results will be the fulle state name spelled out. 
  let results = "Incorrect value";
  // Iterate over the stateObject (data) to see if the userExample matches any key in the stateObject
  for (let i in data) {
    // console. log(i);
    // Check to see if the abbreviation matches a key in any instance of a key in stateObject
    if (abbreviation === i) {
      results = data[i];
    }
  }
  return results;
}

console.log(stateConvert(stateObject, example));