var woolOwners = [
  {
      "master": 1
  },
  {
    "dame": 1
  },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];


var bags = haveYouAnyWool;

var haveYouAnyWool = function() {
    for (var i = 0; i < woolOwners.length; i++) {
    var totalBags = totalBags + i;
    }
    return (i);
};


function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + totalBags + " bags full");
  }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners);
        var person = people.toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep();
oneForMy();

// can use a built-in method to access the woolOwner object's keys
var boy = Object.keys(woolOwners[2]);
// "little boy" is the first key, not the second
var littleBoy = boy[0];

// note: can't access via the "boy" or "litteBoy" variables here
// need to access the "location" key's value directly from the woolOwners object
var whereHeLives = woolOwners[2].location;
console.log("one for the " + littleBoy + " that lives " + whereHeLives);