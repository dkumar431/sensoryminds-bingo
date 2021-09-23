import { BingoCallerItemType } from "./";

export const getBingoCallerItems = (words: string[]): BingoCallerItemType[] => {
    let bingoCallerItems: BingoCallerItemType[] = [];
    for(let i = 0; i < words.length; i++){
        bingoCallerItems.push({label: words[i], isCalled: false})
    }
    return bingoCallerItems;
}

export const getRandomItemFromArray = (array: BingoCallerItemType[]): BingoCallerItemType => {
    return array[Math.floor((Math.random()*array.length))];
}

export const getButtonLabel = (totalItems: BingoCallerItemType[], unCalledItems: BingoCallerItemType[]): string => {
    if(totalItems.length === unCalledItems.length){
        return "Start Call";
    }else if(unCalledItems.length === 0){
        return "Finished";
    }else{
        return "Next Call";
    }
}