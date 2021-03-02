import printToDom from '../helpers/printToDom';

let strength = 100;

const fightPoints = () => {
  document.querySelector('#fight-points').innerHTML = strength;
};

const runAway = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  fightPoints();
};

const violence = () => {
  strength -= 10;
  if (strength <= 0) {
    strength = 0;
  }

  fightPoints();
};

const strengthPoints = () => {
  let fightCard = '';
  fightCard += `<h1>FIGHT</h1>
  <div id="fight-points" class="text-center">${strength}</div>
  <br/><button type="button" id="brave" class="btn btn-warning">Bravely Run Away!</button>
  <button type="button" id="anger" class="btn btn-danger">Violence</button>
  `;
  printToDom('#fight', fightCard);

  document.querySelector('#brave').addEventListener('click', runAway);
  document.querySelector('#anger').addEventListener('click', violence);
};

export default strengthPoints;
