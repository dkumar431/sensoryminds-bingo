import Button from "@mui/material/Button";

import {
  BingoCallerItemType,
  getButtonLabel,
  getRandomItemFromArray,
  Styles,
  BingoCallerProps,
} from "./";

const BingoCaller = ({ items, checkWinner }: BingoCallerProps) => {
  
  const unCalledItems = items.filter((item) => !item.isCalled);

  const pickItem = (pickedItem: BingoCallerItemType) => {
    pickedItem.isCalled = true;
    checkWinner(pickedItem);
  };

  const pickRandomItem = () => {
    if (unCalledItems.length === 0) {
      return false;
    }
    const pickedItem = getRandomItemFromArray(unCalledItems);
    pickedItem.isCalled = true;
    checkWinner(pickedItem);
  };

  const itemList = items.map((item) => {
    return (
      <Styles.BingoCallerItem
        isCalled={item.isCalled}
        onClick={() => pickItem(item)}
      >
        {item.label}
      </Styles.BingoCallerItem>
    );
  });

  return (
    <Styles.BingoCallerItemsContainer>
      <Styles.ButtonContainer>
        <Button variant="contained" component="div" onClick={pickRandomItem}>
          {getButtonLabel(items, unCalledItems)}
        </Button>
      </Styles.ButtonContainer>
      <Styles.WordsContainer>{itemList}</Styles.WordsContainer>
    </Styles.BingoCallerItemsContainer>
  );
};

export default BingoCaller;
