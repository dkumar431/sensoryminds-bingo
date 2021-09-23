import styled from "styled-components";






const GridItem = styled.div<{isMarked: boolean}>`
    border: 0.1px dashed #BDBDBD;
    font-size: 13px;
    padding: 0.3rem;
    text-align: center;
    background-color: ${props => (props.isMarked ? "#B9F6CA" : "white")};
    width: 4.5rem;
    height: 4.5rem;
    word-wrap: break-word;
    text-transform: capitalize;
    @media (max-width: 768px) {
		width: 3rem;
        height: 3rem;
        font-size: 10px;
	}
`;


const BingoGrid = styled.div<{isSelected: boolean}>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    background: ${props => (props.isSelected ? "#1976d2" : "white")};
    padding: 5px;
    border-radius: 5px;
`;







export const Styles = {
    
    BingoGrid,
    GridItem,
    
    
    
   
}