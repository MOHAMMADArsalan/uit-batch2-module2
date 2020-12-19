import useCountDown from "react-countdown-hook";

const initialTime = 60 * 1000;
const intervalTime = 1000;

const CountDown = () => {
  const [remaimingTime, { start, pause, resume, reset }] = useCountDown(initialTime, intervalTime);

  const onStart = () => {
    start();
  };
  
  const onPause = () => {
    pause();
  };
  return (
    <div>
      <h1>Time Remaining</h1>
      <h3>{remaimingTime / 1000}</h3>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onStart}>Start</button>
      <button onClick={onStart}>Start</button>
    </div>
  );
};

export default CountDown;