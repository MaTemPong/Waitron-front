import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const MainList = ({children, link, onClick, state}) => {
    return(
        <S.Main style={{background: state ? '#0070b8' : '#004077' }}>
            <Link onClick={onClick} to={link} style={{color: state ? 'white' : 'white', fontWeight: state ? 'bold' : 'normal'}}>{children}</Link>
        </S.Main>
    );
}

export default MainList;