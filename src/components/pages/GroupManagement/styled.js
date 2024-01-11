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
    }
`

export const CreateGroupWrap = styled.div`

`