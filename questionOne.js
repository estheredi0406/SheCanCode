//QUESTION 1

function countMembershipLevels(members) {
  let levels = [{}];
  members.forEach((member) => {
    if (levels[member.membershipLevel]) {
      levels[member.membershipLevel]++;
    } else {
      levels[member.membershipLevel] = 1;
    }
  });
  return levels;
}

console.log(
  countMembershipLevels(
    [{ name: "John", membershipLevel: "Gold" }][
      { name: "Joe", membershipLevel: "Gold" }
    ]
  )
);

//b*/

function getGoldMembersName(members) {
  let goldMembers = members.filter((member) => {
    return member.membershipLevel === "Gold";
  });
  if (goldMembers.length == 0) {
    return "No gol members found";
  } else {
    return goldMembers.map((member) => {
      return member.name;
    });
  }
}

let getGoldMmbers = members.filter((member) => {
  return member.membershipLevel === "Gold";
});

console.log(getGoldMembersName([{ name: "John", membershipLevel: "Gold" }]));

//d

function generateWelcomeMessages(members) {
  return members.map((member) => {
    return `Welcome, ${member.name}! You are a ${member.membershipLevel} member.`;
  });
}

console.log(
  generateWelcomeMessages([{ name: "Nina", membershipLevel: "Gold" }])
);

//The map method is an array method used to create a new array by calling a function on each element of the original array. It creates a new array with the results of calling a provided function on every element in the calling array.
//It is often used instead of loops because it is more eficient and easier to read. It is also used to transform data from one form to another.
