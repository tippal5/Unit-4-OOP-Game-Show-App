/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();



game.getRandomPhrase().addPhraseToDisplay();

document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
});



// const logPhrase = (phrase) => {
//   console.log(`Phrase - phrase: `, phrase.phrase);
// };
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
//  game.phrase.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//  });
//let logPhrase = (phrase) => {};
// console.log(`Phrase - phrase: `, phrase.phrase);