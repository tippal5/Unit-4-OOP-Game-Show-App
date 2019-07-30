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
    let randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }
  startGame() {
    $('#overlay').hide();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }


  checkForWin() {
    return $('.hide.letter').length === 0
  }
  removeLife() {
    $('.tries img[src="images/liveHeart.png"]:first').attr('src', 'images/lostHeart.png');
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  };
  gameOver(gameWon) {
    $('#overlay').show()
    if (gameWon) {
      $('#overlay').addClass('win').removeClass('lose')
      $('#game-over-message').text('Kudos, You Got It!')
    } else {
      $('#overlay').addClass('lose').removeClass('win')
      $('#game-over-message').text('Try again!')
    };
    this.resetGame();
  }

  handleInteraction(button) {
    $(button).attr("disabled", true);
    if (!this.activePhrase.checkLetter($(button).text())) {
      $(button).addClass("wrong");
      this.removeLife();
    } else {
      $(button).addClass("chosen");
      this.activePhrase.showMatchedLetter($(button).text());
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }

  resetGame() {
    // startGame($('#btn_reset'));
    // this.missed === 0; 
    // this.getRandomPhrase();
    // $('.tries img[src="images/lostHeart.png"]:first').attr('src', 'images/liveHeart.png');
    $('#phrase ul li').remove();
    $('.key').removeClass('chosen').removeClass('wrong').removeAttr('disabled');
    $('.tries img[src="images/lostHeart.png"]').attr('src', 'images/liveHeart.png');
  }
};