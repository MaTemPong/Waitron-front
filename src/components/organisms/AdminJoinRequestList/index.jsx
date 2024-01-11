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
    requestCancel();
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

  return(
    <List>
      <p>{children}</p>
      <div>
        <BgBtn bgColor="red" event={SaveCurState}>거절</BgBtn>
      </div>
    </List>
  );
}

export default JoinRequestList;