// Put jokes inside of an object
let jokes = {
    joke1: ['Harry', 'Harry up and open the door!'],
    joke2: ['Nana', 'Nana your business.'],
    joke3: ['Atch', 'God bless you.'],
    joke4: ['Lettuce', 'Lettuce in it\'s cold out here!'],
    joke5: ['Boo', 'Why are you crying?'],
    joke6: ['Cows go', 'No, cows go Moo!'],
    joke7: ['Iam', 'I You don\'t know who you are?']
}

// Make a random number to be able to choose a joke
let randNum = Math.floor(Math.random() * 7)

// Created a variable chosen joke which will hold the joke that is chosen
let chosenJoke;

// Created a function to assign a joke to the chosenJoke variable based on what the random number was
function getJoke(randNum) {
    if (randNum === 0) {
        chosenJoke = jokes.joke1;
    } else if (randNum === 1) {
        chosenJoke = jokes.joke2;
    } else if ( randNum === 2) {
        chosenJoke = jokes.joke3;
    } else if (randNum === 3) {
        chosenJoke = jokes.joke4;
    } else if (randNum === 4) {
        chosenJoke = jokes.joke5;
    } else if (randNum === 5) {
        chosenJoke = jokes.joke6;
    } else if(randNum === 6) {
        chosenJoke = jokes.joke7;
    }
 
}

function firstReply() {
   return chosenJoke[0];
}

function reply() {
    return chosenJoke[0] + ' who?';
}


function punchline() {
    return chosenJoke[1];
}
function wholeJoke() {
    getJoke(randNum);
    console.log(`Me: Knock Know! \nYou: Whose there? \nMe: ${firstReply()}\nYou: ${reply()}\nMe: ${punchline()}\n`)
}
wholeJoke();