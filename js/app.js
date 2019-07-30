/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;



document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game()
  game.startGame();
});

$('.key').on('click', (e) => {
  let button = e.target; 
  game.handleInteraction(button);
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