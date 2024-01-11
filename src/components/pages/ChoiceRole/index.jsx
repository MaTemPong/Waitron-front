import React from "react";
import * as S from './styled'

const Move = (link) => {
    return window.location.replace(link);
}

const ChoiceRole = () => {
    return (
        <S.Wrap>
            <S.ContentWrap>
                <S.MainText>어떤 역할을 원하시나요?</S.MainText>
                <S.ChoiceWrap>
                    <S.ChoiceBtn onClick={()=>Move('/admin/personList')}>관리자</S.ChoiceBtn>
                    <S.ChoiceBtn onClick={()=>Move('/user/joinRequest')}>사용자</S.ChoiceBtn>
                </S.ChoiceWrap>
            </S.ContentWrap>
        </S.Wrap>
    );
};

export default ChoiceRole;