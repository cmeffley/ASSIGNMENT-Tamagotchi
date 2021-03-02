import printToDom from '../helpers/printToDom';

let full = 100;

const changePoints = () => {
  document.querySelector('#eat-points').innerHTML = full;
};

const goodFood = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  changePoints();
};

const badFood = () => {
  full -= 3;
  if (full <= 0) {
    // full = '<img src="../components/javascripts/img/iconfinder_Skull_3733549.png"/>';
  }

  changePoints();
};

const eatPoints = () => {
  let eatCard = '';
  eatCard += `<h1>EAT</h1>
  <div id="eat-points" class="text-center">${full}</div>
  <br/><button type="button" id="add1" class="btn btn-danger">Healthy Food</button>
  <button type="button" id="sub1" class="btn btn-warning">Junk Food</button>
  `;
  printToDom('#eat', eatCard);

  document.querySelector('#add1').addEventListener('click', goodFood);
  document.querySelector('#sub1').addEventListener('click', badFood);
};

export default eatPoints;
