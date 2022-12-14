import { CreateNewRoom } from "@route/Components/CreateNewRoom/CreateNewRoom";
import { ControlWrapper } from "@route/Components/Styled/Control";
import React, { useEffect, useRef, useState } from "react";
import Logout from "./Components/Logout";

const Control = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (containerRef.current) {
      setRef(containerRef.current);
    }
  }, [containerRef]);
  return (
    <ControlWrapper ref={containerRef}>
      <Logout />
      {ref && <CreateNewRoom containerTarget={ref} />}
    </ControlWrapper>
  );
};

export default Control;
