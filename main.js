"use strict"
  
class Player{
    constructor(name){
        this.name = name;
        this.highscore = 0;
    }
    getHighscore(){
        return this.highscore;
    }
    setHighscore(score){
        this.highscore = score;
    }
}
class Game {
    constructor(player){
        this.player = player;
        this.word = [];
        this.board = [];
        this.letters = [];
        this.missed = 0;
        this.score = 0;
    }
    chooseWord(words)  {
        const num = Math.floor(Math.random() * words.length);
        let temp = words[num];
        temp = temp.toUpperCase();
        this.word = temp.split("");
    }
    createBoard(){
        for(let i = 0; i < this.word.length; i++) {
            this.board.push("_");
        }
    }
    getBoard(){
        return this.board
    }
    setBoard(letter, index){
        this.board[index] = letter;
    }
    getLetters(){
        return this.letters
    }
    setLetters(input){
        this.letters.push(input)
    }
    checkInput(input){
        console.log(input);
        let double = false;
        this.letters.forEach(element => {
            if(element === input){
                console.log("Buchstabe doppelt");
                double = true;               
            }
        });
        if (this.letters.length === 0 || double === false){
            this.letters.push(input);
            this.checkBoard(input)
        }        
    }
    checkBoard(input){
        for(let i = 0; i < this.word.length; i++){
            if(input === this.word[i]){
                this.board[i] = input;
                this.score++
            } else {
                this.missed++
            }
        }
        this.checkWin()
    }
    checkWin(){
        let word = this.word.join("");
        let board = this.board.join("")
        if(word === board){
            console.log('gewonnen')
        }
    }
}
const getInput = (game) => {
    let input = document.getElementById('eingabe');
    const button = document.getElementById('btn_check')

    button.addEventListener('click', () => {
        game.checkInput(input.value.toUpperCase());
    })
}
const init = () => {
    const player = new Player('Dominik');
    const game = new Game(player);
    game.chooseWord(words);
    game.createBoard();
    console.log(game.word);
    getInput(game);
}

let words = [
    "Stift",
    "Auto",
    "Hund",
    "Katze",
    "Maus",
    "Schrank",
    "Tiger",
    "Lied",
    "Apfel",
    "Ball",
    "Hutständer",
    "Beispiel",
    "Mango",
    "Wort",
    "Spiegel",
    "Fremdsprache",
    "Gemüse",
    "Lampe",
    "Keks",
    "Test",
    "Bogen",
    "Topf",
    "Trompete",
    "Spinnennetz",
    "Zug",
    "Oel",
    "Ort",
    "Quiz",
    "Zentrum",
    "Volleyball",
    "Kindergarten",
    "Garderobe",
    "Rindfleischetikettierungsüberwachung",
    "Schifffahrtsgesellschaft",
    "Grundstücksverkehrsgenehmigungszuständigkeit",
    "Umweltschutzorganisationen",
    "Chrysantheme"
    ]

init(words)