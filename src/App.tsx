import React from "react";
import styled from "@emotion/styled";
import YouTube from "react-youtube";
import { useRef, useState } from "react";

const DivStyle = styled.div`
  display: flex;

  button {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .music1 {
    background-color: #cc7272;
  }

  .music2 {
    background-color: #df7365;
  }

  .music3 {
    background-color: #e75c49;
  }
`;

function App() {
  const [index, setIndex] = useState("A");
  const [link, setLink] = useState("link");

  function changeChar1() {
    setIndex("A");
  }

  function changeChar2() {
    setIndex("B");
  }

  function changeChar3() {
    setIndex("C");
  }

  function changeLink1() {
    setLink("gC9TmTyMTcg?si=jPT1Eiil6Cpgr6ZA");
  }

  function changeLink2() {
    setLink("X5v7q7p5t1k?si=etJ4noZ3-k3BbuKa");
  }

  function changeLink3() {
    setLink("Vqt2hdGIUyA?si=yaFgMIQleqfi79eN");
  }

  const player = useRef();

  return (
    <DivStyle>
      <h1>
        <a href="https://www.youtube.com/">music React</a>
      </h1>
      <div>{index}</div>
      <button class="music1" onClick={changeLink1}>
        music1
      </button>
      <button class="music2" onClick={changeLink2}>
        music2
      </button>
      <button class="music3" onClick={changeLink3}>
        music3
      </button>

      <iframe
        ref={player}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${link}&autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </DivStyle>
  );
}

export default App;
