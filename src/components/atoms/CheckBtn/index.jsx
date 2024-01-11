import React from "react";
import * as S from './styled'

const CheckBtn = ({children, bgColor, event}) => {
    return (
        <S.Wrap style={{backgroundColor: bgColor}} onClick={event}>{children}</S.Wrap>
    );
}

export default CheckBtn;