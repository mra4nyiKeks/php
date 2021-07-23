let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');




orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
gameRun = true;
answerNumber =  Math.floor((minValue + maxValue) / 2);
answerField.innerText = Math.floor((minValue + maxValue) / 2);
orderNumber = 0;
answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let checkPhrases = [
                `Думаю, что это число ${answerNumber }?`,
                `Наверное это ${answerNumber }?`,
                `Походу это ${answerNumber }?`,
                `Без вариантов, это ${answerNumber }!`,
                `Уверен, что это ${answerNumber }!`
            ];
            answerField.innerHTML = checkPhrases[Math.floor( Math.random() * checkPhrases.length)];
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let checkPhrases = [
                `Думаю, что это число ${answerNumber }?`,
                `Наверное это ${answerNumber }?`,
                `Походу это ${answerNumber }?`,
                `Без вариантов, это ${answerNumber }!`,
                `Уверен, что это ${answerNumber }!`
            ];
            answerField.innerHTML = checkPhrases[Math.floor( Math.random() * checkPhrases.length)];
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
    let equalPhrases = [
        'Я так и знал!\n\u{1F603}',
        'Какой я молодец\n\u{1F60C}',
        'Могу, умею, практикую!\n\u{1F60F}',
        'Четенько отгдал!\n\u{1F631}',
        'Вот ты и попался!\n\u{1F604}'
    ];
    answerField.innerHTML = equalPhrases[Math.floor( Math.random() * equalPhrases.length)];
    orderNumber = 0;
}
})