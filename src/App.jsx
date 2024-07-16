
import { useEffect, useState } from 'react'
import './App.css'
import Card from "./components/card/Card"
import Container from "./components/container/Container"

function App() {

  const [pattern, setPattern] = useState([])

  const [cards, setCards] = useState([
    {
      id: 0,
      flipped: false
    },
    {
      id: 1,
      flipped: false
    },
    {
      id: 2,
      flipped: false
    },
    {
      id: 3,
      flipped: false
    },
  ])

  const patron = [1, 3, 0, 2]

  // const cardsData = [
  //   {
  //     id:0,
  //     flipped: false
  //   },
  //   {
  //     id:1,
  //     flipped: false
  //   },
  //   {
  //     id:2,
  //     flipped: false
  //   },
  //   {
  //     id:3,
  //     flipped: false
  //   },

  // ]

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }





  // useEffect(()=> {
  //   setTimeout(() => {
  //     setCards((prev)=> prev.map(()=> patron.includes(prev.id) ? {...prev,flipped: !prev.flipped}: prev))
      
  //   }, 1200);

  // },[cards])


  const handleClick = (e) => {
    e.preventDefault();

    setCards(prevCards =>
      prevCards.map(card =>
        patron.includes(card.id) ?
          { ...card, flipped: !card.flipped } :
          card
      )
    );
  }





return (
  <>

    <Container>
      <button onClick={handleClick}  className=' bg-slate-900 h-14 text-white'>empezar</button>
      {
        cards.map((card) => {
          return <Card key={card.id} id={card.id} flipped={card.flipped} patron={patron} />
        })
      }
    </Container>
  </>
)
}

export default App
