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
    padding: 50px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
        position: relative;
        width: 50%;
        height: 80px;
    }
    ${Input}{
        font-size: 1.2rem;
        position: absolute;
        right: 0;
    }
`