import React from "react";
import * as S from "./styled"
import ManagementTitle from "../../atoms/ManagementTitle";


const WaitManagement = () => {
    return(
        <S.Wrap>
            <ManagementTitle text={"웨이팅 관리"}/>
        </S.Wrap>
    );
}

export default WaitManagement;