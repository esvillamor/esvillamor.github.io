function sinking(participants, rounds) {
  let result = participants;

  for (let i = 0; i < rounds.length; i++) {
    const groupSize = rounds[i];
    const remainingParticipants = result % groupSize;
    const qualifiedParticipants = result - remainingParticipants;

    result = (qualifiedParticipants / groupSize) * groupSize;
  }

  return result;
}

//const participants =   32
//const rounds = [3,24,2,6,1,3,5]; //20

//const participants =  165
//const rounds = [32,23,2,3,51,21,23]; //69

//const participants = 22
//const rounds = [1,1,1,1,2,2,2,3,4,5,3]; //18

//const participants = 62
//const rounds = [60,59,56,45,32,22,11,4]; //20


//execute one by one for each test case
//const qualifiedParticipants = sinking(participants, rounds);
//console.log(qualifiedParticipants); // Output: 8
