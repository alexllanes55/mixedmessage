const joke1a = 'Harry';
const joke1b = 'Harry up and open the door!';
const joke2a = 'Nana';
const joke2b = 'Nana your business';
const joke3a = 'Hatch';
const joke3b = 'God bless you';
const joke4a = 'Luttuce';
const joke4b = 'Lettuce in it\'s cold out here!';

const firstResponse = [joke1a, joke2a, joke3a, joke4a];
const punchline = [joke1b, joke2b, joke3b, joke4b];

function knockknock() {
    console.log('Knock Knock!');
}

function whothere() {
    console.log('Who\'s there?')
}

function firstAnswer() {
    for (let i = 0; i < firstResponse.length; i++) {
        console.log(firstResponse[i]);
    }
}










//knockknock();
//whothere();
//console.log(jokesArr);
firstAnswer();