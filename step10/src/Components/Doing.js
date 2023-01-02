import { Countdown } from './Countdown';
import { useCountdown } from './useCountdown';
import { useState } from 'react';


function Doing(props) {
  const [countdownIsOn, setCountdownIsOn] = useState(false);
  const [countdownValue, setCountdownValue] = useCountdown(0);

  const { items, setItems, current, setCurrent } = props;
  const task = current !== null ? items[current].task : null;

  function completeTask() {
    const itemsList = [...items];
    
    itemsList[current].isDone = true;
    setItems(itemsList);
    setCurrent(null);

    setCountdownIsOn(false);
    setCountdownValue(0);  
  }

  function handleCountdownButton() {
    setCountdownIsOn(true); 
    setCountdownValue(25 * 60);
  }

  return (
    <div className="col-6 bg-light text-center">
      <h2 className="mt-4 mb-5">
        Currently doing
      </h2>
      <div className="d-flex flex-column">
        {task === null ? "Not currently doing anything" : task}
        <div className="mt-5 d-flex" style={spaceEvenly}>

          <button 
            className="btn btn-primary" 
            onClick={() => completeTask()} 
            disabled={!task}
          >
            <b>I'm done</b> 🚀
          </button>

          <button 
            className="btn btn-secondary"
            onClick={() => handleCountdownButton()}
            disabled={countdownValue}
          >
            Start 25' timer
          </button>
        </div>

        {countdownIsOn &&
          <Countdown 
            duration={countdownValue}
          />
        }
      </div>
    </div>

  )
}

const spaceEvenly = {
  'justifyContent': 'space-evenly'
};


export { Doing };