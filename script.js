//M
let firstNumber = 0;
let secondNumber = 0;
let points = 0;
//V
ViewAll()
function ViewAll() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="container">
            <h1>Croc Game</h1>
            <div id="points">Poeng: ${points}</div>
            <div class="crocpic">
            <img src="croc.jpg" alt="EvilCroc">
            <div class="gameField">
                <div id="firstNumber"></div>
                <input id="userAnswer" type="text">
                <div id="secondNumber"></div>
            </div>   
            <div class="playButtons">
                <button onclick="insertSymbol('>')">></button>
                <button onclick="insertSymbol('=')">=</button>
                <button onclick="insertSymbol('<')"><</button>
            </div>
            <div class="gameButtons">
                <button onclick="submit()">Submit</button>
                <button onclick="reset()">Reset</button>
            </div>
        </div>
    `;
    updateNumber()
}

//C
function submit() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const correctAnswer = firstNumber > secondNumber ? '>' : (firstNumber < secondNumber ? '<' : '=');

    if(userAnswer===correctAnswer) {
        points += 10;
    } else {
        points -=5;
    }

    updateNumber();
    document.getElementById('points').textContent = 'Poeng: ' + points;
    document.getElementById('userAnswer').value = '';
}

function insertSymbol(symbol) {
    document.getElementById('userAnswer').value = symbol;
}

function reset() {
    updateNumber();
    points = 0;
    document.getElementById('points').textContent = 'Poeng: ' + points;
}

function updateNumber() {
    firstNumber = getRandomNumber();
    secondNumber = getRandomNumber();
    document.getElementById('firstNumber').innerHTML = firstNumber;
    document.getElementById('secondNumber').innerHTML = secondNumber;
}

function getRandomNumber() {
    return Math.round(Math.random() * 10);
}
