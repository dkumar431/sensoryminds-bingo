import { Styles, BingoCardItemProps } from "./";

export const BingoCardItem = ({item} : BingoCardItemProps) => {
    return <Styles.GridItem isMarked={item.isMarked}>{item.label}</Styles.GridItem>
}
