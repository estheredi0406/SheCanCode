function countMembershipLevels(members) {
  let levels = {};
  members.forEach((member) => {
    if (levels[member.membershipLevel]) {
      levels[member.membershipLevel]++;
    } else {
      levels[member.membershipLevel] = 1;
    }
  });
  return levels;
}

console.log(countMembershipLevels([{ name: "John", membershipLevel: "Gold" }]));
