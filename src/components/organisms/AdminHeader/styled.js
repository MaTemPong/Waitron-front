import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: #002266;
    box-shadow: 10px 0px 30px rgba(0,0,0,0.3);
    position: relative;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    justify-content: center;
`;