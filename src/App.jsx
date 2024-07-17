import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Container from "./components/container/Container";

function App() {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const [pattern, setPattern] = useState([1, 0, 3, 2]);

  const [cards, setCards] = useState([
    {
      id: 0,
      flipped: false,
    },
    {
      id: 1,
      flipped: false,
    },
    {
      id: 2,
      flipped: false,
    },
    {
      id: 3,
      flipped: false,
    },
  ]);

  const generateNewPattern = () => {
    const newPattern = [];
    for (let i = 0; i < 4; i++) {
      newPattern.push(getRandomInt(cards.length));
    }
    return newPattern;
  };

  const playPattern = (newPattern) => {
    newPattern.forEach((id, index) => {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id ? { ...card, flipped: true } : card
          )
        );
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === id ? { ...card, flipped: false } : card
            )
          );
        }, 500);
      }, index * 1000);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newPattern = generateNewPattern();
    setPattern(newPattern);
    playPattern(newPattern);
  };

  return (
    <>
      <Container>
        <button onClick={handleClick} className=" bg-slate-900 h-14 text-white">
          empezar
        </button>
        {cards.map((card) => {
          return <Card key={card.id} id={card.id} flipped={card.flipped} />;
        })}
      </Container>
    </>
  );
}

export default App;
