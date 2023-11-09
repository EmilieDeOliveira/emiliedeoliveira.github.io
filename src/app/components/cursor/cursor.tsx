import React, { useContext } from "react";

import useMobile from "../../hooks/useMobile.hook";
import useMousePosition from "../../hooks/useMousePosition.hook";
import { CursorContext } from "../../providers/cursorProvider";

const Cursor = () => {
  const { cursorType } = useContext(CursorContext);
  const { x, y } = useMousePosition();
  const isMobile = useMobile(1024);
  return (
    <>
      {!isMobile && (
        <div className={`dot ${cursorType}`} style={{ left: `${x}px`, top: `${y}px` }}>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Cursor;
