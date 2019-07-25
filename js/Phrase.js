/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {


    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    addPhraseToDisplay() {
        const ul = $('#phrase ul');
        for (let n = 0; n < this.phrase.length; n++) {
            let letter = this.phrase[n];
            if (" " == letter) {
                ul.append(`<li class="space"> </li>`);
            } else {
                ul.append(`<li class="hide letter ${letter}">${letter}</li>`);
            }
        }

    };
    checkLetter(letter) {
        return this.phrase.length(letter);
    }
    showMatchedLetter(letter) {
        let alpha = $('#phrase li');
        for(l=0; l < alpha.length; l++) {
          if(alpha[l].textContent.toLowerCase() == letter.toLowerCase())
            $(alpha[l]).removeClass('hide').addClass('show');
        }
        
        
    };

};