import styled from "styled-components";
import Paper from '@mui/material/Paper';

const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const BingoCardsContainer = styled.div<{cardCount: number}>`    
    display: grid;
    grid-gap: 10px;
    grid-template-columns: ${props => `repeat(${props.cardCount}, 1fr)`}};
    
    @media (max-width: 992px) {
		grid-template-columns:  1fr 1fr;
	}
    @media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const BingoCardsWrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
`;
const PlayerSelector = styled.div`
    margin: 0 auto;
`;
const Label = styled.div`
    padding: 10px;
    font-weight: 500;
    
`;
const StartGameButton = styled.div`
    margin-top: 2rem;
`;
export const Styles = {
    TopWrapper,
    BingoCardsContainer,
    BingoCardsWrapper,
    PlayerSelector,
    Label,
    StartGameButton
}