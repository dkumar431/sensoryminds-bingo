import { motion } from "framer-motion";
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
`;

const FinalStageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MotionDivWrapper = styled(motion.div)``;

export const WinnerSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 15rem;
    width: 100%;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 25pt;
`;

export const Styles = {
    AppContainer,
    FinalStageWrapper,
    MotionDivWrapper,
    WinnerSection
};