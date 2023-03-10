//There are two gymnastics team, Dolphins and koalas. 
//They compete against each other 3 times. The winner with the highest average score wins the trophy!

// 1. calculate the average score for each team using the test data below,
// 2. compare the teams average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw,
//so test for that as well (Draw means they have the same average score)

// 3. BONUS 1: include a requirement for a minimum score of 100. This means, the team only wins if it has a higher score than the other team,
// and at the same time a score of at least 100 points. HINT: use a logical operator to test for the minimum score as well as
// multiple if else blocks.

// 4. BONUS 2: minimum scores also applies to a draw. So, the draw only happens if both the teams have the same score and both have a 
// score greater or equal to 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas scores are: 88, 91 and 110.
// Dolphis scores are 97, 112 and 101. Koalas scores are:  109, 95 and 123.
// Dolphins scores are 97, 112 and 101. Koalas scores are: 109, 95 and 106.


//


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas) {
//     console.log('Dolphins wins the trophy');
// }
// else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas wins the trophy');
// }
// else if (scoreDolphins === scoreKoalas){
//     console.log("Both win the trophy!");
// }

//bonus 1
// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins wins the trophy');
// }
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas wins the trophy');
// }
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("Both win the trophy!");
// }
// else{
//     console.log('No one wins trophy');
// }