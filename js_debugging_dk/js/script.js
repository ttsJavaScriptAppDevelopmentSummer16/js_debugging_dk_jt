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



var haveYouAnyWool = function() {
    var totalBags = 0;
    for (var i = 0; i < woolOwners.length; i++) {
      totalBags = totalBags + i;
    }
    return totalBags;
};

var bags = haveYouAnyWool();

function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + bags + " bags full");
  }
}

baabaaBlackSheep();

function oneForMy() {

    var people;
    // var person = people.toString();

    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners[i]);
        console.log("one for my " + people);
    }
}
oneForMy();

var boy = Object.keys(woolOwners[2]);
var littleBoy = boy[0];

var whereHeLives = woolOwners[2].location;
console.log("one for the " + littleBoy + " that lives " + whereHeLives);