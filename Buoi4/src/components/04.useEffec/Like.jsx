import { useRef } from "react";
import { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(false);
  const ref = useRef(null)
  return (
    <>
      <button
      onClick={() => setLike(!like)}
        style={{
          backgroundColor: like ? "#000" : "green",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 1s ease",
        }}
      >
        {`👍 Like`}
      </button>
      {like && <p ref={ref}>Thanks fot like!</p>}
    </>
  );
};

export default Like;
