import React, { useEffect, useState } from "react";
import * as S from "./styled"
import List from "../../atoms/List"
import BgBtn from "../../atoms/BgBtn";
import { Cookies } from "react-cookie";

const GroupList = ({children}) => {
  const cookies = new Cookies();
  const userId = cookies.get('id');
  const [isAddMemberSituation, setIsAddMemberSituation] = useState(false)
  const SaveIsAddMemSituation = () => {
    setIsAddMemberSituation(isAddMemberSituation? false : true);
  }
  return(
<>
  <List>
    <p>{children}</p>
    <div>
      <BgBtn>인원 추가</BgBtn>
      <BgBtn>삭제</BgBtn>
    </div>
  </List>
  {
    isAddMemberSituation ? <></> : 
    <S.userWrap style={{display:"flex", justifyContent:"right"}}>
      <List>
        아ㅓ아아
      </List>
    </S.userWrap>
  }
</>  
);
}

export default GroupList;