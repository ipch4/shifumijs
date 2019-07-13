  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  function shiFuMi(arg) {
    var possibleChoices = ['pierre', 'feuille', 'ciseaux'];

    var choice = possibleChoices[getRandomIntInclusive(0, 2)];

    var battle = {
      'feuille': {
        'pierre': 'win',
        'ciseaux': 'loose',
        'feuille': 'draw'
      },
      'pierre': {
        'pierre': 'draw',
        'ciseaux': 'win',
        'feuille': 'loose'
      },
      'ciseaux': {
        'pierre': 'loose',
        'ciseaux': 'draw',
        'feuille': 'win'
      }
    };

    return battle[arg][choice];
  }

  var userChoices = document.getElementsByClassName('userChoices');
  var result = document.getElementById('result');

  for (i=0; i < userChoices.length; i++) {
    userChoices[i].addEventListener('click', function() {
     result.innerHTML = shiFuMi(this.innerHTML.trim());
    });
  }
