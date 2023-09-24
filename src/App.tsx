import React from "react";
import styled from "@emotion/styled";
import YouTube from "react-youtube";
import { useRef, useState } from "react";

const DivStyle = styled.div`
  display: flex;

  .container {
    width: 100%;
    margin: 0 auto;
    background-color: #eba8eb;
  }

  a {
    width: 50%;
    text-decoration: none;
    color: white;
  }

  nav {
    width: 50%;
    float: right;
  }

  header nav div {
    display: flex;
  }

  header {
    width: 100%;
    height: 100px;
    display: flex;
  }

  header div {
    display: flex;
  }

  .musicBox {
    width: 100%;
    display: flex;
    padding: 50px;
  }

  button {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
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

  footer {
    width: 100%;
    height: 50px;
    display: flex;
  }

  footer .premium {
    width: 200px;
    justify-content: center;
    align-items: center;
  }

  footer .service {
    width: 200px;
  }

  footer .center {
    width: 200px;
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
      <div class="container">
        <header class="header">
          <h1>
            <a href="https://www.youtube.com/">music React</a>
          </h1>

          <nav>
            <div>kpop</div>
            <div>pop song</div>
            <div>Jpop</div>
            <div>dance</div>
          </nav>
        </header>

        <div>{index}</div>

        <div class="musicBox">
          <button class="music1" onClick={changeLink1}>
            music1
          </button>
          <button class="music2" onClick={changeLink2}>
            music2
          </button>
          <button class="music3" onClick={changeLink3}>
            music3
          </button>
        </div>

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

        <footer>
          <div class="premium">premium subscribe</div>
          <div class="service">custormer service center</div>
          <div class="address">address</div>
        </footer>
      </div>
    </DivStyle>
  );
}

export default App;
