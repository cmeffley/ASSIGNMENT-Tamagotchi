import '../styles/main.scss';
import eatPoints from './components/eat';
import funPoints from './components/play';
import strengthPoints from './components/fight';
import sleepPoints from './components/sleep';

const init = () => {
  eatPoints();
  funPoints();
  strengthPoints();
  sleepPoints();
};

init();
