
const userInfo = {
    firstName: "Avi", //first object
    lastName: "Flombaum", //second object
    company: { //third object
      name: "Flatbook Labs", //nested 1.0 object
      jobTitle: "Developer Apprentice",
    },
    friends: [ //fourth object which is an array of other objects
      {
        firstName: "Nancy", //nested 1.0 object
        lastName: "Burgess", //nested 1.1 object
        company: { //nested 1.2 object
          name: "Flatbook Labs", //nested 1.2.0 object
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna", //nested 2.0 object
        lastName: "Jackson", //nested 2.1 object
        company: { //nested 2.2 object
          name: "Flatbook Labs", //nested 2.2.0 object
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [ //fifth object
      {
        title: "Flatbook", //nested 1.0 object
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber", //nested 2.0 object
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  }


function deepIterator(target) {
    if (Array.isArray(target)) {
        console.log(`We've found an array.`)
    } else if (typeof target === "object") {
        for (const key in target) {
            deepIterator(target[key])
        }    
    } else {
        console.log(target)
    }
}
deepIterator(userInfo)







/*
console.log(userInfo.lastName)
console.log(userInfo.company.jobTitle)
console.log(userInfo.friends[1])
console.log(userInfo.friends[1].company.name)
console.log(userInfo.projects[0].description)
*/

// long method of calling objects in an object
/*
for (const key in userInfo) {
    if (typeof userInfo[key] === "object") {
        for (const nestedKey in userInfo[key]) {
            console.log(userInfo[key][nestedKey])
        }
    } else {
        console.log(userInfo[key])
    }
}
*/
/*
let counter = 0

function deepIterator(target) {
    counter++
   // console.log("Argument: ", target);

    if (typeof target === 'object') {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log("Logged value: ", target);
    }
  }

  const numbers = [1, [2, [4, [5, [6]], 3]]];

  deepIterator(numbers)
console.log(counter)
*/

































