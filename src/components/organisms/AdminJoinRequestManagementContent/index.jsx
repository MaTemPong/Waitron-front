import React, { useEffect } from "react";
import { Cookies } from "react-cookie";
import ListWrap from "../../atoms/ListWrap";
import * as S from "./styled"

const AdminJoinRequestManagementContent = ({filterText}) => {
    const cookies = new Cookies();
    const uesrId = cookies.get('id')

    const getRequests = async () => {
        try {
            await fetch(`http://10.56.148.79:5500/getUserRequest/${uesrId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getRequests();
    }, [])

    return (
        <S.Wrap>
            <ListWrap>

            </ListWrap>
        </S.Wrap>
    )
}

export default AdminJoinRequestManagementContent