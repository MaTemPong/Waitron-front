import styled from "styled-components";

export const Main = styled.li`
    width: 95%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background-color: #004077;
    border-radius: 0 20px 20px 0;
    &:hover{
        transition: 0.3s;
        color: white;
        background-color: #0070b8;
    }
    a{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
    }
`;