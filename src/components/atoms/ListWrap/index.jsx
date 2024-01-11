import React from "react";
import * as S from './styled'

const ListWrap = ({children}) => {
    return (
        <S.Wrap>{children}</S.Wrap>
    );
}

export default ListWrap;