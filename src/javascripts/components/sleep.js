import printToDom from '../helpers/printToDom';

let energy = 50;

const energyPoints = () => {
  document.querySelector('#energy-points').innerHTML = energy;
};

const napTime = () => {
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  energyPoints();
};

const deepSlumber = () => {
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
  energyPoints();
};

const sleepPoints = () => {
  let sleepCard = '';
  sleepCard += `<h1>SLEEP</h1>
  <div id="energy-points" class="text-center">${energy}</div>
  <br/><button type="button" id="nap-time" class="btn btn-danger">Nap Time!</button>
  <button type="button" id="deep-sleep" class="btn btn-warning">Sleepzzzz</button>
  `;
  printToDom('#sleep', sleepCard);

  document.querySelector('#nap-time').addEventListener('click', napTime);
  document.querySelector('#deep-sleep').addEventListener('click', deepSlumber);
};

export default sleepPoints;
