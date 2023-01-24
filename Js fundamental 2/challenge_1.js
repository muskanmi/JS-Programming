// Back to the two gymnastics teams, the Dolphins and the Koalas!
// There is a new gymnastics discipline, 
// which works differently.
// Each team compete 3 times, and then the average of the 3 scores is
// calculated (so one average score per team).
// A team ONLY wins if it has atleast DOUBLE the average
// score of the other teams. Otherwise, no team wins!

/*
1. Create an arrow function 'calAverage' to calculate the average of 3 scores.
2. Use the function to calculate the average for both teams.
3. create a function 'checkWinner' that takes the average score of each team as paracmeters
('avgDolphins' and 'avgKoalas'), and then logs the
winner to the console, together with the victory
points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.


TEST DATA 1: Dolphins score 44, 23 and 71. Koalas
score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas
score 23, 34 and 27.
*/

// const calAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calAverage(3, 4, 5));

// const scoreDolphins = calAverage(44, 23, 71);
// const scoreKoalas = calAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if(avgDolphins >= 2 * scoreKoalas) {
//         console.log(`Dolphinswins the trophy (${avgDolphins} vs ${avgKoalas})`);
//     }
//     else if(avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins the trophy (${avgKoalas} vs ${avgDolphins})`);
//     }
//     else{
//         console.log('No team wins!');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);