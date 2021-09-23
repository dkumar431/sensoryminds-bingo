import { useEffect, useRef } from "react";
import Reward from "react-rewards";
import { Styles, BingoCardItemType, BingoCardProps, BingoCardItem, getRewards } from "./";

const BingoCard = ({
  card,
  isSelected,
  isWinner,
  onClick,
  setIsGameOver,
}: BingoCardProps) => {
  const rewardRef = useRef<any>();
  let config = getRewards(isSelected && isWinner);

  useEffect(() => {
    if (isWinner) {
      //@ts-ignore
      rewardRef.current.rewardMe();
    }
  }, [isWinner]);

  useEffect(() => {
    let totalMarkedItems = 0;
    for (let i = 0; i < card.length; i++) {
      let col = card[i];
      for (let j = 0; j < col.length; j++) {
        if (card[i][j].isMarked) {
          totalMarkedItems += 1;
        }
      }
    }
    if (totalMarkedItems === 25) {
      setIsGameOver(true);
    }
  });

  return (
    <>
      <Reward
        ref={rewardRef}
        type={isSelected && isWinner ? "confetti" : "emoji"}
        config={config}
      ></Reward>
      <Styles.BingoGrid onClick={onClick} isSelected={isSelected}>
        {card.map((row, rowIdx) => {
          {
            return row.map((col, columnIdx) => {
              const item = card[rowIdx][columnIdx];
                return <BingoCardItem item={item} />;
              
            });
          }
        })}
      </Styles.BingoGrid>
    </>
  );
};

export default BingoCard;
