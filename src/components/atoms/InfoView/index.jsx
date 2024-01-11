import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { Cookies } from "react-cookie";

const InfoView = ({curRole}) => {
    const Move = (link) => {
        window.location.replace(link)
    }

    const cookies = new Cookies();


    const onSubmit = async () => {
        cookies.remove('id')
        window.location.replace('/')
    }

    return(
        <S.Main>
            <Link onClick={() => Move('/choiceRole')}>
                <h3>{cookies.get('id')}님</h3>
                <h4>{curRole} | 역할 변경</h4>
            </Link>
           <S.LogoutBtn onClick={onSubmit}>로그아웃</S.LogoutBtn>
        </S.Main>
    )
}
export default InfoView;