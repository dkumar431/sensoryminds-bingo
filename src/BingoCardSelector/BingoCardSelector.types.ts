import { BingoCardType } from "BingoCard";

export type BingoCardSelectorProps = {
    currentStep: number;
    bingoCards: BingoCardType[];
    selectedBingoCardIndex: number;
    setSelectedBingoCardIndex: React.Dispatch<React.SetStateAction<number>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    winners: number[];
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}