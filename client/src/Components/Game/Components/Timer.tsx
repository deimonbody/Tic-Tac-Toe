import { TimerStyled } from "@src/Components/Styled/Game";
import React, { useEffect, useState } from "react";

interface IProps {
  timeUp: () => void;
}

const Timer: React.FC<IProps> = ({ timeUp }) => {
  const [timer, setTimer] = useState(15);

  const interval = () => {
    const intervalID = setInterval(() => {
      setTimer((prevState) => {
        if (prevState - 1 === 0) {
          clearInterval(intervalID);
          timeUp();
          return 0;
        }
        return prevState - 1;
      });
    }, 1000);
    return intervalID;
  };

  useEffect(() => {
    const intervalID = interval();
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <TimerStyled>00:{`${timer < 10 ? "0" : ""}${timer}`}</TimerStyled>;
};

export default Timer;
