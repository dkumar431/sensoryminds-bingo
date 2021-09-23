import styled from "styled-components";

const BingoCallerItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #1976d2;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0.5rem;
`;

const BingoCallerItem = styled.div<{ isCalled: boolean }>`
  border-radius: 3px;
  border: 1px solid #BDBDBD;
  padding: 10px;
  margin: 3px;
  background-color: ${(props) => (props.isCalled ? "#BDBDBD" : "white")};
  cursor: pointer;
`;

const WordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-height: 15rem;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
   min-width: 130px;
   display: flex;
   align-items: center;
`;

export const Styles = {
  BingoCallerItem,
  BingoCallerItemsContainer,
  WordsContainer,
  ButtonContainer,
};
