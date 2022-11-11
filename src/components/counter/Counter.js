import { useState } from "react";
import { StyledButton } from "./StyledButton";

const Counter = () => {
  const [num, setNum] = useState(0);

  const decrease = () => {
    setNum((num) => num - 1);
  };

  const increase = () => {
    setNum((num) => num + 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <StyledButton red onClick={() => decrease()}>
        -
      </StyledButton>
      <StyledButton green onClick={() => increase()}>
        +
      </StyledButton>
    </div>
  );
};

export default Counter;
