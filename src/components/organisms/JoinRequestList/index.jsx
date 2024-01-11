import React, { useEffect, useState } from "react";
import * as S from "./styled"
import List from "../../atoms/List"
import BgBtn from "../../atoms/BgBtn";
import { Cookies } from "react-cookie";

const JoinRequestList = ({children, state, id}) => {
  const [curState, SetCurState] = useState(state);
  const cookies = new Cookies();
  const userId = cookies.get('id');

  useEffect(()=>{
    SetCurState(state);
  }, [state])

  const SaveCurState = async () => {
    if(curState){
      requestCancel();
    } else {
      groupJoinRequest();
    }
    SetCurState(curState ? false : true);
  } 

  const requestCancel = async () => {
    try {
      await fetch(`http://10.56.148.79:5500/deleteRequest/${id}/${userId}`, {
          method: 'DELETE'
      })
    } catch (error) {
        console.log(error)
    }
  }

  const groupJoinRequest = async () => {
    try {
      await fetch(`http://10.56.148.79:5500/groupJoinRequest`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            adminId: id,
            userId: userId
          })
      }).then((response) => response.json())
      .then((result) => {
          console.log(result)
      })
    } catch (error) {
        console.log(error)
    }
  }

  return(
    <List>
      <p>{children}</p>
      <div>
        <BgBtn bgColor={curState ? '#FFB996' : '#D9EDBF'} event={SaveCurState}>{curState ? '요청 취소' : '참가 요청'}</BgBtn>
      </div>
    </List>
  );
}

export default JoinRequestList;