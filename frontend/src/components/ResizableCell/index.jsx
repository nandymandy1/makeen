import { useState } from "react";
import styled from "styled-components";

const ResizerX = styled.div`
  right: 0;
  width: 2px;
  border: none;
  height: 100%;
  cursor: col-resize;
  position: absolute;
  transform: translate(50%, -1px);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ResizerY = styled.div`
  width: 100%;
  border: none;
  height: 2px;
  bottom: 0;
  cursor: row-resize;
  position: absolute;
  transform: translate(-1px, 50%);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const GridCell = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ResizableGridCell = () => {
  const [size, setSize] = useState({ x: 400, y: 100 });

  const handler = (mouseDownEvent, resizeDirection = "x") => {
    const startSize = size;

    const startPosition = {
      x: mouseDownEvent.pageX,
      y: mouseDownEvent.pageY,
    };

    console.log(`page${resizeDirection.toUpperCase()}`);

    const onMouseMove = (mouseMoveEvent) => {
      setSize((currentSize) => ({
        ...currentSize,
        [resizeDirection]:
          startSize[resizeDirection] -
          startPosition[resizeDirection] +
          mouseMoveEvent[`page${resizeDirection.toUpperCase()}`],
        // y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      }));
    };

    const onMouseUp = () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    };

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  return (
    <GridCell
      style={{
        width: size.x,
        height: size.y,
      }}
    >
      <ResizerX onMouseDown={(e) => handler(e, "x")} />
      <ResizerY onMouseDown={(e) => handler(e, "y")} />
    </GridCell>
  );
};

const ResizableGrid = () => {
  return (
    <div style={{ display: "flex" }}>
      <ResizableGridCell />
      <ResizableGridCell />
    </div>
  );
};

export default ResizableGrid;
