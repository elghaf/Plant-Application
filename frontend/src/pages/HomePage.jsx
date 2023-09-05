import React, { useState } from "react";
import { BaseButton } from "../components/BaseButton";

export function HomePage() {
  const [Count, setCount] = useState(0);

  function countup() {
    console.log("Button clicked");
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="flex justify-center">
      <BaseButton textValue="Here" onClickFunction={countup} />
      <p>Count: {Count}</p>
    </div>
  );
}
