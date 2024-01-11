import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px;
    background-color: #004077;
    * {
        color: #dbe4e3;
    }
    cursor: pointer;
    &:hover{
        transition: 0.2s;
        filter: brightness(120%);
    }
`;

export const LogoutBtn = styled.button`
    position: relative;
    z-index: 200;
    color: black;
`;