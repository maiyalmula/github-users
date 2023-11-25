import { useEffect, useState } from "react";

const Timer = (props) => {
  var [timerId, setTimerId] = useState(0);
  let [timer, setTimer] = useState(10);
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerId);
      console.log("timer stop");
    }
  }, [timer, timerId]);

  useEffect(() => {
    props.onChange(seconds);
  }, [seconds]);

  useEffect(() => {
    setSeconds(props.seconds);
  }, [props.seconds]);

  useEffect(() => {
    let internalTimerId = setInterval(updateCoutDown, 1000);

    function updateCoutDown() {
      setTimer((prev) => prev - 1);
      console.log("timer hit");
    }
    setTimerId(internalTimerId);
    return () => clearInterval(internalTimerId);
  }, []);
  return (
    <div>
      <h1> {timer} </h1>{" "}
    </div>
  );
};

export default Timer;
