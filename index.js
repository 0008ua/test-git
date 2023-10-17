// first line

function one () {
  const pairs = [['a', 5000], ['b', 6000], ['c', 2]];
  const variables = [];
  for (const pair of pairs) {
    variables.push(createVariable(pair));
  }
  return variables;
}
console.log(one());


function two () {}

function four() {
  console.log("changes by collaborator before me");
  console.log('changes by me after collaborator')
}

function createVariable(pair) {
  // create variable
  return { [pair[0]]: pair[1] };
}