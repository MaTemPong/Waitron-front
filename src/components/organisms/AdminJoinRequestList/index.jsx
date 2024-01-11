import React, { useEffect, useState } from "react";
import * as S from "./styled"
import List from "../../atoms/List"
import BgBtn from "../../atoms/BgBtn";
import { Cookies } from "react-cookie";

const JoinRequestList = ({children, id, rerender}) => {
  const cookies = new Cookies();
  const userId = cookies.get('id');


  const requestCancel = async () => {
    try {
      await fetch(`http://121.162.72.121:5500/deleteRequest/${id}/${userId}`, {
          method: 'DELETE'
      }).then(res => res.json())
      .then(result => {
        console.log(result)
        rerender();
      })
    } catch (error) {
        console.log(error)
    }
  }

  const accessRequest  = async () => {
    try {
      await fetch(`http://121.162.72.121:5500/accessRequest/${userId}/${id}`, {
          method: 'PATCH',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            adminId: userId,
            userId: id
          })
      }).then(res => res.json())
      .then(result => {
        console.log(result)
        rerender();
      })
    } catch (error) {
        console.log(error)
    }
  }

  return(
    <List>
      <p>{children}</p>
      <div style={{display:'flex', gap:'10px'}}>
        <BgBtn bgColor='#D9EDBF' event={accessRequest}>수락</BgBtn>
        <BgBtn bgColor='#FFB996' event={requestCancel}>취소</BgBtn>
      </div>
    </List>
  );
}

export default JoinRequestList;