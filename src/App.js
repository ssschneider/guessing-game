import Title from "./components/title";
import CardImage from "./components/card";
import Btn from "./components/button";
import Score from "./components/points";
import api from "./services/api"

import { AppWrapper, BtnsWrapper, Wrapper } from "./styles/main";

import { useEffect, useState } from "react";

function App() {
  const [ points, setPoints ] = useState(0)
  const [ currentCard, setCurrentCard ] = useState({})

  const getCard = async () => {
    const response = await api.get(`/new/draw/?count=1`)
    const cardData = await response.data
    const card = cardData.cards[0]
    const cardImg = card.image
    const cardCode = card.code
    setCurrentCard({ cardCode, cardImg})
  }

  const guessCardMessage = () => {
    alert("Pense em uma carta...")
  }

  const handleNewCard = () => {
    guessCardMessage()
    getCard()
  }

  const handleAddPoint = () => {
    setPoints(points + 1)
    handleNewCard()
  }

  useEffect(() => {
    getCard()
  }, [])

  return (
    <AppWrapper>
      <Wrapper>
        <Title text="A carta que você está pensando é essa?" />
        <CardImage src={currentCard.cardImg} alt={currentCard.cardCode}/>
        <BtnsWrapper>
          <Btn label="Sim, era essa mesmo!" onClick={handleAddPoint}/>
          <Btn label="Não era essa não." onClick={handleNewCard}/>
        </BtnsWrapper>

        <Score points={points}/>
      </Wrapper>
    </AppWrapper>
  );
}

export default App;
