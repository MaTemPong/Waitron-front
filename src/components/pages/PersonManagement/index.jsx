import React, { useEffect, useState } from "react";
import * as S from "./styled"
import ManagementTitle from "../../atoms/ManagementTitle";
import Input from "../../atoms/Input";
import ListWrap from "../../atoms/ListWrap";
import PersonContent from "../../organisms/personContent";
import AdminJoinRequestManagementContent from "../../organisms/AdminJoinRequestManagementContent";

const PersonManagement = () => {
    const [mode, SetMode] = useState('person');
    const [personMode, setPersonMode] = useState(false);    
    const [requestMode, setRequestMode] = useState(false);
    
    const [searchValue, SetSearchValue] = useState("");
    
    const SaveSearchValue = (e) => {
        SetSearchValue(e.target.value)
    }

    const SaveMode = (m) => {
        SetMode(m) 
    }

    useEffect(()=>{
        console.log(mode)
        if(mode === 'person'){
            setPersonMode(true);
            setRequestMode(false);
        }else if(mode === 'request'){
            setPersonMode(false);
            setRequestMode(true);
        }
    }, [mode])

    useEffect(() => {
    }, [searchValue])

    return(
        <S.Wrap>
            <ManagementTitle text={"인원 관리"}/>
            <S.ContentsContainer>
                <S.ModeChanger>
                    <S.ModeBtn onClick={()=> SaveMode('person')} style={{backgroundColor : personMode? 'orange': 'white'}}>인원</S.ModeBtn>
                    <S.ModeBtn onClick={()=> SaveMode('request')} style={{backgroundColor : requestMode? 'orange': 'white'}}>참가요청</S.ModeBtn>
                </S.ModeChanger>
                <S.InputWrap>
                    <Input saveVal={searchValue} setSaveVal={SaveSearchValue} placeHolder={"검색할 키워드를 입력하세요."}/>
                </S.InputWrap>
                <ListWrap>
                </ListWrap>
                {personMode ? <PersonContent/> : <AdminJoinRequestManagementContent filterText={searchValue}/>}
            </S.ContentsContainer>
        </S.Wrap>
    );
}

export default PersonManagement;