function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 400 && someValue <= 2000) {
    return 'That will be twenty bucks.';
  } else if (someValue>2000){
    return That will be thirty bucks.';
  }else if(someValue>2500){
    return 'Sorry, we can’t drive that far.';
  }
}

function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (true) {
    case tip <= 0:
      return 'Bye.';
    case tip > 0 && tip <= 100:
      return 'Thank you.';
    case tip > 100:
      return "Thank you so much.";
  }
}
