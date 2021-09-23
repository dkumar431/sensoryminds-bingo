import Button from "@mui/material/Button";
import { BingoCard } from "BingoCard";
import { Styles, BingoCardSelectorProps } from "./";

const BingoCardSelector = ({
  bingoCards,
  currentStep,
  selectedBingoCardIndex,
  setSelectedBingoCardIndex,
  setCurrentStep,
  winners,
  setIsGameOver,
}: BingoCardSelectorProps) => {
  return (
    <Styles.TopWrapper>
      {currentStep === 2 && <Styles.Label>Select Your Bingo Card</Styles.Label>}

      <Styles.BingoCardsContainer cardCount={bingoCards.length}>
        {bingoCards.map((card, index) => {
          return (
            <Styles.BingoCardsWrapper
              elevation={index === selectedBingoCardIndex ? 24 : 0}
            >
              <BingoCard
                card={card}
                isSelected={index === selectedBingoCardIndex}
                onClick={() => {
                  if (currentStep === 2) {
                    setSelectedBingoCardIndex(index);
                  }
                }}
                setIsGameOver={setIsGameOver}
                winners ={winners}
                currentCardIndex={index}
              />
            </Styles.BingoCardsWrapper>
          );
        })}
      </Styles.BingoCardsContainer>

      {currentStep === 2 && (
        <Styles.StartGameButton>
          <Button
            variant="contained"
            component="div"
            disabled={selectedBingoCardIndex === -1}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Start Game
          </Button>
        </Styles.StartGameButton>
      )}
    </Styles.TopWrapper>
  );
};

export default BingoCardSelector;
