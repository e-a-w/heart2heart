import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

const Timer = () => {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={180}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
        "Every three minutes someone is diagnosed with leukemia, lymphoma, other
        cancer and genetic diseases."
      </p>
    </div>
  );
};

export default Timer;
