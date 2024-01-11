import styled from "styled-components";
import {Input} from "../../atoms/Input/styled";

export const Wrap = styled.main`
    width: calc(100vw - 300px);
    height: 100vh;
    background-color: white;
`;

export const ContentsContainer = styled.div`
    width: 100%;
    height: calc(100vh-80px);
    padding: 20px;
    ${Input}{
        font-size: 1.2rem;
        position: absolute;
        right: 0%;
    }
`

export const ModeChanger = styled.div`
    width: 200px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid black;
`; 

export const ModeBtn = styled.button`
    padding: 5px;
    width: 50%;
    font-size: 1rem;
    border: none;
    cursor: pointer;
`;

export const InputWrap = styled.div`
    position: relative;
    padding: 20px;
    width: 50%;
    height: 80px;
`