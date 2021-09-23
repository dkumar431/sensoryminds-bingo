export type BingoGameSettingProps = {
    noOfPlayers: number;
    setNoOfPlayers: React.Dispatch<React.SetStateAction<number>>;
    topic: string; 
    setTopic: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => void;
}