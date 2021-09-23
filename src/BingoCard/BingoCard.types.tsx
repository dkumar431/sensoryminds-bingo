export type BingoCardItemType = {
    label: string;
    isMarked: boolean;
}

export type BingoCardType = BingoCardItemType[][];

export type BingoCardItemProps = {
    item: BingoCardItemType;
}

export type BingoCardProps = {
    card: BingoCardType;
    isSelected: boolean;
    isWinner: boolean;
    onClick: () => void;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}