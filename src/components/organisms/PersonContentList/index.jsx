import React, { useEffect, useState } from "react";
import * as S from "./styled"
import List from "../../atoms/List"
import BgBtn from "../../atoms/BgBtn";
import { Cookies } from "react-cookie";

const personContentList = ({children, key}) => {
  return(
    <List>
      <p key={key}>{children}</p>
      <div>
        <BgBtn bgColor={'#FFB996'}>권한 포기</BgBtn>
      </div>
    </List>
  );
}

export default personContentList;