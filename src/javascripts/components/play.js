import printToDom from '../helpers/printToDom';

let fun = 50;

const playPoints = () => {
  document.querySelector('#play-points').innerHTML = fun;
};

const superFun = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  playPoints();
};

const slightFun = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  playPoints();
};

const funPoints = () => {
  let playCard = '';
  playCard += `<h1>PLAY</h1>
  <div id="play-points" class="text-center">${fun}</div>
  <br/><button type="button" id="super-fun1" class="btn btn-primary">Super Fun</button>
  <button type="button" id="slight-fun1" class="btn btn-info">Slight Fun</button>
  `;
  printToDom('#play', playCard);

  document.querySelector('#super-fun1').addEventListener('click', superFun);
  document.querySelector('#slight-fun1').addEventListener('click', slightFun);
};

export default funPoints;
