/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Im surrounded by idiots'),
      new Phrase('And so we are all connected in the great circle of life'),
      new Phrase('No worries'),
      new Phrase('I laugh in the face of danger'),
      new Phrase('I ate like a pig')
    ];
    this.activePhrase = null;
  };

  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random()*this.phrases.length);
    return this.phrases[randomIndex]; 
  }

  
  startGame() {
    $('#overlay').hide();
  }
};