import { BingoCardType } from "./";
import { BingoCardItemType } from "./BingoCard.types";

const isDiagonalComplete = (card: BingoCardType) => {
  const isLeftDiagonalComplete = () => {
    let i;
    let j;
    for (i = 0, j = 0; i < 5 && j < 5; i++, j++) {
      if (!card[i][j].isMarked) {
        return false;
      }
    }
    return true;
  };

  const isRightDiagonalComplete = () => {
    let i;
    let j;
    for (i = 0, j = 4; i <= 4 && j >= 0; i++, j--) {
      if (!card[i][j].isMarked) {
        return false;
      }
    }
    return true;
  };

  if (isLeftDiagonalComplete() || isRightDiagonalComplete()) {
    return true;
  }
  return false;
};

const isHorizentalLineComplete = (card: BingoCardType, rowIdx: number) => {
  for (let i = 0; i < 5; i++) {
    if (!card[rowIdx][i].isMarked) {
      return false;
    }
  }
  return true;
};

const isVerticalLineComplete = (card: BingoCardType, columnIdx: number) => {
  for (let i = 0; i < 5; i++) {
    if (!card[i][columnIdx].isMarked) {
      return false;
    }
  }
  return true;
};

export const isWinner = (
  card: BingoCardType,
  rowIdx: number,
  columnIdx: number
) => {
  if (
    isDiagonalComplete(card) ||
    isHorizentalLineComplete(card, rowIdx) ||
    isVerticalLineComplete(card, columnIdx)
  ) {
    return true;
  }
  return false;
};

export const createBingoCard = (words: string[]) => {
  const matrix: BingoCardType = [];
  const randomCardItems = generateBingoCardItems(words);
  const cardItems = suffleBingoCardItems(randomCardItems);
  for (let i = 0; i < 5; i++) {
    const arr: BingoCardItemType[] = [];
    for (let j = 0; j < 5; j++) {
      arr.push(cardItems[5 * i + j]);
    }
    matrix.push(arr);
  }
  return matrix;
};

const suffleBingoCardItems = (array: BingoCardItemType[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const generateBingoCardItems = (words: string[]): BingoCardItemType[] => {
  let items: BingoCardItemType[] = [];
  for (let i = 0; i < 100; i++) {
    const item: BingoCardItemType = { label: `${words[i]}`, isMarked: false };
    items.push(item);
  }
  return items;
};

export const getRewards = (isCurrentUserWinner: boolean) => {
  if (isCurrentUserWinner) {
    return {
      elementCount: 400,
      angle: 320,
      spread: 30,
      lifetime: 200,
    };
  } else {
    return {
      elementCount: 5,
      angle: 45,
      emoji: ["&#9996"],
    };
  }
};
