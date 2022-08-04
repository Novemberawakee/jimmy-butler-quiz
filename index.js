const button = document.querySelector('.btn');
button.addEventListener('click', result);

const score = document.querySelector('#score');

function result(e) {
    e.preventDefault();

    let points = 0;

    if(document.querySelector('#answerOne').checked) {
        points++;
    }

    if(document.querySelector('#answerTwo').checked) {
        points++;
    }

    if(document.querySelector('#answerThree').checked) {
        points++;
    }

    if(document.querySelector('#answerFour').checked) {
        points++;
    }

    if(document.querySelector('#answerFive').checked) {
        points++;
    }

    if(document.querySelector('#answerSix').checked) {
        points++;
    }

    if(document.querySelector('#answerSeven').checked) {
        points++;
    }

    score.textContent = "Your score is " + points + " !!!";
}