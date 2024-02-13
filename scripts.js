const adjective = ['big', 'small', 'tall', 'short', 'round', 'skinny', 'fat', 'fluffy', 'furry', 'hairy', 'bald'];
const noun = ['dog', 'cat', 'bird', 'fish', 'lizard', 'snake', 'hamster', 'gerbil', 'rat', 'mouse', 'rabbit', 'guinea'];
const verb = ['run', 'jump', 'hop', 'skip', 'swim', 'fly', 'crawl', 'dance', 'sing', 'howl', 'bark', 'meow'];

function randomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomMessage() {
  const message = `You will see a ${randomWord(adjective)} ${randomWord(noun)} ${randomWord(verb)}!`;
  console.log(message);
}

generateRandomMessage();