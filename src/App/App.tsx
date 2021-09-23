import { useEffect, useState } from "react";
import { Styles, AnimationWrapper } from "./";

import { BingoGameSetting } from "BingoGameSetting";
import { BingoCardSelector } from "BingoCardSelector";
import { BingoCardType, createBingoCard, isWinner } from "BingoCard";
import {
  getBingoCallerItems,
  BingoCaller,
  BingoCallerItemType,
} from "BingoCaller";



function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [noOfPlayers, setNoOfPlayers] = useState(0);
  const [topic, setTopic] = useState("");

  const [bingoCards, setBingoCards] = useState<BingoCardType[]>([]);
  const [selectedBingoCardIndex, setSelectedBingoCardIndex] =
    useState<number>(-1);

  const [calledItem, setCalledItem] = useState<BingoCallerItemType>();
  const [bingoCallerItems, setBingoCallerItems] = useState<
    BingoCallerItemType[]
  >([]);

  const [wordList, setWordList] = useState<string[]>([]);

  const [winners, setWinners] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const generateRandomWords = async () => {
      const words: string[] = [];
      const response = await fetch(
        "https://api.datamuse.com/words?topics=" + topic
      );
      const jsonData = await response.json();
      jsonData.map((data: any) => words.push(data.word));
      setWordList(words);
      setBingoCallerItems(getBingoCallerItems(words));
    };
    generateRandomWords();
  }, [topic]);

  const checkWinner = (pickedItem: BingoCallerItemType) => {
    setWinners([]);
    let winnerList: number[] = [];
    for (let k = 0; k < bingoCards.length; k++) {
      const bingoCardMatrix = bingoCards[k];
      for (let i = 0; i < bingoCardMatrix.length; i++) {
        const row = bingoCardMatrix[i];
        for (let j = 0; j < row.length; j++) {
          if (pickedItem.label === bingoCardMatrix[i][j].label) {
            bingoCardMatrix[i][j].isMarked = true;
            console.log("isWinner(bingoCardMatrix, i, j)", isWinner(bingoCardMatrix, i, j))
            if (isWinner(bingoCardMatrix, i, j)) {
              winnerList.push(k);
            }
            break;
          }
        }
      }
    }
    setWinners(winnerList);
    setBingoCards([...bingoCards]);
  };

  const generateBingoCards = () => {
    setCurrentStep(currentStep + 1);
    let bingoCards: BingoCardType[] = [];
    for (let i = 0; i < noOfPlayers; i++) {
      const newCard = createBingoCard(wordList);
      bingoCards.push(newCard);
    }
    setBingoCards(bingoCards);
  };

  return (
    <Styles.AppContainer>
      {currentStep === 1 && (
        <AnimationWrapper>
          <BingoGameSetting
            topic={topic}
            setTopic={setTopic}
            noOfPlayers={noOfPlayers}
            setNoOfPlayers={setNoOfPlayers}
            onSubmit={generateBingoCards}
          />
        </AnimationWrapper>
      )}

      {currentStep === 2 && (
        <AnimationWrapper>
          <BingoCardSelector
            bingoCards={bingoCards}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            selectedBingoCardIndex={selectedBingoCardIndex}
            setSelectedBingoCardIndex={setSelectedBingoCardIndex}
            winners={winners}
            setIsGameOver={setIsGameOver}
          />
        </AnimationWrapper>
      )}

      {currentStep === 3 && (
        <Styles.FinalStageWrapper>
          <BingoCardSelector
            bingoCards={bingoCards}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            selectedBingoCardIndex={selectedBingoCardIndex}
            setSelectedBingoCardIndex={setSelectedBingoCardIndex}
            winners={winners}
            setIsGameOver={setIsGameOver}
          />
          <AnimationWrapper>
            {!isGameOver && (
              <BingoCaller
                items={bingoCallerItems}
                checkWinner={checkWinner}
              />
            )}
            {isGameOver && (
              <Styles.WinnerSection>
                {winners.includes(selectedBingoCardIndex)
                  ? <span>You won &#128522;</span>
                  : <span>You Lost &#128546;</span>}
              </Styles.WinnerSection>
            )}
          </AnimationWrapper>
        </Styles.FinalStageWrapper>
      )}
    </Styles.AppContainer>
  );
}

export default App;
