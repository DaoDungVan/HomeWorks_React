import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Ex1_Bai1 from "./components/Bai1/ex1";
import Ex2_Bai1 from "./components/Bai1/Ex2";
import Ex3_Bai1 from "./components/Bai1/Ex3";
import Ex4_Bai1 from "./components/Bai1/Ex4";

import Ex1_Bai2 from "./components/Bai2/Ex1";
import Ex2_Bai2 from "./components/Bai2/Ex2";

function App() {
  return (
    <div>
      <h1 style={{color: "blue"}}>Bài 1</h1>
      <h2>Ex1</h2>
      <Ex1_Bai1 />
      <h2>Ex2</h2>
      <Ex2_Bai1 />
      <h2>Ex3</h2>
      <Ex3_Bai1 />
      <h2>Ex4</h2>
      <Ex4_Bai1 />

      <h1 style={{color: "green"}}>Bài 2</h1>
      <h2>Ex1</h2>
      <Ex1_Bai2 />
      <h2>Ex2</h2>
      <Ex2_Bai2 />
    </div>
  );
}

export default App;
