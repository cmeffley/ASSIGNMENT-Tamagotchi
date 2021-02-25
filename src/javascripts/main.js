import '../styles/main.scss';
// import { button, eatPoints } from './components/eat';
const addToDom = '<button type="button" id="add1" class="btn btn-danger">Add</button><button type="button" id="sub1" class="btn btn-warning">Subtract</button>';
document.querySelector('#eat').innerHTML = addToDom;

const eatPoints = (e) => {
  console.warn(e);
  const targetId = e.target.id;
  let full = 100;
  document.querySelector('#test').innerHTML = full;
  if (targetId === '#add1') {
    full += 10;
  // } else (targetId === '#sub1') {
  //   full -= 3;
  // };
  }
  document.querySelector('#add1').addEventListener('click', eatPoints);
  document.querySelector('#sub1').addEventListener('click', eatPoints);
};

const init = () => {
  // button();
  eatPoints();
};

init();
