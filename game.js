const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')
const moves = document.querySelector('.moves')
const StartButton = document.querySelector('#ButtonStart')

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


 const ButtonStart = () => {
    
    StartButton.style.display = 'none'

    const playerName = localStorage.getItem('nome');

    // spanPlayer.innerHTML = playerName
    startTimer()
    LoadGame()
}


function CarregarDados() {

    let marca = sessionStorage.getItem('favoritoSession')
    let nome = sessionStorage.getItem('nomeSession')
    let sobrenome = sessionStorage.getItem('sobrenomeSession')
    const addMarca = document.querySelector('#favoriteBrand')
    const addNome = document.querySelector('#p_nome')
    const addSobrenome = document.querySelector('#p_sobrenome')

    const contadorNike = document.querySelector('#contador_nike')
    let nike = Number(document.getElementById('contador_nike').innerHTML)

    const contadorAdidas = document.querySelector('#contador_adidas')
    let adidas = Number(document.getElementById('contador_adidas').innerHTML)

    const contadorVans = document.querySelector('#contador_vans')
    let vans = Number(document.getElementById('contador_vans').innerHTML)

    const contadorPuma = document.querySelector('#contador_puma')
    let puma = Number(document.getElementById('contador_puma').innerHTML)

    const contadorOus = document.querySelector('#contador_ous')
    let ous = Number(document.getElementById('contador_ous').innerHTML)

    addNome.innerHTML = nome
    addSobrenome.innerHTML = sobrenome

    if (marca == 'nike') {
        addMarca.innerHTML += `<img src="../img/nike.png" alt="">`
        nike += 1
        contadorNike.innerHTML = nike
    } else if (marca == 'adidas') {
        addMarca.innerHTML += `<img src="../img/adidas.png" alt="">`
        adidas += 1
        contadorAdidas.innerHTML = adidas
    } else if (marca == 'vans') {
        addMarca.innerHTML += `<img src="../img/vans.webp" alt="">`
        vans += 1
        contadorVans.innerHTML = vans
    } else if (marca == 'puma') {
        addMarca.innerHTML += `<img src="../img/puma.png" alt="">`
        puma += 1
        contadorPuma.innerHTML = puma
    } else if (marca == 'ous') {
        addMarca.innerHTML += `<img src="../img/ous.webp" alt="">`
        ous += 1
        contadorOus.innerHTML = ous
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 1000;
    ctx.canvas.height = 0;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Nike', 'Adidas', 'Vans', 'Puma', 'Ous'],
            datasets: [{
                label: '# of Votes',
                data: [nike, adidas, vans, puma, ous],
                backgroundColor: 'rgba(49, 27, 146, 0.5)',
                borderColor: 'rgba(49, 27, 146, 0.6)',
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

setInterval (CarregarDados(), 1000)