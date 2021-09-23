export type BingoCallerItemType = {
    label: string;
    isCalled: boolean;
}

export type BingoCallerProps = {
    items: BingoCallerItemType[];
    checkWinner: (pickedItem: BingoCallerItemType) => void;
  }