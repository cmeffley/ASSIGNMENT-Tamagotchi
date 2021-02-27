import '../styles/main.scss';
// import { button, eatPoints } from './components/eat';
let full = 100;
const eatPoints = () => {
  const addToDom = `<h1>EAT</h1>
  <br/><button type="button" id="add1" class="btn btn-danger">Add</button><br/>
  <button type="button" id="sub1" class="btn btn-warning">Subtract</button>
  <div id="eat-points"></div>`;
  document.querySelector('#eat').innerHTML = addToDom;

  document.querySelector('#eat').addEventListener('click', (e) => {
    if (e.target.id.includes('add1')) {
      console.error('button has been clicked');
      full += 10;
      console.warn(full);
    }
    if (e.target.id.includes('sub1')) {
      full -= 3;
      console.warn(full);
    }
    document.querySelector('#eat-points').innerHTML = full;
  // document.querySelector('#sub1').addEventListener('click', eatPoints);
  });
};

const init = () => {
  // button();
  eatPoints();
};

init();
