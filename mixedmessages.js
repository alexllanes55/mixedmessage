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

// Set up a variable to choose a random number between 0 and 7
let randNum = Math.floor(Math.random() * 7)

// Created a function to choose a day of the week.
let dayOfWeek = [];
function getDay(day) {
    day = randNum; 
    if (day === 0) {
        dayOfWeek = 'Sunday';
    } else if (day === 1) {
        dayOfWeek = 'Monday';
    } else if (day === 2) {
        dayOfWeek = 'Tuesday';
    } else if (day === 3) {
        dayOfWeek = 'Wednesday';
    } else if(day === 4) {
        dayOfWeek = 'Thursday';
    } else if(day === 5) {
        dayOfWeek = 'Friday';
    } else if(day === 6) {
        dayOfWeek = 'Saturday';
    }
    return dayOfWeek;
}
// Calling the function to choose a day of the week.
getDay(randNum);

// Created an object to get a motivational message based on what day of the week it is!
const message = {
        monday: 'Today is the first day of a successful week! Start off strong.',
        tuesday: 'You had a great start to the week yesterday! Keep going strong!',
        wednesday: 'Today is humpday. Only two more days in the week! Keep at it!',
        thursday: 'It\'s Friday eve! Only one more day.',
        friday: 'Finally it is Friday! Finish off the week strong!',
        saturday: 'You worked hard all week! Today you get to kick your feet up and relax, you\'ve earned it!',
        sunday: 'Time to get ready for another week of getting things done!'
}
function motivationalMessage(currentDay) {
    currentDay = dayOfWeek;
    if (currentDay === 'Sunday') {
        return message.sunday;
    } else if (currentDay === 'Monday') {
        return message.monday;
    } else if (currentDay === 'Tuesday') {
        return message.tuesday;
    } else if (currentDay === 'Wednesday') {
        return message.wednesday;
    } else if (currentDay === 'Thursday') {
        return message.thursday;
    } else if (currentDay === 'Friday') {
        return message.friday;
    } else if (currentDay === 'Saturday') {
        return message.saturday
    }
}



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
getJoke(randNum);

function firstReply() {
   return chosenJoke[0];
}

function reply() {
    return chosenJoke[0] + ' who?';
}


function punchline() {
    return chosenJoke[1];
}

//console.log(dayOfWeek);

function wholeJoke() {

    console.log(`Today is ${dayOfWeek}. The joke of the day is: `)
    console.log(`Knock Knock! Whose there? ${firstReply()}. ${reply()} ${punchline()}`)
    console.log(motivationalMessage(dayOfWeek));
}
wholeJoke();