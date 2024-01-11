import styled from "styled-components";

export const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #247fe4ff;
`;

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const MainText = styled.h1`
    color: white;
    font-size: 5rem;
    text-align: center;
    text-shadow: 0 20px 30px rgba(0,0,0, 0.5);
`;

export const ChoiceWrap = styled.div`
    display: flex;
    width: 100%;
    height: 900px;
    align-items: center;
    justify-content: center;
    gap: 400px;
`;

const choiceSize = 400;

export const ChoiceBtn = styled.div`
    font-size: 4rem;
    font-weight: bold;
    color: black;
    background-color: rgba(255,255,255,0.8);
    width: ${choiceSize}px;
    height: ${choiceSize}px;
    line-height: ${choiceSize}px;
    text-align: center;
    border-radius: 500px;
    box-shadow: 0 20px 30px rgba(0,0,0, 0.5);
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background-color: rgb(255,255,255);
        scale: 1.05;
    }
`