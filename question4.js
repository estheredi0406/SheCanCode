//Question4

//a

function countProjectsVotes(projects) {
  let votes = {};
  projects.forEach((project) => {
    if (votes[project.votes]) {
      votes[project.votes]++;
    } else {
      votes[project.votes] = 1;
    }
  });
  return votes;
}

//b

function findWinningProject(votes) {
  let winningProjet = votes.reduce((y, x) => {
    return x.votes > y.votes ? x : y;
  });
  return winningProjet;
}

//c

//function getUniqueProjects(projects)

//d

//e

/*reduce is useful for counting votes instead of usinf the traditional loop because it is more concise and easier to read and return the winning project efficiently.*/
