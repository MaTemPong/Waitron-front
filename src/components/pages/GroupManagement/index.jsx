import React, { useState } from "react";
import * as S from "./styled"
import ManagementTitle from "../../atoms/ManagementTitle";
import BgBtn from "../../atoms/BgBtn";
import Input from "../../atoms/Input";
import CheckBtn from "../../atoms/CheckBtn";

const GroupManagement = () => {
    const [searchValue, SetSerchValue] = useState('');
    const SaveSerchValue = (e) => {
        SetSerchValue(e.target.value)
    }

    return(
        <S.Wrap>
            <ManagementTitle text={"조직 관리"}/>
            <S.ContentsContainer>
                <S.CreateGroupWrap style={{display: 'flex', gap: '20px', alignItems:'center'}}>
                    <Input saveVal={searchValue} setSaveVal={SaveSerchValue} placeHolder={"조직을 생성합니다"}></Input>
                    <CheckBtn bgColor={'#D9EDBF'}>조직 생성</CheckBtn>
                </S.CreateGroupWrap>
            </S.ContentsContainer>
        </S.Wrap>
    );
}

export default GroupManagement;