let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote:`"Simplicity is the ultimate sophistication."`,
    person:`Leonardo da Vinci`
},{
    quote:`"Stay hungry, stay foolish."`,
    person:`Steve Jobs`
},{

    quote:`"Be yourself; everyone else is already taken."`,
    person:`Oscar Wilde`
},{
    quote: `"Do what you can, with what you have, where you are."`,

    person:`Theodore Roosevelt`
},{
    quote:`"The only way to do great work is to love what you do."`,
    person:`Steve Jobs`
}];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})