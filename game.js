const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')
const moves = document.querySelector('.moves')

const CardElements = [
     'img-1',
     'img-2',
     'img-3',
     'img-4',
     'img-5',
     'img-6',
     'img-7',
     'img-8',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let FirstCard = '';
let SecondCard = '';
let movesCount = 0 

const checkEndGame = () => {

    const disabledCard = document.querySelectorAll('.disable-card');

    if (disabledCard.length  == 16) {
        clearInterval(this.loop)
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos, com ${movesCount} Movimentos.`)
    }


}


const checkCards = () => {
    const firstElement = FirstCard.getAttribute('data-element')
    const secondElement = SecondCard.getAttribute('data-element')

    if (firstElement == secondElement) {
        FirstCard.firstChild.classList.add('disable-card')
        SecondCard.firstChild.classList.add('disable-card')
        
        FirstCard = '';
        SecondCard = '';


        checkEndGame();
    } else {

        setTimeout(() => {
            FirstCard.classList.remove('reveal-card')
            SecondCard.classList.remove('reveal-card')

            FirstCard = '';
            SecondCard = '';
        },500) 
    }

    
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(FirstCard == '') {
        target.parentNode.classList.add('reveal-card');
        FirstCard = target.parentNode
    } else if (SecondCard == '') {
        target.parentNode.classList.add('reveal-card');
        SecondCard = target.parentNode;
        
        checkCards ();
    }
    
    movesCount += 1
    moves.innerHTML = movesCount
}


const CreateCard = (CardElement) => {


    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
    
    front.style.backgroundImage = `url('../img/${CardElement}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-element', CardElement)

    return card;
}

const LoadGame = () => {

    const DuplicateElements = [ ... CardElements, ... CardElements ];

    const ShuffledArray = DuplicateElements.sort(() => Math.random() - 0.5);

    DuplicateElements.forEach((cardElement) => {

        const card = CreateCard(cardElement)
        grid.appendChild(card)
});
}

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;

    }, 1000)
}


window.onload = () => {
    
    const playerName = localStorage.getItem('nome');

    spanPlayer.innerHTML = playerName
    startTimer()
    LoadGame()
}

