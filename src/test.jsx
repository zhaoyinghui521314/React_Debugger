// console.log("test");
import { useEffect, useRef } from "react";

const Test = () => {
  const refDiv = useRef(null);
  // const time = useRef(0);
  // const count = useRef(10);
  const cancelReq = useRef(null);
  const message = useRef({ time: 0, count: 10 });
  const start = () => {
    console.log("start");
    window.postMessage("hello postmessage");
    animation();
  };
  const stop = () => {
    console.log("stop");
    window.cancelAnimationFrame(cancelReq.current);
  };

  const animation = (timestamp) => {
    if (message.current.count > 200) return;
    // console.log("ref:", timestamp, time, refDiv, count, cancelReq);
    const d = timestamp - message.current.time;
    console.log(d);
    if (d > 30) {
      console.log("timestamp:", d);
      refDiv.current.style.marginLeft = `${message.current.count}px`;
      message.current.count++;
      message.current.time = timestamp;
      //   console.log("e:", timestamp - time.current);
    }

    cancelReq.current = window.requestAnimationFrame(animation);
  };
  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log("ePostMessage:", e);
    });
  }, []);
  return (
    <div>
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
      <div
        ref={refDiv}
        style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
      ></div>
    </div>
  );
};

export default Test;
