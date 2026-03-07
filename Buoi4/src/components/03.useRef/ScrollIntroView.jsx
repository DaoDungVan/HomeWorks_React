import React, { useRef } from "react";

const ScrollIntroView = () => {
  const fristCat = useRef(null);
  const secondCat = useRef(null);
  const thirdCat = useRef(null);

  function handleScrollToFirstCat() {
    fristCat.current.scrollIntoView({ behavior: "smooth" , block: "nearest", inline: "center" });
  }
  function handleScrollToSecondCat() {
    secondCat.current.scrollIntoView({ behavior: "smooth" , block: "nearest", inline: "center" });
  }
  function handleScrollToThirdCat() {
    thirdCat.current.scrollIntoView({ behavior: "smooth" , block: "nearest", inline: "center" });
  }

  return (
    <ul>
      <button onClick={handleScrollToFirstCat}>Scroll to frist cat</button>
      <button onClick={handleScrollToSecondCat}>Scroll to second cat</button>
      <button onClick={handleScrollToThirdCat}>Scroll to third cat</button>
      <li ref={fristCat}>
        <img src="https://placecats.com/neo/300/200?fit=contain" />
      </li>
      <li ref={secondCat}>
        <img src="https://placecats.com/300/200" />
      </li>
      <li ref={thirdCat}>
        <img src="https://placecats.com/g/300/200" />
      </li>
    </ul>
  );
};

export default ScrollIntroView;
